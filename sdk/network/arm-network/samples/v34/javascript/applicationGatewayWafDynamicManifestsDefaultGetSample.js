/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv/config");

/**
 * This sample demonstrates how to Gets the regional application gateway waf manifest.
 *
 * @summary Gets the regional application gateway waf manifest.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-07-01/examples/GetApplicationGatewayWafDynamicManifestsDefault.json
 */
async function getsWafDefaultManifest() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const location = "westus";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.applicationGatewayWafDynamicManifestsDefault.get(location);
  console.log(result);
}

async function main() {
  await getsWafDefaultManifest();
}

main().catch(console.error);
