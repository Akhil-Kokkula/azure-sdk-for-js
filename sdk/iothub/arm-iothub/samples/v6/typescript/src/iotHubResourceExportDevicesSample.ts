/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ExportDevicesRequest, IotHubClient } from "@azure/arm-iothub";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Exports all the device identities in the IoT hub identity registry to an Azure Storage blob container. For more information, see: https://learn.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.
 *
 * @summary Exports all the device identities in the IoT hub identity registry to an Azure Storage blob container. For more information, see: https://learn.microsoft.com/azure/iot-hub/iot-hub-devguide-identity-registry#import-and-export-device-identities.
 * x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2023-06-30/examples/iothub_exportdevices.json
 */
async function iotHubResourceExportDevices(): Promise<void> {
  const subscriptionId =
    process.env["IOTHUB_SUBSCRIPTION_ID"] ||
    "91d12660-3dec-467a-be2a-213b5544ddc0";
  const resourceGroupName =
    process.env["IOTHUB_RESOURCE_GROUP"] || "myResourceGroup";
  const resourceName = "testHub";
  const exportDevicesParameters: ExportDevicesRequest = {
    excludeKeys: true,
    exportBlobContainerUri: "testBlob"
  };
  const credential = new DefaultAzureCredential();
  const client = new IotHubClient(credential, subscriptionId);
  const result = await client.iotHubResource.exportDevices(
    resourceGroupName,
    resourceName,
    exportDevicesParameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  iotHubResourceExportDevices();
}

main().catch(console.error);
