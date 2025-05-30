/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { IpamPool} from "@azure/arm-network";
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates/Updates the Pool resource.
 *
 * @summary Creates/Updates the Pool resource.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-07-01/examples/IpamPools_Create.json
 */
async function ipamPoolsCreate(): Promise<void> {
  const subscriptionId =
    process.env["NETWORK_SUBSCRIPTION_ID"] ||
    "11111111-1111-1111-1111-111111111111";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const networkManagerName = "TestNetworkManager";
  const poolName = "TestPool";
  const body: IpamPool = {
    location: "eastus",
    properties: {
      description: "Test description.",
      addressPrefixes: ["10.0.0.0/24"],
      parentPoolName: "",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.ipamPools.beginCreateAndWait(
    resourceGroupName,
    networkManagerName,
    poolName,
    body,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await ipamPoolsCreate();
}

main().catch(console.error);
