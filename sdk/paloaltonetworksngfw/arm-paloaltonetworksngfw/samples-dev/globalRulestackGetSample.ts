/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { PaloAltoNetworksCloudngfw } from "@azure/arm-paloaltonetworksngfw";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get a GlobalRulestackResource
 *
 * @summary Get a GlobalRulestackResource
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/GlobalRulestack_Get_MaximumSet_Gen.json
 */
async function globalRulestackGetMaximumSetGen(): Promise<void> {
  const globalRulestackName = "praval";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const result = await client.globalRulestack.get(globalRulestackName);
  console.log(result);
}

/**
 * This sample demonstrates how to Get a GlobalRulestackResource
 *
 * @summary Get a GlobalRulestackResource
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/GlobalRulestack_Get_MinimumSet_Gen.json
 */
async function globalRulestackGetMinimumSetGen(): Promise<void> {
  const globalRulestackName = "praval";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const result = await client.globalRulestack.get(globalRulestackName);
  console.log(result);
}

async function main(): Promise<void> {
  await globalRulestackGetMaximumSetGen();
  await globalRulestackGetMinimumSetGen();
}

main().catch(console.error);
