/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { WorkspaceManagedSqlServerEncryptionProtector } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { SynapseManagementClient } from "../synapseManagementClient.js";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl.js";
import {
  EncryptionProtector,
  WorkspaceManagedSqlServerEncryptionProtectorListNextOptionalParams,
  WorkspaceManagedSqlServerEncryptionProtectorListOptionalParams,
  WorkspaceManagedSqlServerEncryptionProtectorListResponse,
  EncryptionProtectorName,
  WorkspaceManagedSqlServerEncryptionProtectorGetOptionalParams,
  WorkspaceManagedSqlServerEncryptionProtectorGetResponse,
  WorkspaceManagedSqlServerEncryptionProtectorCreateOrUpdateOptionalParams,
  WorkspaceManagedSqlServerEncryptionProtectorCreateOrUpdateResponse,
  WorkspaceManagedSqlServerEncryptionProtectorRevalidateOptionalParams,
  WorkspaceManagedSqlServerEncryptionProtectorListNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing WorkspaceManagedSqlServerEncryptionProtector operations. */
export class WorkspaceManagedSqlServerEncryptionProtectorImpl
  implements WorkspaceManagedSqlServerEncryptionProtector {
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class WorkspaceManagedSqlServerEncryptionProtector class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * Get list of encryption protectors for workspace managed sql server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceManagedSqlServerEncryptionProtectorListOptionalParams
  ): PagedAsyncIterableIterator<EncryptionProtector> {
    const iter = this.listPagingAll(resourceGroupName, workspaceName, options);
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
          workspaceName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceManagedSqlServerEncryptionProtectorListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<EncryptionProtector[]> {
    let result: WorkspaceManagedSqlServerEncryptionProtectorListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, workspaceName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        workspaceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceManagedSqlServerEncryptionProtectorListOptionalParams
  ): AsyncIterableIterator<EncryptionProtector> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get workspace managed sql server's encryption protector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param encryptionProtectorName The name of the encryption protector.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    encryptionProtectorName: EncryptionProtectorName,
    options?: WorkspaceManagedSqlServerEncryptionProtectorGetOptionalParams
  ): Promise<WorkspaceManagedSqlServerEncryptionProtectorGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, encryptionProtectorName, options },
      getOperationSpec
    );
  }

  /**
   * Updates workspace managed sql server's encryption protector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param encryptionProtectorName The name of the encryption protector.
   * @param parameters The requested encryption protector resource state.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    encryptionProtectorName: EncryptionProtectorName,
    parameters: EncryptionProtector,
    options?: WorkspaceManagedSqlServerEncryptionProtectorCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        WorkspaceManagedSqlServerEncryptionProtectorCreateOrUpdateResponse
      >,
      WorkspaceManagedSqlServerEncryptionProtectorCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<WorkspaceManagedSqlServerEncryptionProtectorCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        workspaceName,
        encryptionProtectorName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates workspace managed sql server's encryption protector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param encryptionProtectorName The name of the encryption protector.
   * @param parameters The requested encryption protector resource state.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    encryptionProtectorName: EncryptionProtectorName,
    parameters: EncryptionProtector,
    options?: WorkspaceManagedSqlServerEncryptionProtectorCreateOrUpdateOptionalParams
  ): Promise<
    WorkspaceManagedSqlServerEncryptionProtectorCreateOrUpdateResponse
  > {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      workspaceName,
      encryptionProtectorName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get list of encryption protectors for workspace managed sql server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceManagedSqlServerEncryptionProtectorListOptionalParams
  ): Promise<WorkspaceManagedSqlServerEncryptionProtectorListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listOperationSpec
    );
  }

  /**
   * Revalidates workspace managed sql server's existing encryption protector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param encryptionProtectorName The name of the encryption protector.
   * @param options The options parameters.
   */
  async beginRevalidate(
    resourceGroupName: string,
    workspaceName: string,
    encryptionProtectorName: EncryptionProtectorName,
    options?: WorkspaceManagedSqlServerEncryptionProtectorRevalidateOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, workspaceName, encryptionProtectorName, options },
      revalidateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Revalidates workspace managed sql server's existing encryption protector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param encryptionProtectorName The name of the encryption protector.
   * @param options The options parameters.
   */
  async beginRevalidateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    encryptionProtectorName: EncryptionProtectorName,
    options?: WorkspaceManagedSqlServerEncryptionProtectorRevalidateOptionalParams
  ): Promise<void> {
    const poller = await this.beginRevalidate(
      resourceGroupName,
      workspaceName,
      encryptionProtectorName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    workspaceName: string,
    nextLink: string,
    options?: WorkspaceManagedSqlServerEncryptionProtectorListNextOptionalParams
  ): Promise<WorkspaceManagedSqlServerEncryptionProtectorListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/encryptionProtector/{encryptionProtectorName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EncryptionProtector
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.encryptionProtectorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/encryptionProtector/{encryptionProtectorName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.EncryptionProtector
    },
    201: {
      bodyMapper: Mappers.EncryptionProtector
    },
    202: {
      bodyMapper: Mappers.EncryptionProtector
    },
    204: {
      bodyMapper: Mappers.EncryptionProtector
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters21,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.encryptionProtectorName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/encryptionProtector",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EncryptionProtectorListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const revalidateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/encryptionProtector/{encryptionProtectorName}/revalidate",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.encryptionProtectorName
  ],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EncryptionProtectorListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
