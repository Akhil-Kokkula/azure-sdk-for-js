/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ConnectedEnvironmentsDaprComponents } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ContainerAppsAPIClient } from "../containerAppsAPIClient.js";
import {
  DaprComponent,
  ConnectedEnvironmentsDaprComponentsListNextOptionalParams,
  ConnectedEnvironmentsDaprComponentsListOptionalParams,
  ConnectedEnvironmentsDaprComponentsListResponse,
  ConnectedEnvironmentsDaprComponentsGetOptionalParams,
  ConnectedEnvironmentsDaprComponentsGetResponse,
  ConnectedEnvironmentsDaprComponentsCreateOrUpdateOptionalParams,
  ConnectedEnvironmentsDaprComponentsCreateOrUpdateResponse,
  ConnectedEnvironmentsDaprComponentsDeleteOptionalParams,
  ConnectedEnvironmentsDaprComponentsListSecretsOptionalParams,
  ConnectedEnvironmentsDaprComponentsListSecretsResponse,
  ConnectedEnvironmentsDaprComponentsListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ConnectedEnvironmentsDaprComponents operations. */
export class ConnectedEnvironmentsDaprComponentsImpl
  implements ConnectedEnvironmentsDaprComponents
{
  private readonly client: ContainerAppsAPIClient;

  /**
   * Initialize a new instance of the class ConnectedEnvironmentsDaprComponents class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerAppsAPIClient) {
    this.client = client;
  }

  /**
   * Get the Dapr Components for a connected environment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the connected environment.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    options?: ConnectedEnvironmentsDaprComponentsListOptionalParams,
  ): PagedAsyncIterableIterator<DaprComponent> {
    const iter = this.listPagingAll(
      resourceGroupName,
      connectedEnvironmentName,
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
          connectedEnvironmentName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    options?: ConnectedEnvironmentsDaprComponentsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<DaprComponent[]> {
    let result: ConnectedEnvironmentsDaprComponentsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        connectedEnvironmentName,
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
        connectedEnvironmentName,
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
    connectedEnvironmentName: string,
    options?: ConnectedEnvironmentsDaprComponentsListOptionalParams,
  ): AsyncIterableIterator<DaprComponent> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      connectedEnvironmentName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Get the Dapr Components for a connected environment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the connected environment.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    options?: ConnectedEnvironmentsDaprComponentsListOptionalParams,
  ): Promise<ConnectedEnvironmentsDaprComponentsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, connectedEnvironmentName, options },
      listOperationSpec,
    );
  }

  /**
   * Get a dapr component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the connected environment.
   * @param componentName Name of the Dapr Component.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    componentName: string,
    options?: ConnectedEnvironmentsDaprComponentsGetOptionalParams,
  ): Promise<ConnectedEnvironmentsDaprComponentsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, connectedEnvironmentName, componentName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a Dapr Component in a connected environment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the connected environment.
   * @param componentName Name of the Dapr Component.
   * @param daprComponentEnvelope Configuration details of the Dapr Component.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    componentName: string,
    daprComponentEnvelope: DaprComponent,
    options?: ConnectedEnvironmentsDaprComponentsCreateOrUpdateOptionalParams,
  ): Promise<ConnectedEnvironmentsDaprComponentsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        connectedEnvironmentName,
        componentName,
        daprComponentEnvelope,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Delete a Dapr Component from a connected environment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the connected environment.
   * @param componentName Name of the Dapr Component.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    componentName: string,
    options?: ConnectedEnvironmentsDaprComponentsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, connectedEnvironmentName, componentName, options },
      deleteOperationSpec,
    );
  }

  /**
   * List secrets for a dapr component
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the connected environment.
   * @param componentName Name of the Dapr Component.
   * @param options The options parameters.
   */
  listSecrets(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    componentName: string,
    options?: ConnectedEnvironmentsDaprComponentsListSecretsOptionalParams,
  ): Promise<ConnectedEnvironmentsDaprComponentsListSecretsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, connectedEnvironmentName, componentName, options },
      listSecretsOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the connected environment.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    nextLink: string,
    options?: ConnectedEnvironmentsDaprComponentsListNextOptionalParams,
  ): Promise<ConnectedEnvironmentsDaprComponentsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, connectedEnvironmentName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}/daprComponents",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DaprComponentsCollection,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.connectedEnvironmentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}/daprComponents/{componentName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DaprComponent,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.connectedEnvironmentName,
    Parameters.componentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}/daprComponents/{componentName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DaprComponent,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  requestBody: Parameters.daprComponentEnvelope,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.connectedEnvironmentName,
    Parameters.componentName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}/daprComponents/{componentName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.connectedEnvironmentName,
    Parameters.componentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listSecretsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}/daprComponents/{componentName}/listSecrets",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DaprSecretsCollection,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.connectedEnvironmentName,
    Parameters.componentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DaprComponentsCollection,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.connectedEnvironmentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
