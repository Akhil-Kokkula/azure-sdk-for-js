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
 * This sample demonstrates how to Delete a PrefixListGlobalRulestackResource
 *
 * @summary Delete a PrefixListGlobalRulestackResource
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/PrefixListGlobalRulestack_Delete_MaximumSet_Gen.json
 */
async function prefixListGlobalRulestackDeleteMaximumSetGen(): Promise<void> {
  const globalRulestackName = "praval";
  const name = "armid1";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const result = await client.prefixListGlobalRulestack.beginDeleteAndWait(
    globalRulestackName,
    name,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Delete a PrefixListGlobalRulestackResource
 *
 * @summary Delete a PrefixListGlobalRulestackResource
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/PrefixListGlobalRulestack_Delete_MinimumSet_Gen.json
 */
async function prefixListGlobalRulestackDeleteMinimumSetGen(): Promise<void> {
  const globalRulestackName = "praval";
  const name = "armid1";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const result = await client.prefixListGlobalRulestack.beginDeleteAndWait(
    globalRulestackName,
    name,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await prefixListGlobalRulestackDeleteMaximumSetGen();
  await prefixListGlobalRulestackDeleteMinimumSetGen();
}

main().catch(console.error);
