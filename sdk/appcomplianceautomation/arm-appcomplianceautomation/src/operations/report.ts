/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Report } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AppComplianceAutomationToolForMicrosoft365 } from "../appComplianceAutomationToolForMicrosoft365.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  ReportResource,
  ReportListNextOptionalParams,
  ReportListOptionalParams,
  ReportListResponse,
  ReportGetOptionalParams,
  ReportGetResponse,
  ReportCreateOrUpdateOptionalParams,
  ReportCreateOrUpdateResponse,
  ReportResourcePatch,
  ReportUpdateOptionalParams,
  ReportUpdateResponse,
  ReportDeleteOptionalParams,
  ReportDeleteResponse,
  CheckNameAvailabilityRequest,
  ReportNestedResourceCheckNameAvailabilityOptionalParams,
  ReportNestedResourceCheckNameAvailabilityResponse,
  ReportFixOptionalParams,
  ReportFixResponse,
  ReportGetScopingQuestionsOptionalParams,
  ReportGetScopingQuestionsResponse,
  SyncCertRecordRequest,
  ReportSyncCertRecordOptionalParams,
  ReportSyncCertRecordResponse,
  ReportVerifyOptionalParams,
  ReportVerifyResponse,
  ReportListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Report operations. */
export class ReportImpl implements Report {
  private readonly client: AppComplianceAutomationToolForMicrosoft365;

  /**
   * Initialize a new instance of the class Report class.
   * @param client Reference to the service client
   */
  constructor(client: AppComplianceAutomationToolForMicrosoft365) {
    this.client = client;
  }

  /**
   * Get the AppComplianceAutomation report list for the tenant.
   * @param options The options parameters.
   */
  public list(
    options?: ReportListOptionalParams,
  ): PagedAsyncIterableIterator<ReportResource> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      },
    };
  }

  private async *listPagingPage(
    options?: ReportListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ReportResource[]> {
    let result: ReportListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: ReportListOptionalParams,
  ): AsyncIterableIterator<ReportResource> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get the AppComplianceAutomation report list for the tenant.
   * @param options The options parameters.
   */
  private _list(
    options?: ReportListOptionalParams,
  ): Promise<ReportListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Get the AppComplianceAutomation report and its properties.
   * @param reportName Report Name.
   * @param options The options parameters.
   */
  get(
    reportName: string,
    options?: ReportGetOptionalParams,
  ): Promise<ReportGetResponse> {
    return this.client.sendOperationRequest(
      { reportName, options },
      getOperationSpec,
    );
  }

  /**
   * Create a new AppComplianceAutomation report or update an exiting AppComplianceAutomation report.
   * @param reportName Report Name.
   * @param properties Parameters for the create or update operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    reportName: string,
    properties: ReportResource,
    options?: ReportCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ReportCreateOrUpdateResponse>,
      ReportCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ReportCreateOrUpdateResponse> => {
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
      args: { reportName, properties, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      ReportCreateOrUpdateResponse,
      OperationState<ReportCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create a new AppComplianceAutomation report or update an exiting AppComplianceAutomation report.
   * @param reportName Report Name.
   * @param properties Parameters for the create or update operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    reportName: string,
    properties: ReportResource,
    options?: ReportCreateOrUpdateOptionalParams,
  ): Promise<ReportCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      reportName,
      properties,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Update an exiting AppComplianceAutomation report.
   * @param reportName Report Name.
   * @param properties Parameters for the create or update operation
   * @param options The options parameters.
   */
  async beginUpdate(
    reportName: string,
    properties: ReportResourcePatch,
    options?: ReportUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<OperationState<ReportUpdateResponse>, ReportUpdateResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ReportUpdateResponse> => {
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
      args: { reportName, properties, options },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      ReportUpdateResponse,
      OperationState<ReportUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update an exiting AppComplianceAutomation report.
   * @param reportName Report Name.
   * @param properties Parameters for the create or update operation
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    reportName: string,
    properties: ReportResourcePatch,
    options?: ReportUpdateOptionalParams,
  ): Promise<ReportUpdateResponse> {
    const poller = await this.beginUpdate(reportName, properties, options);
    return poller.pollUntilDone();
  }

  /**
   * Delete an AppComplianceAutomation report.
   * @param reportName Report Name.
   * @param options The options parameters.
   */
  async beginDelete(
    reportName: string,
    options?: ReportDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<OperationState<ReportDeleteResponse>, ReportDeleteResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ReportDeleteResponse> => {
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
      args: { reportName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<
      ReportDeleteResponse,
      OperationState<ReportDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete an AppComplianceAutomation report.
   * @param reportName Report Name.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    reportName: string,
    options?: ReportDeleteOptionalParams,
  ): Promise<ReportDeleteResponse> {
    const poller = await this.beginDelete(reportName, options);
    return poller.pollUntilDone();
  }

  /**
   * Checks the report's nested resource name availability, e.g: Webhooks, Evidences, Snapshots.
   * @param reportName Report Name.
   * @param body NameAvailabilityRequest object.
   * @param options The options parameters.
   */
  nestedResourceCheckNameAvailability(
    reportName: string,
    body: CheckNameAvailabilityRequest,
    options?: ReportNestedResourceCheckNameAvailabilityOptionalParams,
  ): Promise<ReportNestedResourceCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { reportName, body, options },
      nestedResourceCheckNameAvailabilityOperationSpec,
    );
  }

  /**
   * Fix the AppComplianceAutomation report error. e.g: App Compliance Automation Tool service
   * unregistered, automation removed.
   * @param reportName Report Name.
   * @param options The options parameters.
   */
  async beginFix(
    reportName: string,
    options?: ReportFixOptionalParams,
  ): Promise<
    SimplePollerLike<OperationState<ReportFixResponse>, ReportFixResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ReportFixResponse> => {
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
      args: { reportName, options },
      spec: fixOperationSpec,
    });
    const poller = await createHttpPoller<
      ReportFixResponse,
      OperationState<ReportFixResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Fix the AppComplianceAutomation report error. e.g: App Compliance Automation Tool service
   * unregistered, automation removed.
   * @param reportName Report Name.
   * @param options The options parameters.
   */
  async beginFixAndWait(
    reportName: string,
    options?: ReportFixOptionalParams,
  ): Promise<ReportFixResponse> {
    const poller = await this.beginFix(reportName, options);
    return poller.pollUntilDone();
  }

  /**
   * Fix the AppComplianceAutomation report error. e.g: App Compliance Automation Tool service
   * unregistered, automation removed.
   * @param reportName Report Name.
   * @param options The options parameters.
   */
  getScopingQuestions(
    reportName: string,
    options?: ReportGetScopingQuestionsOptionalParams,
  ): Promise<ReportGetScopingQuestionsResponse> {
    return this.client.sendOperationRequest(
      { reportName, options },
      getScopingQuestionsOperationSpec,
    );
  }

  /**
   * Synchronize attestation record from app compliance.
   * @param reportName Report Name.
   * @param body Parameters for synchronize certification record operation
   * @param options The options parameters.
   */
  async beginSyncCertRecord(
    reportName: string,
    body: SyncCertRecordRequest,
    options?: ReportSyncCertRecordOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ReportSyncCertRecordResponse>,
      ReportSyncCertRecordResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ReportSyncCertRecordResponse> => {
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
      args: { reportName, body, options },
      spec: syncCertRecordOperationSpec,
    });
    const poller = await createHttpPoller<
      ReportSyncCertRecordResponse,
      OperationState<ReportSyncCertRecordResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Synchronize attestation record from app compliance.
   * @param reportName Report Name.
   * @param body Parameters for synchronize certification record operation
   * @param options The options parameters.
   */
  async beginSyncCertRecordAndWait(
    reportName: string,
    body: SyncCertRecordRequest,
    options?: ReportSyncCertRecordOptionalParams,
  ): Promise<ReportSyncCertRecordResponse> {
    const poller = await this.beginSyncCertRecord(reportName, body, options);
    return poller.pollUntilDone();
  }

  /**
   * Verify the AppComplianceAutomation report health status.
   * @param reportName Report Name.
   * @param options The options parameters.
   */
  async beginVerify(
    reportName: string,
    options?: ReportVerifyOptionalParams,
  ): Promise<
    SimplePollerLike<OperationState<ReportVerifyResponse>, ReportVerifyResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ReportVerifyResponse> => {
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
      args: { reportName, options },
      spec: verifyOperationSpec,
    });
    const poller = await createHttpPoller<
      ReportVerifyResponse,
      OperationState<ReportVerifyResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Verify the AppComplianceAutomation report health status.
   * @param reportName Report Name.
   * @param options The options parameters.
   */
  async beginVerifyAndWait(
    reportName: string,
    options?: ReportVerifyOptionalParams,
  ): Promise<ReportVerifyResponse> {
    const poller = await this.beginVerify(reportName, options);
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ReportListNextOptionalParams,
  ): Promise<ReportListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.AppComplianceAutomation/reports",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ReportResourceListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skipToken,
    Parameters.top,
    Parameters.select,
    Parameters.filter,
    Parameters.orderby,
    Parameters.offerGuid,
    Parameters.reportCreatorTenantId,
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ReportResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.reportName],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ReportResource,
    },
    201: {
      bodyMapper: Mappers.ReportResource,
    },
    202: {
      bodyMapper: Mappers.ReportResource,
    },
    204: {
      bodyMapper: Mappers.ReportResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.properties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.reportName],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ReportResource,
    },
    201: {
      bodyMapper: Mappers.ReportResource,
    },
    202: {
      bodyMapper: Mappers.ReportResource,
    },
    204: {
      bodyMapper: Mappers.ReportResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.properties1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.reportName],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.ReportDeleteHeaders,
    },
    201: {
      headersMapper: Mappers.ReportDeleteHeaders,
    },
    202: {
      headersMapper: Mappers.ReportDeleteHeaders,
    },
    204: {
      headersMapper: Mappers.ReportDeleteHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.reportName],
  headerParameters: [Parameters.accept],
  serializer,
};
const nestedResourceCheckNameAvailabilityOperationSpec: coreClient.OperationSpec =
  {
    path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/checkNameAvailability",
    httpMethod: "POST",
    responses: {
      200: {
        bodyMapper: Mappers.CheckNameAvailabilityResponse,
      },
      default: {
        bodyMapper: Mappers.ErrorResponse,
      },
    },
    requestBody: Parameters.body,
    queryParameters: [Parameters.apiVersion],
    urlParameters: [Parameters.$host, Parameters.reportName],
    headerParameters: [Parameters.contentType, Parameters.accept],
    mediaType: "json",
    serializer,
  };
const fixOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/fix",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ReportFixResult,
    },
    201: {
      bodyMapper: Mappers.ReportFixResult,
    },
    202: {
      bodyMapper: Mappers.ReportFixResult,
    },
    204: {
      bodyMapper: Mappers.ReportFixResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.reportName],
  headerParameters: [Parameters.accept],
  serializer,
};
const getScopingQuestionsOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/getScopingQuestions",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ScopingQuestions,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.reportName],
  headerParameters: [Parameters.accept],
  serializer,
};
const syncCertRecordOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/syncCertRecord",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SyncCertRecordResponse,
    },
    201: {
      bodyMapper: Mappers.SyncCertRecordResponse,
    },
    202: {
      bodyMapper: Mappers.SyncCertRecordResponse,
    },
    204: {
      bodyMapper: Mappers.SyncCertRecordResponse,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.reportName],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const verifyOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/verify",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ReportVerificationResult,
    },
    201: {
      bodyMapper: Mappers.ReportVerificationResult,
    },
    202: {
      bodyMapper: Mappers.ReportVerificationResult,
    },
    204: {
      bodyMapper: Mappers.ReportVerificationResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.reportName],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ReportResourceListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer,
};
