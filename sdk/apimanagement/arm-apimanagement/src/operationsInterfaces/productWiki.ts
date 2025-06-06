/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ProductWikiGetEntityTagOptionalParams,
  ProductWikiGetEntityTagResponse,
  ProductWikiGetOptionalParams,
  ProductWikiGetResponse,
  WikiContract,
  ProductWikiCreateOrUpdateOptionalParams,
  ProductWikiCreateOrUpdateResponse,
  WikiUpdateContract,
  ProductWikiUpdateOptionalParams,
  ProductWikiUpdateResponse,
  ProductWikiDeleteOptionalParams,
} from "../models/index.js";

/** Interface representing a ProductWiki. */
export interface ProductWiki {
  /**
   * Gets the entity state (Etag) version of the Wiki for a Product specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    options?: ProductWikiGetEntityTagOptionalParams,
  ): Promise<ProductWikiGetEntityTagResponse>;
  /**
   * Gets the details of the Wiki for a Product specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    options?: ProductWikiGetOptionalParams,
  ): Promise<ProductWikiGetResponse>;
  /**
   * Creates a new Wiki for a Product or updates an existing one.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param parameters Create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    parameters: WikiContract,
    options?: ProductWikiCreateOrUpdateOptionalParams,
  ): Promise<ProductWikiCreateOrUpdateResponse>;
  /**
   * Updates the details of the Wiki for a Product specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters Wiki Update parameters.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    ifMatch: string,
    parameters: WikiUpdateContract,
    options?: ProductWikiUpdateOptionalParams,
  ): Promise<ProductWikiUpdateResponse>;
  /**
   * Deletes the specified Wiki from a Product.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    ifMatch: string,
    options?: ProductWikiDeleteOptionalParams,
  ): Promise<void>;
}
