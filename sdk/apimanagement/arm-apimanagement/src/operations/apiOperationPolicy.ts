/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ApiOperationPolicy } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ApiManagementClient } from "../apiManagementClient.js";
import {
  ApiOperationPolicyListByOperationOptionalParams,
  ApiOperationPolicyListByOperationResponse,
  PolicyIdName,
  ApiOperationPolicyGetEntityTagOptionalParams,
  ApiOperationPolicyGetEntityTagResponse,
  ApiOperationPolicyGetOptionalParams,
  ApiOperationPolicyGetResponse,
  PolicyContract,
  ApiOperationPolicyCreateOrUpdateOptionalParams,
  ApiOperationPolicyCreateOrUpdateResponse,
  ApiOperationPolicyDeleteOptionalParams,
} from "../models/index.js";

/** Class containing ApiOperationPolicy operations. */
export class ApiOperationPolicyImpl implements ApiOperationPolicy {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class ApiOperationPolicy class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Get the list of policy configuration at the API Operation level.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API Management
   *                    service instance.
   * @param options The options parameters.
   */
  listByOperation(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    operationId: string,
    options?: ApiOperationPolicyListByOperationOptionalParams,
  ): Promise<ApiOperationPolicyListByOperationResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, operationId, options },
      listByOperationOperationSpec,
    );
  }

  /**
   * Gets the entity state (Etag) version of the API operation policy specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API Management
   *                    service instance.
   * @param policyId The identifier of the Policy.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    operationId: string,
    policyId: PolicyIdName,
    options?: ApiOperationPolicyGetEntityTagOptionalParams,
  ): Promise<ApiOperationPolicyGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, operationId, policyId, options },
      getEntityTagOperationSpec,
    );
  }

  /**
   * Get the policy configuration at the API Operation level.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API Management
   *                    service instance.
   * @param policyId The identifier of the Policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    operationId: string,
    policyId: PolicyIdName,
    options?: ApiOperationPolicyGetOptionalParams,
  ): Promise<ApiOperationPolicyGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, operationId, policyId, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates policy configuration for the API Operation level.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API Management
   *                    service instance.
   * @param policyId The identifier of the Policy.
   * @param parameters The policy contents to apply.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    operationId: string,
    policyId: PolicyIdName,
    parameters: PolicyContract,
    options?: ApiOperationPolicyCreateOrUpdateOptionalParams,
  ): Promise<ApiOperationPolicyCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        operationId,
        policyId,
        parameters,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes the policy configuration at the Api Operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API Management
   *                    service instance.
   * @param policyId The identifier of the Policy.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    operationId: string,
    policyId: PolicyIdName,
    ifMatch: string,
    options?: ApiOperationPolicyDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        operationId,
        policyId,
        ifMatch,
        options,
      },
      deleteOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByOperationOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}/policies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.apiId,
    Parameters.operationId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getEntityTagOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}/policies/{policyId}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.ApiOperationPolicyGetEntityTagHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.apiId,
    Parameters.operationId,
    Parameters.policyId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}/policies/{policyId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyContract,
      headersMapper: Mappers.ApiOperationPolicyGetHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.format],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.apiId,
    Parameters.operationId,
    Parameters.policyId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}/policies/{policyId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyContract,
      headersMapper: Mappers.ApiOperationPolicyCreateOrUpdateHeaders,
    },
    201: {
      bodyMapper: Mappers.PolicyContract,
      headersMapper: Mappers.ApiOperationPolicyCreateOrUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters7,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.apiId,
    Parameters.operationId,
    Parameters.policyId,
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch,
  ],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}/policies/{policyId}",
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
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.apiId,
    Parameters.operationId,
    Parameters.policyId,
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer,
};
