/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  AmlFilesystemSubnetInfo,
  CheckAmlFSSubnetsOptionalParams,
  StorageCacheManagementClient,
} from "@azure/arm-storagecache";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Check that subnets will be valid for AML file system create calls.
 *
 * @summary Check that subnets will be valid for AML file system create calls.
 * x-ms-original-file: specification/storagecache/resource-manager/Microsoft.StorageCache/stable/2024-03-01/examples/checkAmlFSSubnets.json
 */
async function checkAmlFsSubnets(): Promise<void> {
  const subscriptionId =
    process.env["STORAGECACHE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const amlFilesystemSubnetInfo: AmlFilesystemSubnetInfo = {
    filesystemSubnet:
      "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scgroup/providers/Microsoft.Network/virtualNetworks/scvnet/subnets/fsSub",
    sku: { name: "AMLFS-Durable-Premium-125" },
    storageCapacityTiB: 16,
  };
  const options: CheckAmlFSSubnetsOptionalParams = { amlFilesystemSubnetInfo };
  const credential = new DefaultAzureCredential();
  const client = new StorageCacheManagementClient(credential, subscriptionId);
  const result = await client.checkAmlFSSubnets(options);
  console.log(result);
}

async function main(): Promise<void> {
  checkAmlFsSubnets();
}

main().catch(console.error);
