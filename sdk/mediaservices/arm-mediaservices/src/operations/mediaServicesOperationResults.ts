/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { MediaServicesOperationResults } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AzureMediaServices } from "../azureMediaServices.js";
import {
  MediaServicesOperationResultsGetOptionalParams,
  MediaServicesOperationResultsGetResponse
} from "../models/index.js";

/** Class containing MediaServicesOperationResults operations. */
export class MediaServicesOperationResultsImpl
  implements MediaServicesOperationResults {
  private readonly client: AzureMediaServices;

  /**
   * Initialize a new instance of the class MediaServicesOperationResults class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMediaServices) {
    this.client = client;
  }

  /**
   * Get media service operation result.
   * @param locationName Location name.
   * @param operationId Operation Id.
   * @param options The options parameters.
   */
  get(
    locationName: string,
    operationId: string,
    options?: MediaServicesOperationResultsGetOptionalParams
  ): Promise<MediaServicesOperationResultsGetResponse> {
    return this.client.sendOperationRequest(
      { locationName, operationId, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Media/locations/{locationName}/mediaServicesOperationResults/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MediaService
    },
    202: {
      headersMapper: Mappers.MediaServicesOperationResultsGetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.locationName,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
