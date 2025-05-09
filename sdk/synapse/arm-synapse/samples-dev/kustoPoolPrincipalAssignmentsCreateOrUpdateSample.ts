/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { ClusterPrincipalAssignment } from "@azure/arm-synapse";
import { SynapseManagementClient } from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create a Kusto pool principalAssignment.
 *
 * @summary Create a Kusto pool principalAssignment.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/preview/2021-06-01-preview/examples/KustoPoolPrincipalAssignmentsCreateOrUpdate.json
 */
async function kustoPoolPrincipalAssignmentsCreateOrUpdate(): Promise<void> {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] || "12345678-1234-1234-1234-123456789098";
  const workspaceName = "synapseWorkspaceName";
  const kustoPoolName = "kustoclusterrptest4";
  const principalAssignmentName = "kustoprincipal1";
  const resourceGroupName = process.env["SYNAPSE_RESOURCE_GROUP"] || "kustorptest";
  const parameters: ClusterPrincipalAssignment = {
    principalId: "87654321-1234-1234-1234-123456789123",
    principalType: "App",
    role: "AllDatabasesAdmin",
    tenantId: "12345678-1234-1234-1234-123456789123",
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.kustoPoolPrincipalAssignments.beginCreateOrUpdateAndWait(
    workspaceName,
    kustoPoolName,
    principalAssignmentName,
    resourceGroupName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await kustoPoolPrincipalAssignmentsCreateOrUpdate();
}

main().catch(console.error);
