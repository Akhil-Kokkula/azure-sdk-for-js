/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { CdnManagementClient } from "@azure/arm-cdn";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Enable https delivery of the custom domain.
 *
 * @summary Enable https delivery of the custom domain.
 * x-ms-original-file: specification/cdn/resource-manager/Microsoft.Cdn/stable/2024-02-01/examples/CustomDomains_EnableCustomHttpsUsingCDNManagedCertificate.json
 */
async function customDomainsEnableCustomHttpsUsingCdnManagedCertificate(): Promise<void> {
  const subscriptionId = process.env["CDN_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["CDN_RESOURCE_GROUP"] || "RG";
  const profileName = "profile1";
  const endpointName = "endpoint1";
  const customDomainName = "www-someDomain-net";
  const credential = new DefaultAzureCredential();
  const client = new CdnManagementClient(credential, subscriptionId);
  const result = await client.customDomains.beginEnableCustomHttpsAndWait(
    resourceGroupName,
    profileName,
    endpointName,
    customDomainName,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Enable https delivery of the custom domain.
 *
 * @summary Enable https delivery of the custom domain.
 * x-ms-original-file: specification/cdn/resource-manager/Microsoft.Cdn/stable/2024-02-01/examples/CustomDomains_EnableCustomHttpsUsingBYOC.json
 */
async function customDomainsEnableCustomHttpsUsingYourOwnCertificate(): Promise<void> {
  const subscriptionId = process.env["CDN_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["CDN_RESOURCE_GROUP"] || "RG";
  const profileName = "profile1";
  const endpointName = "endpoint1";
  const customDomainName = "www-someDomain-net";
  const credential = new DefaultAzureCredential();
  const client = new CdnManagementClient(credential, subscriptionId);
  const result = await client.customDomains.beginEnableCustomHttpsAndWait(
    resourceGroupName,
    profileName,
    endpointName,
    customDomainName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await customDomainsEnableCustomHttpsUsingCdnManagedCertificate();
  await customDomainsEnableCustomHttpsUsingYourOwnCertificate();
}

main().catch(console.error);
