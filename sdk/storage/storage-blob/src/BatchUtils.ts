// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { ServiceSubmitBatchResponseModel } from "./generatedModels.js";
import { streamToBuffer2 } from "./utils/utils.js";
import { BATCH_MAX_PAYLOAD_IN_BYTES } from "./utils/constants.js";

export async function getBodyAsText(
  batchResponse: ServiceSubmitBatchResponseModel,
): Promise<string> {
  let buffer = Buffer.alloc(BATCH_MAX_PAYLOAD_IN_BYTES);

  const responseLength = await streamToBuffer2(
    batchResponse.readableStreamBody as NodeJS.ReadableStream,
    buffer,
  );

  // Slice the buffer to trim the empty ending.
  buffer = buffer.slice(0, responseLength);

  return buffer.toString();
}

export function utf8ByteLength(str: string): number {
  return Buffer.byteLength(str);
}
