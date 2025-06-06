/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { VolumeGroups } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ElasticSanManagement } from "../elasticSanManagement.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  VolumeGroup,
  VolumeGroupsListByElasticSanNextOptionalParams,
  VolumeGroupsListByElasticSanOptionalParams,
  VolumeGroupsListByElasticSanResponse,
  VolumeGroupsCreateOptionalParams,
  VolumeGroupsCreateResponse,
  VolumeGroupUpdate,
  VolumeGroupsUpdateOptionalParams,
  VolumeGroupsUpdateResponse,
  VolumeGroupsDeleteOptionalParams,
  VolumeGroupsGetOptionalParams,
  VolumeGroupsGetResponse,
  VolumeGroupsListByElasticSanNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing VolumeGroups operations. */
export class VolumeGroupsImpl implements VolumeGroups {
  private readonly client: ElasticSanManagement;

  /**
   * Initialize a new instance of the class VolumeGroups class.
   * @param client Reference to the service client
   */
  constructor(client: ElasticSanManagement) {
    this.client = client;
  }

  /**
   * List VolumeGroups.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param options The options parameters.
   */
  public listByElasticSan(
    resourceGroupName: string,
    elasticSanName: string,
    options?: VolumeGroupsListByElasticSanOptionalParams,
  ): PagedAsyncIterableIterator<VolumeGroup> {
    const iter = this.listByElasticSanPagingAll(
      resourceGroupName,
      elasticSanName,
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
        return this.listByElasticSanPagingPage(
          resourceGroupName,
          elasticSanName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByElasticSanPagingPage(
    resourceGroupName: string,
    elasticSanName: string,
    options?: VolumeGroupsListByElasticSanOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<VolumeGroup[]> {
    let result: VolumeGroupsListByElasticSanResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByElasticSan(
        resourceGroupName,
        elasticSanName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByElasticSanNext(
        resourceGroupName,
        elasticSanName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByElasticSanPagingAll(
    resourceGroupName: string,
    elasticSanName: string,
    options?: VolumeGroupsListByElasticSanOptionalParams,
  ): AsyncIterableIterator<VolumeGroup> {
    for await (const page of this.listByElasticSanPagingPage(
      resourceGroupName,
      elasticSanName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List VolumeGroups.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param options The options parameters.
   */
  private _listByElasticSan(
    resourceGroupName: string,
    elasticSanName: string,
    options?: VolumeGroupsListByElasticSanOptionalParams,
  ): Promise<VolumeGroupsListByElasticSanResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, elasticSanName, options },
      listByElasticSanOperationSpec,
    );
  }

  /**
   * Create a Volume Group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param parameters Volume Group object.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    parameters: VolumeGroup,
    options?: VolumeGroupsCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VolumeGroupsCreateResponse>,
      VolumeGroupsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<VolumeGroupsCreateResponse> => {
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
        elasticSanName,
        volumeGroupName,
        parameters,
        options,
      },
      spec: createOperationSpec,
    });
    const poller = await createHttpPoller<
      VolumeGroupsCreateResponse,
      OperationState<VolumeGroupsCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create a Volume Group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param parameters Volume Group object.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    parameters: VolumeGroup,
    options?: VolumeGroupsCreateOptionalParams,
  ): Promise<VolumeGroupsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      elasticSanName,
      volumeGroupName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Update an VolumeGroup.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param parameters Volume Group object.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    parameters: VolumeGroupUpdate,
    options?: VolumeGroupsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VolumeGroupsUpdateResponse>,
      VolumeGroupsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<VolumeGroupsUpdateResponse> => {
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
        elasticSanName,
        volumeGroupName,
        parameters,
        options,
      },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      VolumeGroupsUpdateResponse,
      OperationState<VolumeGroupsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update an VolumeGroup.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param parameters Volume Group object.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    parameters: VolumeGroupUpdate,
    options?: VolumeGroupsUpdateOptionalParams,
  ): Promise<VolumeGroupsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      elasticSanName,
      volumeGroupName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete an VolumeGroup.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    options?: VolumeGroupsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<void> => {
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
      args: { resourceGroupName, elasticSanName, volumeGroupName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete an VolumeGroup.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    options?: VolumeGroupsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      elasticSanName,
      volumeGroupName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Get an VolumeGroups.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    options?: VolumeGroupsGetOptionalParams,
  ): Promise<VolumeGroupsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, elasticSanName, volumeGroupName, options },
      getOperationSpec,
    );
  }

  /**
   * ListByElasticSanNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param nextLink The nextLink from the previous successful call to the ListByElasticSan method.
   * @param options The options parameters.
   */
  private _listByElasticSanNext(
    resourceGroupName: string,
    elasticSanName: string,
    nextLink: string,
    options?: VolumeGroupsListByElasticSanNextOptionalParams,
  ): Promise<VolumeGroupsListByElasticSanNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, elasticSanName, nextLink, options },
      listByElasticSanNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByElasticSanOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumeGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VolumeGroupList,
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
    Parameters.elasticSanName,
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.xMsAccessSoftDeletedResources,
  ],
  serializer,
};
const createOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VolumeGroup,
    },
    201: {
      bodyMapper: Mappers.VolumeGroup,
    },
    202: {
      bodyMapper: Mappers.VolumeGroup,
    },
    204: {
      bodyMapper: Mappers.VolumeGroup,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.elasticSanName,
    Parameters.volumeGroupName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.VolumeGroup,
    },
    201: {
      bodyMapper: Mappers.VolumeGroup,
    },
    202: {
      bodyMapper: Mappers.VolumeGroup,
    },
    204: {
      bodyMapper: Mappers.VolumeGroup,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.elasticSanName,
    Parameters.volumeGroupName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.elasticSanName,
    Parameters.volumeGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VolumeGroup,
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
    Parameters.elasticSanName,
    Parameters.volumeGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByElasticSanNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VolumeGroupList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.elasticSanName,
    Parameters.nextLink,
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.xMsAccessSoftDeletedResources,
  ],
  serializer,
};
