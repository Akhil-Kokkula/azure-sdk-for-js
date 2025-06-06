/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { IotHub } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { IotHubClient } from "../iotHubClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import { FailoverInput, IotHubManualFailoverOptionalParams } from "../models/index.js";

/** Class containing IotHub operations. */
export class IotHubImpl implements IotHub {
  private readonly client: IotHubClient;

  /**
   * Initialize a new instance of the class IotHub class.
   * @param client Reference to the service client
   */
  constructor(client: IotHubClient) {
    this.client = client;
  }

  /**
   * Manually initiate a failover for the IoT Hub to its secondary region. To learn more, see
   * https://aka.ms/manualfailover
   * @param iotHubName Name of the IoT hub to failover
   * @param resourceGroupName Name of the resource group containing the IoT hub resource
   * @param failoverInput Region to failover to. Must be the Azure paired region. Get the value from the
   *                      secondary location in the locations property. To learn more, see
   *                      https://aka.ms/manualfailover/region
   * @param options The options parameters.
   */
  async beginManualFailover(
    iotHubName: string,
    resourceGroupName: string,
    failoverInput: FailoverInput,
    options?: IotHubManualFailoverOptionalParams
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
      args: { iotHubName, resourceGroupName, failoverInput, options },
      spec: manualFailoverOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Manually initiate a failover for the IoT Hub to its secondary region. To learn more, see
   * https://aka.ms/manualfailover
   * @param iotHubName Name of the IoT hub to failover
   * @param resourceGroupName Name of the resource group containing the IoT hub resource
   * @param failoverInput Region to failover to. Must be the Azure paired region. Get the value from the
   *                      secondary location in the locations property. To learn more, see
   *                      https://aka.ms/manualfailover/region
   * @param options The options parameters.
   */
  async beginManualFailoverAndWait(
    iotHubName: string,
    resourceGroupName: string,
    failoverInput: FailoverInput,
    options?: IotHubManualFailoverOptionalParams
  ): Promise<void> {
    const poller = await this.beginManualFailover(
      iotHubName,
      resourceGroupName,
      failoverInput,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const manualFailoverOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{iotHubName}/failover",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorDetails
    }
  },
  requestBody: Parameters.failoverInput,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.iotHubName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
