/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  IntegrationAccountAgreement,
  LogicManagementClient
} from "@azure/arm-logic";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates an integration account agreement.
 *
 * @summary Creates or updates an integration account agreement.
 * x-ms-original-file: specification/logic/resource-manager/Microsoft.Logic/stable/2019-05-01/examples/IntegrationAccountAgreements_CreateOrUpdate.json
 */
async function createOrUpdateAnAgreement(): Promise<void> {
  const subscriptionId =
    process.env["LOGIC_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["LOGIC_RESOURCE_GROUP"] || "testResourceGroup";
  const integrationAccountName = "testIntegrationAccount";
  const agreementName = "testAgreement";
  const agreement: IntegrationAccountAgreement = {
    agreementType: "AS2",
    content: {
      aS2: {
        receiveAgreement: {
          protocolSettings: {
            acknowledgementConnectionSettings: {
              ignoreCertificateNameMismatch: true,
              keepHttpConnectionAlive: true,
              supportHttpStatusCodeContinue: true,
              unfoldHttpHeaders: true
            },
            envelopeSettings: {
              autogenerateFileName: true,
              fileNameTemplate: "Test",
              messageContentType: "text/plain",
              suspendMessageOnFileNameGenerationError: true,
              transmitFileNameInMimeHeader: true
            },
            errorSettings: {
              resendIfMDNNotReceived: true,
              suspendDuplicateMessage: true
            },
            mdnSettings: {
              dispositionNotificationTo: "http://tempuri.org",
              mdnText: "Sample",
              micHashingAlgorithm: "SHA1",
              needMDN: true,
              receiptDeliveryUrl: "http://tempuri.org",
              sendInboundMDNToMessageBox: true,
              sendMDNAsynchronously: true,
              signMDN: true,
              signOutboundMDNIfOptional: true
            },
            messageConnectionSettings: {
              ignoreCertificateNameMismatch: true,
              keepHttpConnectionAlive: true,
              supportHttpStatusCodeContinue: true,
              unfoldHttpHeaders: true
            },
            securitySettings: {
              enableNRRForInboundDecodedMessages: true,
              enableNRRForInboundEncodedMessages: true,
              enableNRRForInboundMDN: true,
              enableNRRForOutboundDecodedMessages: true,
              enableNRRForOutboundEncodedMessages: true,
              enableNRRForOutboundMDN: true,
              overrideGroupSigningCertificate: false
            },
            validationSettings: {
              checkCertificateRevocationListOnReceive: true,
              checkCertificateRevocationListOnSend: true,
              checkDuplicateMessage: true,
              compressMessage: true,
              encryptMessage: false,
              encryptionAlgorithm: "AES128",
              interchangeDuplicatesValidityDays: 100,
              overrideMessageProperties: true,
              signMessage: false
            }
          },
          receiverBusinessIdentity: { qualifier: "ZZ", value: "ZZ" },
          senderBusinessIdentity: { qualifier: "AA", value: "AA" }
        },
        sendAgreement: {
          protocolSettings: {
            acknowledgementConnectionSettings: {
              ignoreCertificateNameMismatch: true,
              keepHttpConnectionAlive: true,
              supportHttpStatusCodeContinue: true,
              unfoldHttpHeaders: true
            },
            envelopeSettings: {
              autogenerateFileName: true,
              fileNameTemplate: "Test",
              messageContentType: "text/plain",
              suspendMessageOnFileNameGenerationError: true,
              transmitFileNameInMimeHeader: true
            },
            errorSettings: {
              resendIfMDNNotReceived: true,
              suspendDuplicateMessage: true
            },
            mdnSettings: {
              dispositionNotificationTo: "http://tempuri.org",
              mdnText: "Sample",
              micHashingAlgorithm: "SHA1",
              needMDN: true,
              receiptDeliveryUrl: "http://tempuri.org",
              sendInboundMDNToMessageBox: true,
              sendMDNAsynchronously: true,
              signMDN: true,
              signOutboundMDNIfOptional: true
            },
            messageConnectionSettings: {
              ignoreCertificateNameMismatch: true,
              keepHttpConnectionAlive: true,
              supportHttpStatusCodeContinue: true,
              unfoldHttpHeaders: true
            },
            securitySettings: {
              enableNRRForInboundDecodedMessages: true,
              enableNRRForInboundEncodedMessages: true,
              enableNRRForInboundMDN: true,
              enableNRRForOutboundDecodedMessages: true,
              enableNRRForOutboundEncodedMessages: true,
              enableNRRForOutboundMDN: true,
              overrideGroupSigningCertificate: false
            },
            validationSettings: {
              checkCertificateRevocationListOnReceive: true,
              checkCertificateRevocationListOnSend: true,
              checkDuplicateMessage: true,
              compressMessage: true,
              encryptMessage: false,
              encryptionAlgorithm: "AES128",
              interchangeDuplicatesValidityDays: 100,
              overrideMessageProperties: true,
              signMessage: false
            }
          },
          receiverBusinessIdentity: { qualifier: "AA", value: "AA" },
          senderBusinessIdentity: { qualifier: "ZZ", value: "ZZ" }
        }
      }
    },
    guestIdentity: { qualifier: "AA", value: "AA" },
    guestPartner: "GuestPartner",
    hostIdentity: { qualifier: "ZZ", value: "ZZ" },
    hostPartner: "HostPartner",
    location: "westus",
    metadata: {},
    tags: { integrationAccountAgreement: "<IntegrationAccountAgreementName>" }
  };
  const credential = new DefaultAzureCredential();
  const client = new LogicManagementClient(credential, subscriptionId);
  const result = await client.integrationAccountAgreements.createOrUpdate(
    resourceGroupName,
    integrationAccountName,
    agreementName,
    agreement
  );
  console.log(result);
}

async function main(): Promise<void> {
  createOrUpdateAnAgreement();
}

main().catch(console.error);
