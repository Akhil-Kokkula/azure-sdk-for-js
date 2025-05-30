// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary This sample demonstrates how to make a simple call to the Azure Text Translator service to get grammatical structure and context examples for the source term and target term pair.
 */
const TextTranslationClient = require("@azure-rest/ai-translation-text").default,
  { isUnexpected } = require("@azure-rest/ai-translation-text");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv/config");

const endpoint =
  process.env["TEXT_TRANSLATION_ENDPOINT"] || "https://api.cognitive.microsofttranslator.com";
const resourceId = process.env["TRANSLATOR_RESOURCE_ID"] || "<api key>";
const region = process.env["TRANSLATOR_REGION"] || "<region>";

async function main() {
  console.log("== Dictionary Examples sample ==");

  const translateCedential = {
    tokenCredential: new DefaultAzureCredential(),
    azureResourceId: resourceId,
    region,
  };
  const translationClient = TextTranslationClient(endpoint, translateCedential);

  const inputText = [{ text: "fly", translation: "volar" }];
  const dictionaryResponse = await translationClient.path("/dictionary/examples").post({
    body: inputText,
    queryParameters: {
      to: "es",
      from: "en",
    },
  });

  if (isUnexpected(dictionaryResponse)) {
    throw dictionaryResponse.body.error;
  }

  const dictionaryExamples = dictionaryResponse.body;
  for (const dictionaryExample of dictionaryExamples) {
    console.log(
      `For the given input ${dictionaryExample?.examples?.length} examples were found in the dictionary.`,
    );
    const firstExample = dictionaryExample?.examples[0];
    console.log(
      `Example: '${firstExample.targetPrefix + firstExample.targetTerm + firstExample.targetSuffix}'.`,
    );
  }
}

main().catch((err) => {
  console.error(err);
});

module.exports = { main };
