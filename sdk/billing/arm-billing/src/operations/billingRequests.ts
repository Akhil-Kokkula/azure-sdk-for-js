/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { BillingRequests } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { BillingManagementClient } from "../billingManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  BillingRequest,
  BillingRequestsListByBillingProfileNextOptionalParams,
  BillingRequestsListByBillingProfileOptionalParams,
  BillingRequestsListByBillingProfileResponse,
  BillingRequestsListByCustomerNextOptionalParams,
  BillingRequestsListByCustomerOptionalParams,
  BillingRequestsListByCustomerResponse,
  BillingRequestsListByInvoiceSectionNextOptionalParams,
  BillingRequestsListByInvoiceSectionOptionalParams,
  BillingRequestsListByInvoiceSectionResponse,
  BillingRequestsListByBillingAccountNextOptionalParams,
  BillingRequestsListByBillingAccountOptionalParams,
  BillingRequestsListByBillingAccountResponse,
  BillingRequestsListByUserNextOptionalParams,
  BillingRequestsListByUserOptionalParams,
  BillingRequestsListByUserResponse,
  BillingRequestsGetOptionalParams,
  BillingRequestsGetResponse,
  BillingRequestsCreateOrUpdateOptionalParams,
  BillingRequestsCreateOrUpdateResponse,
  BillingRequestsListByBillingProfileNextResponse,
  BillingRequestsListByCustomerNextResponse,
  BillingRequestsListByInvoiceSectionNextResponse,
  BillingRequestsListByBillingAccountNextResponse,
  BillingRequestsListByUserNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing BillingRequests operations. */
export class BillingRequestsImpl implements BillingRequests {
  private readonly client: BillingManagementClient;

  /**
   * Initialize a new instance of the class BillingRequests class.
   * @param client Reference to the service client
   */
  constructor(client: BillingManagementClient) {
    this.client = client;
  }

  /**
   * The list of billing requests submitted for the billing profile.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The options parameters.
   */
  public listByBillingProfile(
    billingAccountName: string,
    billingProfileName: string,
    options?: BillingRequestsListByBillingProfileOptionalParams,
  ): PagedAsyncIterableIterator<BillingRequest> {
    const iter = this.listByBillingProfilePagingAll(
      billingAccountName,
      billingProfileName,
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
        return this.listByBillingProfilePagingPage(
          billingAccountName,
          billingProfileName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByBillingProfilePagingPage(
    billingAccountName: string,
    billingProfileName: string,
    options?: BillingRequestsListByBillingProfileOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<BillingRequest[]> {
    let result: BillingRequestsListByBillingProfileResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByBillingProfile(
        billingAccountName,
        billingProfileName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByBillingProfileNext(
        billingAccountName,
        billingProfileName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByBillingProfilePagingAll(
    billingAccountName: string,
    billingProfileName: string,
    options?: BillingRequestsListByBillingProfileOptionalParams,
  ): AsyncIterableIterator<BillingRequest> {
    for await (const page of this.listByBillingProfilePagingPage(
      billingAccountName,
      billingProfileName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * The list of billing requests submitted for the customer.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param customerName The ID that uniquely identifies a customer.
   * @param options The options parameters.
   */
  public listByCustomer(
    billingAccountName: string,
    billingProfileName: string,
    customerName: string,
    options?: BillingRequestsListByCustomerOptionalParams,
  ): PagedAsyncIterableIterator<BillingRequest> {
    const iter = this.listByCustomerPagingAll(
      billingAccountName,
      billingProfileName,
      customerName,
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
        return this.listByCustomerPagingPage(
          billingAccountName,
          billingProfileName,
          customerName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByCustomerPagingPage(
    billingAccountName: string,
    billingProfileName: string,
    customerName: string,
    options?: BillingRequestsListByCustomerOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<BillingRequest[]> {
    let result: BillingRequestsListByCustomerResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByCustomer(
        billingAccountName,
        billingProfileName,
        customerName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByCustomerNext(
        billingAccountName,
        billingProfileName,
        customerName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByCustomerPagingAll(
    billingAccountName: string,
    billingProfileName: string,
    customerName: string,
    options?: BillingRequestsListByCustomerOptionalParams,
  ): AsyncIterableIterator<BillingRequest> {
    for await (const page of this.listByCustomerPagingPage(
      billingAccountName,
      billingProfileName,
      customerName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * The list of billing requests submitted for the invoice section.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param options The options parameters.
   */
  public listByInvoiceSection(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: BillingRequestsListByInvoiceSectionOptionalParams,
  ): PagedAsyncIterableIterator<BillingRequest> {
    const iter = this.listByInvoiceSectionPagingAll(
      billingAccountName,
      billingProfileName,
      invoiceSectionName,
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
        return this.listByInvoiceSectionPagingPage(
          billingAccountName,
          billingProfileName,
          invoiceSectionName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByInvoiceSectionPagingPage(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: BillingRequestsListByInvoiceSectionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<BillingRequest[]> {
    let result: BillingRequestsListByInvoiceSectionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByInvoiceSection(
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByInvoiceSectionNext(
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByInvoiceSectionPagingAll(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: BillingRequestsListByInvoiceSectionOptionalParams,
  ): AsyncIterableIterator<BillingRequest> {
    for await (const page of this.listByInvoiceSectionPagingPage(
      billingAccountName,
      billingProfileName,
      invoiceSectionName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * The list of billing requests submitted for the billing account.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  public listByBillingAccount(
    billingAccountName: string,
    options?: BillingRequestsListByBillingAccountOptionalParams,
  ): PagedAsyncIterableIterator<BillingRequest> {
    const iter = this.listByBillingAccountPagingAll(
      billingAccountName,
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
        return this.listByBillingAccountPagingPage(
          billingAccountName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByBillingAccountPagingPage(
    billingAccountName: string,
    options?: BillingRequestsListByBillingAccountOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<BillingRequest[]> {
    let result: BillingRequestsListByBillingAccountResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByBillingAccount(billingAccountName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByBillingAccountNext(
        billingAccountName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByBillingAccountPagingAll(
    billingAccountName: string,
    options?: BillingRequestsListByBillingAccountOptionalParams,
  ): AsyncIterableIterator<BillingRequest> {
    for await (const page of this.listByBillingAccountPagingPage(
      billingAccountName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * The list of billing requests submitted by a user.
   * @param options The options parameters.
   */
  public listByUser(
    options?: BillingRequestsListByUserOptionalParams,
  ): PagedAsyncIterableIterator<BillingRequest> {
    const iter = this.listByUserPagingAll(options);
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
        return this.listByUserPagingPage(options, settings);
      },
    };
  }

  private async *listByUserPagingPage(
    options?: BillingRequestsListByUserOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<BillingRequest[]> {
    let result: BillingRequestsListByUserResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByUser(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByUserNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByUserPagingAll(
    options?: BillingRequestsListByUserOptionalParams,
  ): AsyncIterableIterator<BillingRequest> {
    for await (const page of this.listByUserPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * The list of billing requests submitted for the billing profile.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The options parameters.
   */
  private _listByBillingProfile(
    billingAccountName: string,
    billingProfileName: string,
    options?: BillingRequestsListByBillingProfileOptionalParams,
  ): Promise<BillingRequestsListByBillingProfileResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, billingProfileName, options },
      listByBillingProfileOperationSpec,
    );
  }

  /**
   * The list of billing requests submitted for the customer.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param customerName The ID that uniquely identifies a customer.
   * @param options The options parameters.
   */
  private _listByCustomer(
    billingAccountName: string,
    billingProfileName: string,
    customerName: string,
    options?: BillingRequestsListByCustomerOptionalParams,
  ): Promise<BillingRequestsListByCustomerResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, billingProfileName, customerName, options },
      listByCustomerOperationSpec,
    );
  }

  /**
   * The list of billing requests submitted for the invoice section.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param options The options parameters.
   */
  private _listByInvoiceSection(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: BillingRequestsListByInvoiceSectionOptionalParams,
  ): Promise<BillingRequestsListByInvoiceSectionResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, billingProfileName, invoiceSectionName, options },
      listByInvoiceSectionOperationSpec,
    );
  }

  /**
   * The list of billing requests submitted for the billing account.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  private _listByBillingAccount(
    billingAccountName: string,
    options?: BillingRequestsListByBillingAccountOptionalParams,
  ): Promise<BillingRequestsListByBillingAccountResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, options },
      listByBillingAccountOperationSpec,
    );
  }

  /**
   * Gets a billing request by its ID.
   * @param billingRequestName The ID that uniquely identifies a billing request.
   * @param options The options parameters.
   */
  get(
    billingRequestName: string,
    options?: BillingRequestsGetOptionalParams,
  ): Promise<BillingRequestsGetResponse> {
    return this.client.sendOperationRequest(
      { billingRequestName, options },
      getOperationSpec,
    );
  }

  /**
   * Create or update a billing request.
   * @param billingRequestName The ID that uniquely identifies a billing request.
   * @param parameters A request submitted by a user to manage billing. Users with an owner role on the
   *                   scope can approve or decline these requests.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    billingRequestName: string,
    parameters: BillingRequest,
    options?: BillingRequestsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<BillingRequestsCreateOrUpdateResponse>,
      BillingRequestsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<BillingRequestsCreateOrUpdateResponse> => {
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
      args: { billingRequestName, parameters, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      BillingRequestsCreateOrUpdateResponse,
      OperationState<BillingRequestsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update a billing request.
   * @param billingRequestName The ID that uniquely identifies a billing request.
   * @param parameters A request submitted by a user to manage billing. Users with an owner role on the
   *                   scope can approve or decline these requests.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    billingRequestName: string,
    parameters: BillingRequest,
    options?: BillingRequestsCreateOrUpdateOptionalParams,
  ): Promise<BillingRequestsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      billingRequestName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * The list of billing requests submitted by a user.
   * @param options The options parameters.
   */
  private _listByUser(
    options?: BillingRequestsListByUserOptionalParams,
  ): Promise<BillingRequestsListByUserResponse> {
    return this.client.sendOperationRequest(
      { options },
      listByUserOperationSpec,
    );
  }

  /**
   * ListByBillingProfileNext
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param nextLink The nextLink from the previous successful call to the ListByBillingProfile method.
   * @param options The options parameters.
   */
  private _listByBillingProfileNext(
    billingAccountName: string,
    billingProfileName: string,
    nextLink: string,
    options?: BillingRequestsListByBillingProfileNextOptionalParams,
  ): Promise<BillingRequestsListByBillingProfileNextResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, billingProfileName, nextLink, options },
      listByBillingProfileNextOperationSpec,
    );
  }

  /**
   * ListByCustomerNext
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param customerName The ID that uniquely identifies a customer.
   * @param nextLink The nextLink from the previous successful call to the ListByCustomer method.
   * @param options The options parameters.
   */
  private _listByCustomerNext(
    billingAccountName: string,
    billingProfileName: string,
    customerName: string,
    nextLink: string,
    options?: BillingRequestsListByCustomerNextOptionalParams,
  ): Promise<BillingRequestsListByCustomerNextResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        customerName,
        nextLink,
        options,
      },
      listByCustomerNextOperationSpec,
    );
  }

  /**
   * ListByInvoiceSectionNext
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param nextLink The nextLink from the previous successful call to the ListByInvoiceSection method.
   * @param options The options parameters.
   */
  private _listByInvoiceSectionNext(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    nextLink: string,
    options?: BillingRequestsListByInvoiceSectionNextOptionalParams,
  ): Promise<BillingRequestsListByInvoiceSectionNextResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        nextLink,
        options,
      },
      listByInvoiceSectionNextOperationSpec,
    );
  }

  /**
   * ListByBillingAccountNext
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param nextLink The nextLink from the previous successful call to the ListByBillingAccount method.
   * @param options The options parameters.
   */
  private _listByBillingAccountNext(
    billingAccountName: string,
    nextLink: string,
    options?: BillingRequestsListByBillingAccountNextOptionalParams,
  ): Promise<BillingRequestsListByBillingAccountNextResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, nextLink, options },
      listByBillingAccountNextOperationSpec,
    );
  }

  /**
   * ListByUserNext
   * @param nextLink The nextLink from the previous successful call to the ListByUser method.
   * @param options The options parameters.
   */
  private _listByUserNext(
    nextLink: string,
    options?: BillingRequestsListByUserNextOptionalParams,
  ): Promise<BillingRequestsListByUserNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listByUserNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByBillingProfileOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingRequests",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingRequestListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.orderBy,
    Parameters.top,
    Parameters.skip,
    Parameters.count,
    Parameters.search,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByCustomerOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/billingRequests",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingRequestListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.orderBy,
    Parameters.top,
    Parameters.skip,
    Parameters.count,
    Parameters.search,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.customerName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByInvoiceSectionOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingRequests",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingRequestListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.orderBy,
    Parameters.top,
    Parameters.skip,
    Parameters.count,
    Parameters.search,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByBillingAccountOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingRequests",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingRequestListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.orderBy,
    Parameters.top,
    Parameters.skip,
    Parameters.count,
    Parameters.search,
  ],
  urlParameters: [Parameters.$host, Parameters.billingAccountName],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingRequests/{billingRequestName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingRequest,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.billingRequestName],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingRequests/{billingRequestName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.BillingRequest,
    },
    201: {
      bodyMapper: Mappers.BillingRequest,
    },
    202: {
      bodyMapper: Mappers.BillingRequest,
    },
    204: {
      bodyMapper: Mappers.BillingRequest,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters8,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.billingRequestName],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listByUserOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingRequests",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingRequestListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.orderBy,
    Parameters.top,
    Parameters.skip,
    Parameters.count,
    Parameters.search,
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByBillingProfileNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingRequestListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.nextLink,
    Parameters.billingProfileName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByCustomerNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingRequestListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.nextLink,
    Parameters.billingProfileName,
    Parameters.customerName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByInvoiceSectionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingRequestListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.nextLink,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByBillingAccountNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingRequestListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByUserNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingRequestListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer,
};
