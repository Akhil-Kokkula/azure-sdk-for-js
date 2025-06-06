// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary use custom HTTP pipeline options when connecting to the service
 */

import { QueueServiceClient, newPipeline, StorageSharedKeyCredential } from "@azure/storage-queue";

// Load the .env file if it exists
import "dotenv/config";

export async function main(): Promise<void> {
  // Enter your storage account name and shared key
  const account = process.env.ACCOUNT_NAME || "";
  const accountKey = process.env.ACCOUNT_KEY || "";

  // Use StorageSharedKeyCredential with storage account and account key
  // StorageSharedKeyCredential is only avaiable in Node.js runtime, not in browsers
  const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);

  // Use sharedKeyCredential, tokenCredential or anonymousCredential to create a pipeline
  const pipeline = newPipeline(sharedKeyCredential, {
    // httpClient: MyHTTPClient, // A customized HTTP client implementing IHttpClient interface
    retryOptions: {
      maxTries: 4,
    }, // Retry options
    userAgentOptions: {
      userAgentPrefix: "BasicSample V10.0.0",
    }, // Customized telemetry string
    keepAliveOptions: {
      // Keep alive is enabled by default, disable keep alive by setting false
      enable: false,
    },
  });

  const queueServiceClient = new QueueServiceClient(
    // When using AnonymousCredential, following url should include a valid SAS or support public access
    `https://${account}.queue.core.windows.net`,
    pipeline,
  );

  // Create a new queue
  const queueName = `newqueue${new Date().getTime()}`;
  const queueClient = queueServiceClient.getQueueClient(queueName);
  const createQueueResponse = await queueClient.create();
  console.log(
    `Created queue ${queueClient.name} successfully, service assigned request ID: ${createQueueResponse.requestId}`,
  );

  // Delete the queue.
  const deleteQueueResponse = await queueClient.delete();
  console.log(
    `Deleted queue ${queueClient.name} successfully, service assigned request ID: ${deleteQueueResponse.requestId}`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
