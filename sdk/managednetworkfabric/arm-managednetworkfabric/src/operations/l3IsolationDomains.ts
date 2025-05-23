/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { L3IsolationDomains } from "../operationsInterfaces/index.js";
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
  L3IsolationDomain,
  L3IsolationDomainsListByResourceGroupNextOptionalParams,
  L3IsolationDomainsListByResourceGroupOptionalParams,
  L3IsolationDomainsListByResourceGroupResponse,
  L3IsolationDomainsListBySubscriptionNextOptionalParams,
  L3IsolationDomainsListBySubscriptionOptionalParams,
  L3IsolationDomainsListBySubscriptionResponse,
  L3IsolationDomainsCreateOptionalParams,
  L3IsolationDomainsCreateResponse,
  L3IsolationDomainsGetOptionalParams,
  L3IsolationDomainsGetResponse,
  L3IsolationDomainPatch,
  L3IsolationDomainsUpdateOptionalParams,
  L3IsolationDomainsUpdateResponse,
  L3IsolationDomainsDeleteOptionalParams,
  UpdateAdministrativeState,
  L3IsolationDomainsUpdateAdministrativeStateOptionalParams,
  L3IsolationDomainsUpdateAdministrativeStateResponse,
  L3IsolationDomainsValidateConfigurationOptionalParams,
  L3IsolationDomainsValidateConfigurationResponse,
  L3IsolationDomainsCommitConfigurationOptionalParams,
  L3IsolationDomainsCommitConfigurationResponse,
  L3IsolationDomainsListByResourceGroupNextResponse,
  L3IsolationDomainsListBySubscriptionNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing L3IsolationDomains operations. */
export class L3IsolationDomainsImpl implements L3IsolationDomains {
  private readonly client: AzureNetworkFabricManagementServiceAPI;

  /**
   * Initialize a new instance of the class L3IsolationDomains class.
   * @param client Reference to the service client
   */
  constructor(client: AzureNetworkFabricManagementServiceAPI) {
    this.client = client;
  }

  /**
   * Displays L3IsolationDomains list by resource group GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: L3IsolationDomainsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<L3IsolationDomain> {
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
    options?: L3IsolationDomainsListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<L3IsolationDomain[]> {
    let result: L3IsolationDomainsListByResourceGroupResponse;
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
    options?: L3IsolationDomainsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<L3IsolationDomain> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Displays L3IsolationDomains list by subscription GET method.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: L3IsolationDomainsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<L3IsolationDomain> {
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
    options?: L3IsolationDomainsListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<L3IsolationDomain[]> {
    let result: L3IsolationDomainsListBySubscriptionResponse;
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
    options?: L3IsolationDomainsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<L3IsolationDomain> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Create isolation domain resources for layer 3 connectivity between compute nodes and for
   * communication with external services .This configuration is applied on the devices only after the
   * creation of networks is completed and isolation domain is enabled.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    body: L3IsolationDomain,
    options?: L3IsolationDomainsCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<L3IsolationDomainsCreateResponse>,
      L3IsolationDomainsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<L3IsolationDomainsCreateResponse> => {
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
      args: { resourceGroupName, l3IsolationDomainName, body, options },
      spec: createOperationSpec
    });
    const poller = await createHttpPoller<
      L3IsolationDomainsCreateResponse,
      OperationState<L3IsolationDomainsCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create isolation domain resources for layer 3 connectivity between compute nodes and for
   * communication with external services .This configuration is applied on the devices only after the
   * creation of networks is completed and isolation domain is enabled.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    body: L3IsolationDomain,
    options?: L3IsolationDomainsCreateOptionalParams
  ): Promise<L3IsolationDomainsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      l3IsolationDomainName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Retrieves details of this L3 Isolation Domain.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    options?: L3IsolationDomainsGetOptionalParams
  ): Promise<L3IsolationDomainsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, l3IsolationDomainName, options },
      getOperationSpec
    );
  }

  /**
   * API to update certain properties of the L3 Isolation Domain resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param body API to update certain properties of the L3 Isolation Domain resource.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    body: L3IsolationDomainPatch,
    options?: L3IsolationDomainsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<L3IsolationDomainsUpdateResponse>,
      L3IsolationDomainsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<L3IsolationDomainsUpdateResponse> => {
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
      args: { resourceGroupName, l3IsolationDomainName, body, options },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      L3IsolationDomainsUpdateResponse,
      OperationState<L3IsolationDomainsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * API to update certain properties of the L3 Isolation Domain resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param body API to update certain properties of the L3 Isolation Domain resource.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    body: L3IsolationDomainPatch,
    options?: L3IsolationDomainsUpdateOptionalParams
  ): Promise<L3IsolationDomainsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      l3IsolationDomainName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes layer 3 connectivity between compute nodes by managed by named L3 Isolation name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    options?: L3IsolationDomainsDeleteOptionalParams
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
      args: { resourceGroupName, l3IsolationDomainName, options },
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
   * Deletes layer 3 connectivity between compute nodes by managed by named L3 Isolation name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    options?: L3IsolationDomainsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      l3IsolationDomainName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Displays L3IsolationDomains list by resource group GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: L3IsolationDomainsListByResourceGroupOptionalParams
  ): Promise<L3IsolationDomainsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Displays L3IsolationDomains list by subscription GET method.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: L3IsolationDomainsListBySubscriptionOptionalParams
  ): Promise<L3IsolationDomainsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Enables racks for this Isolation Domain.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginUpdateAdministrativeState(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    body: UpdateAdministrativeState,
    options?: L3IsolationDomainsUpdateAdministrativeStateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<L3IsolationDomainsUpdateAdministrativeStateResponse>,
      L3IsolationDomainsUpdateAdministrativeStateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<L3IsolationDomainsUpdateAdministrativeStateResponse> => {
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
      args: { resourceGroupName, l3IsolationDomainName, body, options },
      spec: updateAdministrativeStateOperationSpec
    });
    const poller = await createHttpPoller<
      L3IsolationDomainsUpdateAdministrativeStateResponse,
      OperationState<L3IsolationDomainsUpdateAdministrativeStateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Enables racks for this Isolation Domain.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginUpdateAdministrativeStateAndWait(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    body: UpdateAdministrativeState,
    options?: L3IsolationDomainsUpdateAdministrativeStateOptionalParams
  ): Promise<L3IsolationDomainsUpdateAdministrativeStateResponse> {
    const poller = await this.beginUpdateAdministrativeState(
      resourceGroupName,
      l3IsolationDomainName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Validates the configuration of the resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param options The options parameters.
   */
  async beginValidateConfiguration(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    options?: L3IsolationDomainsValidateConfigurationOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<L3IsolationDomainsValidateConfigurationResponse>,
      L3IsolationDomainsValidateConfigurationResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<L3IsolationDomainsValidateConfigurationResponse> => {
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
      args: { resourceGroupName, l3IsolationDomainName, options },
      spec: validateConfigurationOperationSpec
    });
    const poller = await createHttpPoller<
      L3IsolationDomainsValidateConfigurationResponse,
      OperationState<L3IsolationDomainsValidateConfigurationResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Validates the configuration of the resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param options The options parameters.
   */
  async beginValidateConfigurationAndWait(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    options?: L3IsolationDomainsValidateConfigurationOptionalParams
  ): Promise<L3IsolationDomainsValidateConfigurationResponse> {
    const poller = await this.beginValidateConfiguration(
      resourceGroupName,
      l3IsolationDomainName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Commits the configuration of the given resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param options The options parameters.
   */
  async beginCommitConfiguration(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    options?: L3IsolationDomainsCommitConfigurationOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<L3IsolationDomainsCommitConfigurationResponse>,
      L3IsolationDomainsCommitConfigurationResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<L3IsolationDomainsCommitConfigurationResponse> => {
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
      args: { resourceGroupName, l3IsolationDomainName, options },
      spec: commitConfigurationOperationSpec
    });
    const poller = await createHttpPoller<
      L3IsolationDomainsCommitConfigurationResponse,
      OperationState<L3IsolationDomainsCommitConfigurationResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Commits the configuration of the given resources.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3IsolationDomainName Name of the L3 Isolation Domain.
   * @param options The options parameters.
   */
  async beginCommitConfigurationAndWait(
    resourceGroupName: string,
    l3IsolationDomainName: string,
    options?: L3IsolationDomainsCommitConfigurationOptionalParams
  ): Promise<L3IsolationDomainsCommitConfigurationResponse> {
    const poller = await this.beginCommitConfiguration(
      resourceGroupName,
      l3IsolationDomainName,
      options
    );
    return poller.pollUntilDone();
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
    options?: L3IsolationDomainsListByResourceGroupNextOptionalParams
  ): Promise<L3IsolationDomainsListByResourceGroupNextResponse> {
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
    options?: L3IsolationDomainsListBySubscriptionNextOptionalParams
  ): Promise<L3IsolationDomainsListBySubscriptionNextResponse> {
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.L3IsolationDomain
    },
    201: {
      bodyMapper: Mappers.L3IsolationDomain
    },
    202: {
      bodyMapper: Mappers.L3IsolationDomain
    },
    204: {
      bodyMapper: Mappers.L3IsolationDomain
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body15,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.l3IsolationDomainName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.L3IsolationDomain
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
    Parameters.l3IsolationDomainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.L3IsolationDomain
    },
    201: {
      bodyMapper: Mappers.L3IsolationDomain
    },
    202: {
      bodyMapper: Mappers.L3IsolationDomain
    },
    204: {
      bodyMapper: Mappers.L3IsolationDomain
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body16,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.l3IsolationDomainName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}",
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
    Parameters.l3IsolationDomainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.L3IsolationDomainsListResult
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
    "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.L3IsolationDomainsListResult
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
const updateAdministrativeStateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/updateAdministrativeState",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CommonPostActionResponseForDeviceUpdate
    },
    201: {
      bodyMapper: Mappers.CommonPostActionResponseForDeviceUpdate
    },
    202: {
      bodyMapper: Mappers.CommonPostActionResponseForDeviceUpdate
    },
    204: {
      bodyMapper: Mappers.CommonPostActionResponseForDeviceUpdate
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.l3IsolationDomainName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const validateConfigurationOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/validateConfiguration",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ValidateConfigurationResponse
    },
    201: {
      bodyMapper: Mappers.ValidateConfigurationResponse
    },
    202: {
      bodyMapper: Mappers.ValidateConfigurationResponse
    },
    204: {
      bodyMapper: Mappers.ValidateConfigurationResponse
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
    Parameters.l3IsolationDomainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const commitConfigurationOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/{l3IsolationDomainName}/commitConfiguration",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CommonPostActionResponseForStateUpdate
    },
    201: {
      bodyMapper: Mappers.CommonPostActionResponseForStateUpdate
    },
    202: {
      bodyMapper: Mappers.CommonPostActionResponseForStateUpdate
    },
    204: {
      bodyMapper: Mappers.CommonPostActionResponseForStateUpdate
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
    Parameters.l3IsolationDomainName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.L3IsolationDomainsListResult
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
      bodyMapper: Mappers.L3IsolationDomainsListResult
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
