/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Buckets } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { NetAppManagementClient } from "../netAppManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  Bucket,
  BucketsListNextOptionalParams,
  BucketsListOptionalParams,
  BucketsListResponse,
  BucketsGetOptionalParams,
  BucketsGetResponse,
  BucketsCreateOrUpdateOptionalParams,
  BucketsCreateOrUpdateResponse,
  BucketsUpdateOptionalParams,
  BucketsUpdateResponse,
  BucketsDeleteOptionalParams,
  BucketsDeleteResponse,
  BucketCredentialsExpiry,
  BucketsGenerateCredentialsOptionalParams,
  BucketsGenerateCredentialsResponse,
  BucketsListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Buckets operations. */
export class BucketsImpl implements Buckets {
  private readonly client: NetAppManagementClient;

  /**
   * Initialize a new instance of the class Buckets class.
   * @param client Reference to the service client
   */
  constructor(client: NetAppManagementClient) {
    this.client = client;
  }

  /**
   * Describes all buckets belonging to a volume. Buckets allow additional services, such as AI services,
   * connect to the volume data contained in those buckets.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: BucketsListOptionalParams,
  ): PagedAsyncIterableIterator<Bucket> {
    const iter = this.listPagingAll(
      resourceGroupName,
      accountName,
      poolName,
      volumeName,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          accountName,
          poolName,
          volumeName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: BucketsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Bucket[]> {
    let result: BucketsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        accountName,
        poolName,
        volumeName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        accountName,
        poolName,
        volumeName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: BucketsListOptionalParams,
  ): AsyncIterableIterator<Bucket> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      accountName,
      poolName,
      volumeName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Describes all buckets belonging to a volume. Buckets allow additional services, such as AI services,
   * connect to the volume data contained in those buckets.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: BucketsListOptionalParams,
  ): Promise<BucketsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, poolName, volumeName, options },
      listOperationSpec,
    );
  }

  /**
   * Get the details of the specified volume's bucket. A bucket allows additional services, such as AI
   * services, connect to the volume data contained in those buckets.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param bucketName The name of the bucket
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    bucketName: string,
    options?: BucketsGetOptionalParams,
  ): Promise<BucketsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        poolName,
        volumeName,
        bucketName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a bucket for a volume. A bucket allows additional services, such as AI services,
   * connect to the volume data contained in those buckets.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param bucketName The name of the bucket
   * @param body The bucket details including user details, and the volume path that should be mounted
   *             inside the bucket.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    bucketName: string,
    body: Bucket,
    options?: BucketsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<BucketsCreateOrUpdateResponse>,
      BucketsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<BucketsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        accountName,
        poolName,
        volumeName,
        bucketName,
        body,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      BucketsCreateOrUpdateResponse,
      OperationState<BucketsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a bucket for a volume. A bucket allows additional services, such as AI services,
   * connect to the volume data contained in those buckets.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param bucketName The name of the bucket
   * @param body The bucket details including user details, and the volume path that should be mounted
   *             inside the bucket.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    bucketName: string,
    body: Bucket,
    options?: BucketsCreateOrUpdateOptionalParams,
  ): Promise<BucketsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      accountName,
      poolName,
      volumeName,
      bucketName,
      body,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates the details of a volume bucket.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param bucketName The name of the bucket
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    bucketName: string,
    options?: BucketsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<BucketsUpdateResponse>,
      BucketsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<BucketsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        accountName,
        poolName,
        volumeName,
        bucketName,
        options,
      },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      BucketsUpdateResponse,
      OperationState<BucketsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates the details of a volume bucket.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param bucketName The name of the bucket
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    bucketName: string,
    options?: BucketsUpdateOptionalParams,
  ): Promise<BucketsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      accountName,
      poolName,
      volumeName,
      bucketName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a volume's bucket.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param bucketName The name of the bucket
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    bucketName: string,
    options?: BucketsDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<BucketsDeleteResponse>,
      BucketsDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<BucketsDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        accountName,
        poolName,
        volumeName,
        bucketName,
        options,
      },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<
      BucketsDeleteResponse,
      OperationState<BucketsDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a volume's bucket.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param bucketName The name of the bucket
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    bucketName: string,
    options?: BucketsDeleteOptionalParams,
  ): Promise<BucketsDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      accountName,
      poolName,
      volumeName,
      bucketName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Generate the access key and secret key used for accessing the specified volume bucket. Also return
   * expiry date and time of key pair (in UTC).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param bucketName The name of the bucket
   * @param body The bucket's Access and Secret key pair expiry time expressed as the number of days from
   *             now.
   * @param options The options parameters.
   */
  generateCredentials(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    bucketName: string,
    body: BucketCredentialsExpiry,
    options?: BucketsGenerateCredentialsOptionalParams,
  ): Promise<BucketsGenerateCredentialsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        poolName,
        volumeName,
        bucketName,
        body,
        options,
      },
      generateCredentialsOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    nextLink: string,
    options?: BucketsListNextOptionalParams,
  ): Promise<BucketsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        poolName,
        volumeName,
        nextLink,
        options,
      },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/buckets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BucketList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.poolName,
    Parameters.volumeName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/buckets/{bucketName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Bucket,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.poolName,
    Parameters.volumeName,
    Parameters.bucketName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/buckets/{bucketName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Bucket,
    },
    201: {
      bodyMapper: Mappers.Bucket,
    },
    202: {
      bodyMapper: Mappers.Bucket,
    },
    204: {
      bodyMapper: Mappers.Bucket,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body40,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.poolName,
    Parameters.volumeName,
    Parameters.bucketName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/buckets/{bucketName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Bucket,
    },
    201: {
      bodyMapper: Mappers.Bucket,
    },
    202: {
      bodyMapper: Mappers.Bucket,
    },
    204: {
      bodyMapper: Mappers.Bucket,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body41,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.poolName,
    Parameters.volumeName,
    Parameters.bucketName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/buckets/{bucketName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.BucketsDeleteHeaders,
    },
    201: {
      headersMapper: Mappers.BucketsDeleteHeaders,
    },
    202: {
      headersMapper: Mappers.BucketsDeleteHeaders,
    },
    204: {
      headersMapper: Mappers.BucketsDeleteHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.poolName,
    Parameters.volumeName,
    Parameters.bucketName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const generateCredentialsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/buckets/{bucketName}/generateCredentials",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.BucketGenerateCredentials,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body42,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.poolName,
    Parameters.volumeName,
    Parameters.bucketName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BucketList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.poolName,
    Parameters.volumeName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
