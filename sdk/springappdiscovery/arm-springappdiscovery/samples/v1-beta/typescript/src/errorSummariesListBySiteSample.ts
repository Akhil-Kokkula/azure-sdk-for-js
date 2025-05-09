/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SpringAppDiscoveryManagementClient } from "@azure/arm-springappdiscovery";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Lists the ErrorSummaries resource in springbootsites.
 *
 * @summary Lists the ErrorSummaries resource in springbootsites.
 * x-ms-original-file: specification/offazurespringboot/resource-manager/Microsoft.OffAzureSpringBoot/preview/2023-01-01-preview/examples/ErrorSummaries_ListBySite_MaximumSet_Gen.json
 */
async function errorSummariesListBySiteMaximumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["SPRINGAPPDISCOVERY_SUBSCRIPTION_ID"] || "libzegdqkcxmhqhhhcxm";
  const resourceGroupName =
    process.env["SPRINGAPPDISCOVERY_RESOURCE_GROUP"] || "rgspringbootdiscovery";
  const siteName = "xxkzlvbihwxunadjcpjpjmghmhxrqyvghtpfps";
  const credential = new DefaultAzureCredential();
  const client = new SpringAppDiscoveryManagementClient(
    credential,
    subscriptionId,
  );
  const resArray = new Array();
  for await (let item of client.errorSummaries.listBySite(
    resourceGroupName,
    siteName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists the ErrorSummaries resource in springbootsites.
 *
 * @summary Lists the ErrorSummaries resource in springbootsites.
 * x-ms-original-file: specification/offazurespringboot/resource-manager/Microsoft.OffAzureSpringBoot/preview/2023-01-01-preview/examples/ErrorSummaries_ListBySite_MinimumSet_Gen.json
 */
async function errorSummariesListBySiteMinimumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["SPRINGAPPDISCOVERY_SUBSCRIPTION_ID"] || "libzegdqkcxmhqhhhcxm";
  const resourceGroupName =
    process.env["SPRINGAPPDISCOVERY_RESOURCE_GROUP"] || "rgspringbootdiscovery";
  const siteName = "xxkzlvbihwxunadjcpjpjmghmhxrqyvghtpfps";
  const credential = new DefaultAzureCredential();
  const client = new SpringAppDiscoveryManagementClient(
    credential,
    subscriptionId,
  );
  const resArray = new Array();
  for await (let item of client.errorSummaries.listBySite(
    resourceGroupName,
    siteName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  errorSummariesListBySiteMaximumSetGen();
  errorSummariesListBySiteMinimumSetGen();
}

main().catch(console.error);
