/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { CustomerInsightsManagementClient } from "@azure/arm-customerinsights";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets all available widget types in the specified hub.
 *
 * @summary Gets all available widget types in the specified hub.
 * x-ms-original-file: specification/customer-insights/resource-manager/Microsoft.CustomerInsights/stable/2017-04-26/examples/WidgetTypesListByHub.json
 */
async function widgetTypesListByHub(): Promise<void> {
  const subscriptionId = "subid";
  const resourceGroupName = "TestHubRG";
  const hubName = "sdkTestHub";
  const credential = new DefaultAzureCredential();
  const client = new CustomerInsightsManagementClient(
    credential,
    subscriptionId
  );
  const resArray = new Array();
  for await (let item of client.widgetTypes.listByHub(
    resourceGroupName,
    hubName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

widgetTypesListByHub().catch(console.error);
