/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  CdnWebApplicationFirewallPolicy,
  CdnManagementClient,
} from "@azure/arm-cdn";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or update policy with specified rule set name within a resource group.
 *
 * @summary Create or update policy with specified rule set name within a resource group.
 * x-ms-original-file: specification/cdn/resource-manager/Microsoft.Cdn/stable/2024-02-01/examples/WafPolicyCreateOrUpdate.json
 */
async function createsSpecificPolicy() {
  const subscriptionId = process.env["CDN_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["CDN_RESOURCE_GROUP"] || "rg1";
  const policyName = "MicrosoftCdnWafPolicy";
  const cdnWebApplicationFirewallPolicy: CdnWebApplicationFirewallPolicy = {
    customRules: {
      rules: [
        {
          name: "CustomRule1",
          action: "Block",
          enabledState: "Enabled",
          matchConditions: [
            {
              matchValue: ["CH"],
              matchVariable: "RemoteAddr",
              negateCondition: false,
              operator: "GeoMatch",
              selector: undefined,
              transforms: [],
            },
            {
              matchValue: ["windows"],
              matchVariable: "RequestHeader",
              negateCondition: false,
              operator: "Contains",
              selector: "UserAgent",
              transforms: [],
            },
            {
              matchValue: ["<?php", "?>"],
              matchVariable: "QueryString",
              negateCondition: false,
              operator: "Contains",
              selector: "search",
              transforms: ["UrlDecode", "Lowercase"],
            },
          ],
          priority: 2,
        },
      ],
    },
    location: "WestUs",
    managedRules: {
      managedRuleSets: [
        {
          ruleGroupOverrides: [
            {
              ruleGroupName: "Group1",
              rules: [
                {
                  action: "Redirect",
                  enabledState: "Enabled",
                  ruleId: "GROUP1-0001",
                },
                { enabledState: "Disabled", ruleId: "GROUP1-0002" },
              ],
            },
          ],
          ruleSetType: "DefaultRuleSet",
          ruleSetVersion: "preview-1.0",
        },
      ],
    },
    policySettings: {
      defaultCustomBlockResponseBody:
        "PGh0bWw+CjxoZWFkZXI+PHRpdGxlPkhlbGxvPC90aXRsZT48L2hlYWRlcj4KPGJvZHk+CkhlbGxvIHdvcmxkCjwvYm9keT4KPC9odG1sPg==",
      defaultCustomBlockResponseStatusCode: 200,
      defaultRedirectUrl: "http://www.bing.com",
    },
    rateLimitRules: {
      rules: [
        {
          name: "RateLimitRule1",
          action: "Block",
          enabledState: "Enabled",
          matchConditions: [
            {
              matchValue: ["192.168.1.0/24", "10.0.0.0/24"],
              matchVariable: "RemoteAddr",
              negateCondition: false,
              operator: "IPMatch",
              selector: undefined,
              transforms: [],
            },
          ],
          priority: 1,
          rateLimitDurationInMinutes: 0,
          rateLimitThreshold: 1000,
        },
      ],
    },
    sku: { name: "Standard_Microsoft" },
  };
  const credential = new DefaultAzureCredential();
  const client = new CdnManagementClient(credential, subscriptionId);
  const result = await client.policies.beginCreateOrUpdateAndWait(
    resourceGroupName,
    policyName,
    cdnWebApplicationFirewallPolicy,
  );
  console.log(result);
}

async function main() {
  createsSpecificPolicy();
}

main().catch(console.error);
