/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { ScopeConnection} from "@azure/arm-network";
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates scope connection from Network Manager
 *
 * @summary Creates or updates scope connection from Network Manager
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-07-01/examples/NetworkManagerScopeConnectionPut.json
 */
async function createOrUpdateNetworkManagerScopeConnection(): Promise<void> {
  const subscriptionId =
    process.env["NETWORK_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const networkManagerName = "testNetworkManager";
  const scopeConnectionName = "TestScopeConnection";
  const parameters: ScopeConnection = {
    description: "This is a scope connection to a cross tenant subscription.",
    resourceId: "subscriptions/f0dc2b34-dfad-40e4-83e0-2309fed8d00b",
    tenantId: "6babcaad-604b-40ac-a9d7-9fd97c0b779f",
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.scopeConnections.createOrUpdate(
    resourceGroupName,
    networkManagerName,
    scopeConnectionName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateNetworkManagerScopeConnection();
}

main().catch(console.error);
