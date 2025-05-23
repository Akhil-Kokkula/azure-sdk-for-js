// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { AvroReaderFactory } from "./AvroReaderFactory.js";
import type { ContainerClient, CommonOptions } from "@azure/storage-blob";
import { Chunk } from "./Chunk.js";
import { streamToAvroReadable } from "./utils/utils.node.js";
import type { AbortSignalLike } from "@azure/abort-controller";
import type { LazyLoadingBlobStreamFactory } from "./LazyLoadingBlobStreamFactory.js";
import { CHANGE_FEED_CHUNK_BLOCK_DOWNLOAD_SIZE } from "./utils/constants.js";
import type { AvroReader } from "@azure/storage-internal-avro";

/**
 * Options to configure {@link ChunkFactory.create} operation.
 */
export interface CreateChunkOptions extends CommonOptions {
  /**
   * An implementation of the `AbortSignalLike` interface to signal the request to cancel the operation.
   * For example, use the &commat;azure/abort-controller to create an `AbortSignal`.
   */
  abortSignal?: AbortSignalLike;
}

export class ChunkFactory {
  private readonly avroReaderFactory: AvroReaderFactory;
  private readonly lazyLoadingBlobStreamFactory: LazyLoadingBlobStreamFactory;
  private readonly maxTransferSize?: number;

  constructor(
    avroReaderFactory: AvroReaderFactory,
    lazyLoadingBlobStreamFactory: LazyLoadingBlobStreamFactory,
    maxTransferSize?: number,
  ) {
    this.avroReaderFactory = avroReaderFactory;
    this.lazyLoadingBlobStreamFactory = lazyLoadingBlobStreamFactory;
    this.maxTransferSize = maxTransferSize;
  }

  public async create(
    containerClient: ContainerClient,
    chunkPath: string,
    blockOffset?: number,
    eventIndex?: number,
    options: CreateChunkOptions = {},
  ): Promise<Chunk> {
    const blobClient = containerClient.getBlobClient(chunkPath);
    blockOffset = blockOffset || 0;
    eventIndex = eventIndex || 0;

    const dataStream = streamToAvroReadable(
      this.lazyLoadingBlobStreamFactory.create(
        blobClient,
        blockOffset,
        this.maxTransferSize ? this.maxTransferSize : CHANGE_FEED_CHUNK_BLOCK_DOWNLOAD_SIZE,
        options,
      ),
    );

    let avroReader: AvroReader;
    if (blockOffset !== 0) {
      const headerStream = streamToAvroReadable(
        this.lazyLoadingBlobStreamFactory.create(
          blobClient,
          0,
          this.maxTransferSize ? this.maxTransferSize : CHANGE_FEED_CHUNK_BLOCK_DOWNLOAD_SIZE,
          options,
        ),
      );
      avroReader = this.avroReaderFactory.create(dataStream, headerStream, blockOffset, eventIndex);
    } else {
      avroReader = this.avroReaderFactory.create(dataStream);
    }

    return new Chunk(avroReader, blockOffset, eventIndex, chunkPath, {
      abortSignal: options.abortSignal,
    });
  }
}
