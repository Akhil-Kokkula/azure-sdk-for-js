/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Policies } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { CdnManagementClient } from "../cdnManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  CdnWebApplicationFirewallPolicy,
  PoliciesListNextOptionalParams,
  PoliciesListOptionalParams,
  PoliciesListResponse,
  PoliciesGetOptionalParams,
  PoliciesGetResponse,
  PoliciesCreateOrUpdateOptionalParams,
  PoliciesCreateOrUpdateResponse,
  CdnWebApplicationFirewallPolicyPatchParameters,
  PoliciesUpdateOptionalParams,
  PoliciesUpdateResponse,
  PoliciesDeleteOptionalParams,
  PoliciesListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Policies operations. */
export class PoliciesImpl implements Policies {
  private readonly client: CdnManagementClient;

  /**
   * Initialize a new instance of the class Policies class.
   * @param client Reference to the service client
   */
  constructor(client: CdnManagementClient) {
    this.client = client;
  }

  /**
   * Lists all of the protection policies within a resource group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    options?: PoliciesListOptionalParams,
  ): PagedAsyncIterableIterator<CdnWebApplicationFirewallPolicy> {
    const iter = this.listPagingAll(resourceGroupName, options);
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
        return this.listPagingPage(resourceGroupName, options, settings);
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    options?: PoliciesListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<CdnWebApplicationFirewallPolicy[]> {
    let result: PoliciesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
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
    options?: PoliciesListOptionalParams,
  ): AsyncIterableIterator<CdnWebApplicationFirewallPolicy> {
    for await (const page of this.listPagingPage(resourceGroupName, options)) {
      yield* page;
    }
  }

  /**
   * Lists all of the protection policies within a resource group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    options?: PoliciesListOptionalParams,
  ): Promise<PoliciesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listOperationSpec,
    );
  }

  /**
   * Retrieve protection policy with specified name within a resource group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param policyName The name of the CdnWebApplicationFirewallPolicy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    policyName: string,
    options?: PoliciesGetOptionalParams,
  ): Promise<PoliciesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, policyName, options },
      getOperationSpec,
    );
  }

  /**
   * Create or update policy with specified rule set name within a resource group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param policyName The name of the CdnWebApplicationFirewallPolicy.
   * @param cdnWebApplicationFirewallPolicy Policy to be created.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    policyName: string,
    cdnWebApplicationFirewallPolicy: CdnWebApplicationFirewallPolicy,
    options?: PoliciesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<PoliciesCreateOrUpdateResponse>,
      PoliciesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<PoliciesCreateOrUpdateResponse> => {
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
        policyName,
        cdnWebApplicationFirewallPolicy,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      PoliciesCreateOrUpdateResponse,
      OperationState<PoliciesCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update policy with specified rule set name within a resource group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param policyName The name of the CdnWebApplicationFirewallPolicy.
   * @param cdnWebApplicationFirewallPolicy Policy to be created.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    policyName: string,
    cdnWebApplicationFirewallPolicy: CdnWebApplicationFirewallPolicy,
    options?: PoliciesCreateOrUpdateOptionalParams,
  ): Promise<PoliciesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      policyName,
      cdnWebApplicationFirewallPolicy,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Update an existing CdnWebApplicationFirewallPolicy with the specified policy name under the
   * specified subscription and resource group
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param policyName The name of the CdnWebApplicationFirewallPolicy.
   * @param cdnWebApplicationFirewallPolicyPatchParameters CdnWebApplicationFirewallPolicy parameters to
   *                                                       be patched.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    policyName: string,
    cdnWebApplicationFirewallPolicyPatchParameters: CdnWebApplicationFirewallPolicyPatchParameters,
    options?: PoliciesUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<PoliciesUpdateResponse>,
      PoliciesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<PoliciesUpdateResponse> => {
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
        policyName,
        cdnWebApplicationFirewallPolicyPatchParameters,
        options,
      },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      PoliciesUpdateResponse,
      OperationState<PoliciesUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update an existing CdnWebApplicationFirewallPolicy with the specified policy name under the
   * specified subscription and resource group
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param policyName The name of the CdnWebApplicationFirewallPolicy.
   * @param cdnWebApplicationFirewallPolicyPatchParameters CdnWebApplicationFirewallPolicy parameters to
   *                                                       be patched.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    policyName: string,
    cdnWebApplicationFirewallPolicyPatchParameters: CdnWebApplicationFirewallPolicyPatchParameters,
    options?: PoliciesUpdateOptionalParams,
  ): Promise<PoliciesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      policyName,
      cdnWebApplicationFirewallPolicyPatchParameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes Policy
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param policyName The name of the CdnWebApplicationFirewallPolicy.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    policyName: string,
    options?: PoliciesDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, policyName, options },
      deleteOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    nextLink: string,
    options?: PoliciesListNextOptionalParams,
  ): Promise<PoliciesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/cdnWebApplicationFirewallPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CdnWebApplicationFirewallPolicyList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/cdnWebApplicationFirewallPolicies/{policyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CdnWebApplicationFirewallPolicy,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName1,
    Parameters.policyName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/cdnWebApplicationFirewallPolicies/{policyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.CdnWebApplicationFirewallPolicy,
    },
    201: {
      bodyMapper: Mappers.CdnWebApplicationFirewallPolicy,
    },
    202: {
      bodyMapper: Mappers.CdnWebApplicationFirewallPolicy,
    },
    204: {
      bodyMapper: Mappers.CdnWebApplicationFirewallPolicy,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.cdnWebApplicationFirewallPolicy,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName1,
    Parameters.policyName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/cdnWebApplicationFirewallPolicies/{policyName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.CdnWebApplicationFirewallPolicy,
    },
    201: {
      bodyMapper: Mappers.CdnWebApplicationFirewallPolicy,
    },
    202: {
      bodyMapper: Mappers.CdnWebApplicationFirewallPolicy,
    },
    204: {
      bodyMapper: Mappers.CdnWebApplicationFirewallPolicy,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.cdnWebApplicationFirewallPolicyPatchParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName1,
    Parameters.policyName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/cdnWebApplicationFirewallPolicies/{policyName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName1,
    Parameters.policyName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CdnWebApplicationFirewallPolicyList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceGroupName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
