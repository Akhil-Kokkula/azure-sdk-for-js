/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AlertRulePatchObject, MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates 'tags' and 'enabled' fields in an existing Alert rule. This method is used to update the Alert rule tags, and to enable or disable the Alert rule. To update other fields use CreateOrUpdate operation.
 *
 * @summary Updates 'tags' and 'enabled' fields in an existing Alert rule. This method is used to update the Alert rule tags, and to enable or disable the Alert rule. To update other fields use CreateOrUpdate operation.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2020-10-01/examples/ActivityLogAlertRule_Update.json
 */
async function patchAnActivityLogAlertRule(): Promise<void> {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] ||
    "187f412d-1758-44d9-b052-169e2564721d";
  const resourceGroupName =
    process.env["MONITOR_RESOURCE_GROUP"] || "MyResourceGroup";
  const activityLogAlertName = "SampleActivityLogAlertRule";
  const activityLogAlertRulePatch: AlertRulePatchObject = {
    enabled: false,
    tags: { key1: "value1", key2: "value2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.activityLogAlerts.update(
    resourceGroupName,
    activityLogAlertName,
    activityLogAlertRulePatch,
  );
  console.log(result);
}

async function main(): Promise<void> {
  patchAnActivityLogAlertRule();
}

main().catch(console.error);
