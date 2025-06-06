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
  GrantsListAllOptionalParams,
  EducationManagementClient
} from "@azure/arm-education";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get a list of grants that Microsoft has provided.
 *
 * @summary Get a list of grants that Microsoft has provided.
 * x-ms-original-file: specification/education/resource-manager/Microsoft.Education/preview/2021-12-01-preview/examples/GrantList.json
 */
async function grantList(): Promise<void> {
  const includeAllocatedBudget = false;
  const options: GrantsListAllOptionalParams = { includeAllocatedBudget };
  const credential = new DefaultAzureCredential();
  const client = new EducationManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.grants.listAll(options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Get a list of grants that Microsoft has provided.
 *
 * @summary Get a list of grants that Microsoft has provided.
 * x-ms-original-file: specification/education/resource-manager/Microsoft.Education/preview/2021-12-01-preview/examples/GrantListIncludeAllocatedBudget.json
 */
async function grantListIncludeAllocatedBudget(): Promise<void> {
  const includeAllocatedBudget = true;
  const options: GrantsListAllOptionalParams = { includeAllocatedBudget };
  const credential = new DefaultAzureCredential();
  const client = new EducationManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.grants.listAll(options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  grantList();
  grantListIncludeAllocatedBudget();
}

main().catch(console.error);
