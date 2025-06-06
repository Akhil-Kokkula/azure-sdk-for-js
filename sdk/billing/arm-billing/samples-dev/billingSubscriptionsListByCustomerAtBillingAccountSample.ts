/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { BillingManagementClient } from "@azure/arm-billing";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Lists the subscriptions for a customer at billing account level. The operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.
 *
 * @summary Lists the subscriptions for a customer at billing account level. The operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/billingSubscriptionsListByCustomerAtBillingAccount.json
 */
async function billingSubscriptionsListByCustomerAtBillingAccount(): Promise<void> {
  const billingAccountName =
    "a1a9c77e-4cec-4a6c-a089-867d973a6074:a80d3b1f-c626-4e5e-82ed-1173bd91c838_2019-05-31";
  const customerName = "Q7GV-UUVA-PJA-TGB";
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential);
  const resArray = new Array();
  for await (const item of client.billingSubscriptions.listByCustomerAtBillingAccount(
    billingAccountName,
    customerName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await billingSubscriptionsListByCustomerAtBillingAccount();
}

main().catch(console.error);
