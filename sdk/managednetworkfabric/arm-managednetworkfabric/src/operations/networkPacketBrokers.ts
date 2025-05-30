/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { NetworkPacketBrokers } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AzureNetworkFabricManagementServiceAPI } from "../azureNetworkFabricManagementServiceAPI.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  NetworkPacketBroker,
  NetworkPacketBrokersListByResourceGroupNextOptionalParams,
  NetworkPacketBrokersListByResourceGroupOptionalParams,
  NetworkPacketBrokersListByResourceGroupResponse,
  NetworkPacketBrokersListBySubscriptionNextOptionalParams,
  NetworkPacketBrokersListBySubscriptionOptionalParams,
  NetworkPacketBrokersListBySubscriptionResponse,
  NetworkPacketBrokersCreateOptionalParams,
  NetworkPacketBrokersCreateResponse,
  NetworkPacketBrokersGetOptionalParams,
  NetworkPacketBrokersGetResponse,
  NetworkPacketBrokerPatch,
  NetworkPacketBrokersUpdateOptionalParams,
  NetworkPacketBrokersUpdateResponse,
  NetworkPacketBrokersDeleteOptionalParams,
  NetworkPacketBrokersListByResourceGroupNextResponse,
  NetworkPacketBrokersListBySubscriptionNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing NetworkPacketBrokers operations. */
export class NetworkPacketBrokersImpl implements NetworkPacketBrokers {
  private readonly client: AzureNetworkFabricManagementServiceAPI;

  /**
   * Initialize a new instance of the class NetworkPacketBrokers class.
   * @param client Reference to the service client
   */
  constructor(client: AzureNetworkFabricManagementServiceAPI) {
    this.client = client;
  }

  /**
   * Displays NetworkPacketBrokers list by resource group GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: NetworkPacketBrokersListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<NetworkPacketBroker> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: NetworkPacketBrokersListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<NetworkPacketBroker[]> {
    let result: NetworkPacketBrokersListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: NetworkPacketBrokersListByResourceGroupOptionalParams
  ): AsyncIterableIterator<NetworkPacketBroker> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Displays Network Packet Brokers list by subscription GET method.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: NetworkPacketBrokersListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<NetworkPacketBroker> {
    const iter = this.listBySubscriptionPagingAll(options);
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
        return this.listBySubscriptionPagingPage(options, settings);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: NetworkPacketBrokersListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<NetworkPacketBroker[]> {
    let result: NetworkPacketBrokersListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: NetworkPacketBrokersListBySubscriptionOptionalParams
  ): AsyncIterableIterator<NetworkPacketBroker> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Creates a Network Packet Broker.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkPacketBrokerName Name of the Network Packet Broker.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    networkPacketBrokerName: string,
    body: NetworkPacketBroker,
    options?: NetworkPacketBrokersCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkPacketBrokersCreateResponse>,
      NetworkPacketBrokersCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NetworkPacketBrokersCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
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

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, networkPacketBrokerName, body, options },
      spec: createOperationSpec
    });
    const poller = await createHttpPoller<
      NetworkPacketBrokersCreateResponse,
      OperationState<NetworkPacketBrokersCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a Network Packet Broker.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkPacketBrokerName Name of the Network Packet Broker.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    networkPacketBrokerName: string,
    body: NetworkPacketBroker,
    options?: NetworkPacketBrokersCreateOptionalParams
  ): Promise<NetworkPacketBrokersCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      networkPacketBrokerName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Retrieves details of this Network Packet Broker.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkPacketBrokerName Name of the Network Packet Broker.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkPacketBrokerName: string,
    options?: NetworkPacketBrokersGetOptionalParams
  ): Promise<NetworkPacketBrokersGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, networkPacketBrokerName, options },
      getOperationSpec
    );
  }

  /**
   * API to update certain properties of the Network Packet Broker resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkPacketBrokerName Name of the Network Packet Broker.
   * @param body Network Packet Broker properties to update.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    networkPacketBrokerName: string,
    body: NetworkPacketBrokerPatch,
    options?: NetworkPacketBrokersUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkPacketBrokersUpdateResponse>,
      NetworkPacketBrokersUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NetworkPacketBrokersUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
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

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, networkPacketBrokerName, body, options },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      NetworkPacketBrokersUpdateResponse,
      OperationState<NetworkPacketBrokersUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * API to update certain properties of the Network Packet Broker resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkPacketBrokerName Name of the Network Packet Broker.
   * @param body Network Packet Broker properties to update.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    networkPacketBrokerName: string,
    body: NetworkPacketBrokerPatch,
    options?: NetworkPacketBrokersUpdateOptionalParams
  ): Promise<NetworkPacketBrokersUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      networkPacketBrokerName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes Network Packet Broker.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkPacketBrokerName Name of the Network Packet Broker.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    networkPacketBrokerName: string,
    options?: NetworkPacketBrokersDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
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

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, networkPacketBrokerName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes Network Packet Broker.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkPacketBrokerName Name of the Network Packet Broker.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    networkPacketBrokerName: string,
    options?: NetworkPacketBrokersDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      networkPacketBrokerName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Displays NetworkPacketBrokers list by resource group GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: NetworkPacketBrokersListByResourceGroupOptionalParams
  ): Promise<NetworkPacketBrokersListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Displays Network Packet Brokers list by subscription GET method.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: NetworkPacketBrokersListBySubscriptionOptionalParams
  ): Promise<NetworkPacketBrokersListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: NetworkPacketBrokersListByResourceGroupNextOptionalParams
  ): Promise<NetworkPacketBrokersListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: NetworkPacketBrokersListBySubscriptionNextOptionalParams
  ): Promise<NetworkPacketBrokersListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkPacketBrokers/{networkPacketBrokerName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkPacketBroker
    },
    201: {
      bodyMapper: Mappers.NetworkPacketBroker
    },
    202: {
      bodyMapper: Mappers.NetworkPacketBroker
    },
    204: {
      bodyMapper: Mappers.NetworkPacketBroker
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body37,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.networkPacketBrokerName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkPacketBrokers/{networkPacketBrokerName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkPacketBroker
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
    Parameters.networkPacketBrokerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkPacketBrokers/{networkPacketBrokerName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkPacketBroker
    },
    201: {
      bodyMapper: Mappers.NetworkPacketBroker
    },
    202: {
      bodyMapper: Mappers.NetworkPacketBroker
    },
    204: {
      bodyMapper: Mappers.NetworkPacketBroker
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body38,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.networkPacketBrokerName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkPacketBrokers/{networkPacketBrokerName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.networkPacketBrokerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/networkPacketBrokers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkPacketBrokersListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/networkPacketBrokers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkPacketBrokersListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkPacketBrokersListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkPacketBrokersListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
