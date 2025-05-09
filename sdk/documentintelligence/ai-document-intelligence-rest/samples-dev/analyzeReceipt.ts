// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample shows how to extract elements of a receipt from a URL to a file using the prebuilt receipt model.
 *
 * The prebuilt receipt model can return several fields. For a detailed list of the fields supported by the receipt
 * model, see the `Receipt` type in the documentation, or refer to the following link:
 *
 * https://aka.ms/azsdk/documentitelligence/receiptfieldschema
 *
 * @summary extract data from a receipt document
 * @azsdk-skip-javascript
 */

import type { AnalyzeOperationOutput } from "@azure-rest/ai-document-intelligence";
import DocumentIntelligence, {
  getLongRunningPoller,
  isUnexpected,
} from "@azure-rest/ai-document-intelligence";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

async function main(): Promise<void> {
  const client = DocumentIntelligence(
    process.env["DOCUMENT_INTELLIGENCE_ENDPOINT"] || "<cognitive services endpoint>",
    new DefaultAzureCredential(),
  );

  const initialResponse = await client
    .path("/documentModels/{modelId}:analyze", "prebuilt-receipt")
    .post({
      contentType: "application/json",
      body: {
        // The Document Intelligence service will access the following URL to a receipt image and extract data from it
        urlSource:
          "https://raw.githubusercontent.com/Azure/azure-sdk-for-js/main/sdk/formrecognizer/ai-form-recognizer/assets/receipt/contoso-receipt.png",
      },
    });
  if (isUnexpected(initialResponse)) {
    throw initialResponse.body.error;
  }
  const poller = getLongRunningPoller(client, initialResponse);
  const analyzeResult = ((await poller.pollUntilDone()).body as AnalyzeOperationOutput)
    .analyzeResult;

  const documents = analyzeResult?.documents;

  const document = documents && documents[0];

  // Use of PrebuiltModels.Receipt above (rather than the raw model ID), as it adds strong typing of the model's output
  if (document) {
    console.log(document.fields);
  } else {
    throw new Error("Expected at least one receipt in the result.");
  }
}

main().catch((error) => {
  console.error("An error occurred:", error);
  process.exit(1);
});
