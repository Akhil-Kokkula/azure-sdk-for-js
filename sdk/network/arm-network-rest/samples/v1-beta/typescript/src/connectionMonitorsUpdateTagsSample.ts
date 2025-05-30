// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createNetworkManagementClient, {
  ConnectionMonitorsUpdateTagsParameters,
} from "@azure-rest/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update tags of the specified connection monitor.
 *
 * @summary Update tags of the specified connection monitor.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/NetworkWatcherConnectionMonitorUpdateTags.json
 */
async function updateConnectionMonitorTags(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = createNetworkManagementClient(credential);
  const subscriptionId = "";
  const resourceGroupName = "rg1";
  const networkWatcherName = "nw1";
  const connectionMonitorName = "cm1";
  const options: ConnectionMonitorsUpdateTagsParameters = {
    body: { tags: { tag1: "value1", tag2: "value2" } },
    queryParameters: { "api-version": "2022-05-01" },
  };
  const result = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/connectionMonitors/{connectionMonitorName}",
      subscriptionId,
      resourceGroupName,
      networkWatcherName,
      connectionMonitorName,
    )
    .patch(options);
  console.log(result);
}

updateConnectionMonitorTags().catch(console.error);
