/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  Contact,
  ContactsListOptionalParams,
  ContactsGetOptionalParams,
  ContactsGetResponse,
  ContactsCreateOptionalParams,
  ContactsCreateResponse,
  ContactsDeleteOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Contacts. */
export interface Contacts {
  /**
   * Returns list of contacts by spacecraftName.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spacecraftName Spacecraft ID.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    spacecraftName: string,
    options?: ContactsListOptionalParams
  ): PagedAsyncIterableIterator<Contact>;
  /**
   * Gets the specified contact in a specified resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spacecraftName Spacecraft ID.
   * @param contactName Contact name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    spacecraftName: string,
    contactName: string,
    options?: ContactsGetOptionalParams
  ): Promise<ContactsGetResponse>;
  /**
   * Creates a contact.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spacecraftName Spacecraft ID.
   * @param contactName Contact name.
   * @param parameters The parameters to provide for the created contact.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    spacecraftName: string,
    contactName: string,
    parameters: Contact,
    options?: ContactsCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ContactsCreateResponse>,
      ContactsCreateResponse
    >
  >;
  /**
   * Creates a contact.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spacecraftName Spacecraft ID.
   * @param contactName Contact name.
   * @param parameters The parameters to provide for the created contact.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    spacecraftName: string,
    contactName: string,
    parameters: Contact,
    options?: ContactsCreateOptionalParams
  ): Promise<ContactsCreateResponse>;
  /**
   * Deletes a specified contact.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spacecraftName Spacecraft ID.
   * @param contactName Contact name.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    spacecraftName: string,
    contactName: string,
    options?: ContactsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a specified contact.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spacecraftName Spacecraft ID.
   * @param contactName Contact name.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    spacecraftName: string,
    contactName: string,
    options?: ContactsDeleteOptionalParams
  ): Promise<void>;
}
