/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { InstancePool } from "@azure/arm-sql";
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates an instance pool.
 *
 * @summary Creates or updates an instance pool.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2023-05-01-preview/examples/CreateOrUpdateInstancePoolMax.json
 */
async function createAnInstancePoolWithAllProperties(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "group1";
  const instancePoolName = "testIP";
  const parameters: InstancePool = {
    licenseType: "LicenseIncluded",
    location: "japaneast",
    maintenanceConfigurationId:
      "/subscriptions/00000000-1111-2222-3333-444444444444/providers/Microsoft.Maintenance/publicMaintenanceConfigurations/SQL_JapanEast_MI_1",
    sku: { name: "GP_Gen5", family: "Gen5", tier: "GeneralPurpose" },
    subnetId:
      "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Network/virtualNetworks/myvnet/subnets/mysubnet1",
    tags: { a: "b" },
    vCores: 8,
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.instancePools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    instancePoolName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an instance pool.
 *
 * @summary Creates or updates an instance pool.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2023-05-01-preview/examples/CreateOrUpdateInstancePoolMin.json
 */
async function createAnInstancePoolWithMinProperties(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "group1";
  const instancePoolName = "testIP";
  const parameters: InstancePool = {
    licenseType: "LicenseIncluded",
    location: "japaneast",
    sku: { name: "GP_Gen5", family: "Gen5", tier: "GeneralPurpose" },
    subnetId:
      "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Network/virtualNetworks/myvnet/subnets/mysubnet1",
    vCores: 8,
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.instancePools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    instancePoolName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createAnInstancePoolWithAllProperties();
  await createAnInstancePoolWithMinProperties();
}

main().catch(console.error);
