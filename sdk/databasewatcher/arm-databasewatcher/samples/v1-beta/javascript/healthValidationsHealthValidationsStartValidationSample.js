// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { DatabaseWatcherClient } = require("@azure/arm-databasewatcher");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to starts health validation for a watcher.
 *
 * @summary starts health validation for a watcher.
 * x-ms-original-file: 2025-01-02/HealthValidations_StartValidation_MaximumSet_Gen.json
 */
async function healthValidationsStartValidationMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "A76F9850-996B-40B3-94D4-C98110A0EEC9";
  const client = new DatabaseWatcherClient(credential, subscriptionId);
  const result = await client.healthValidations.startValidation(
    "rgWatcher",
    "testWatcher",
    "testHealthValidation",
  );
  console.log(result);
}

async function main() {
  await healthValidationsStartValidationMaximumSet();
}

main().catch(console.error);
