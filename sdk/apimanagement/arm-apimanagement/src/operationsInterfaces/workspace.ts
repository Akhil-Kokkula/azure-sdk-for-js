/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  WorkspaceContract,
  WorkspaceListByServiceOptionalParams,
  WorkspaceGetEntityTagOptionalParams,
  WorkspaceGetEntityTagResponse,
  WorkspaceGetOptionalParams,
  WorkspaceGetResponse,
  WorkspaceCreateOrUpdateOptionalParams,
  WorkspaceCreateOrUpdateResponse,
  WorkspaceUpdateOptionalParams,
  WorkspaceUpdateResponse,
  WorkspaceDeleteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Workspace. */
export interface Workspace {
  /**
   * Lists all workspaces of the API Management service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: WorkspaceListByServiceOptionalParams,
  ): PagedAsyncIterableIterator<WorkspaceContract>;
  /**
   * Gets the entity state (Etag) version of the workspace specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    options?: WorkspaceGetEntityTagOptionalParams,
  ): Promise<WorkspaceGetEntityTagResponse>;
  /**
   * Gets the details of the workspace specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    options?: WorkspaceGetOptionalParams,
  ): Promise<WorkspaceGetResponse>;
  /**
   * Creates a new workspace or updates an existing one.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param parameters Create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    parameters: WorkspaceContract,
    options?: WorkspaceCreateOrUpdateOptionalParams,
  ): Promise<WorkspaceCreateOrUpdateResponse>;
  /**
   * Updates the details of the workspace specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters Workspace Update parameters.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    ifMatch: string,
    parameters: WorkspaceContract,
    options?: WorkspaceUpdateOptionalParams,
  ): Promise<WorkspaceUpdateResponse>;
  /**
   * Deletes the specified workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    ifMatch: string,
    options?: WorkspaceDeleteOptionalParams,
  ): Promise<void>;
}
