// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { LoadBalancerBackendAddressPoolsGetParameters } from "@azure-rest/arm-network";
import createNetworkManagementClient from "@azure-rest/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets load balancer backend address pool.
 *
 * @summary Gets load balancer backend address pool.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/LBBackendAddressPoolWithBackendAddressesGet.json
 */
async function loadBalancerWithBackendAddressPoolWithBackendAddresses(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = createNetworkManagementClient(credential);
  const subscriptionId = "";
  const resourceGroupName = "testrg";
  const loadBalancerName = "lb";
  const backendAddressPoolName = "backend";
  const options: LoadBalancerBackendAddressPoolsGetParameters = {
    queryParameters: { "api-version": "2022-05-01" },
  };
  const result = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/backendAddressPools/{backendAddressPoolName}",
      subscriptionId,
      resourceGroupName,
      loadBalancerName,
      backendAddressPoolName,
    )
    .get(options);
  console.log(result);
}

loadBalancerWithBackendAddressPoolWithBackendAddresses().catch(console.error);
/**
 * This sample demonstrates how to Gets load balancer backend address pool.
 *
 * @summary Gets load balancer backend address pool.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/LoadBalancerBackendAddressPoolGet.json
 */
async function loadBalancerBackendAddressPoolGet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = createNetworkManagementClient(credential);
  const subscriptionId = "";
  const resourceGroupName = "testrg";
  const loadBalancerName = "lb";
  const backendAddressPoolName = "backend";
  const options: LoadBalancerBackendAddressPoolsGetParameters = {
    queryParameters: { "api-version": "2022-05-01" },
  };
  const result = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/backendAddressPools/{backendAddressPoolName}",
      subscriptionId,
      resourceGroupName,
      loadBalancerName,
      backendAddressPoolName,
    )
    .get(options);
  console.log(result);
}

loadBalancerBackendAddressPoolGet().catch(console.error);
