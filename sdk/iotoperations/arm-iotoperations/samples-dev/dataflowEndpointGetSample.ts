// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { IoTOperationsClient } from "@azure/arm-iotoperations";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a DataflowEndpointResource
 *
 * @summary get a DataflowEndpointResource
 * x-ms-original-file: 2024-11-01/DataflowEndpoint_Get_MaximumSet_Gen.json
 */
async function dataflowEndpointGet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "F8C729F9-DF9C-4743-848F-96EE433D8E53";
  const client = new IoTOperationsClient(credential, subscriptionId);
  const result = await client.dataflowEndpoint.get(
    "rgiotoperations",
    "resource-name123",
    "resource-name123",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await dataflowEndpointGet();
}

main().catch(console.error);
