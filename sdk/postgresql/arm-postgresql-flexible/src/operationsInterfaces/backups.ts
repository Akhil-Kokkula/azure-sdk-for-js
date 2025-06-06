/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { PagedAsyncIterableIterator } from "@azure/core-paging";
import type { SimplePollerLike, OperationState } from "@azure/core-lro";
import type {
  ServerBackup,
  BackupsListByServerOptionalParams,
  BackupsCreateOptionalParams,
  BackupsCreateResponse,
  BackupsDeleteOptionalParams,
  BackupsDeleteResponse,
  BackupsGetOptionalParams,
  BackupsGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Backups. */
export interface Backups {
  /**
   * List all the backups for a given server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: BackupsListByServerOptionalParams,
  ): PagedAsyncIterableIterator<ServerBackup>;
  /**
   * Create a specific backup for PostgreSQL flexible server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param backupName The name of the backup.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    serverName: string,
    backupName: string,
    options?: BackupsCreateOptionalParams,
  ): Promise<SimplePollerLike<OperationState<BackupsCreateResponse>, BackupsCreateResponse>>;
  /**
   * Create a specific backup for PostgreSQL flexible server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param backupName The name of the backup.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    serverName: string,
    backupName: string,
    options?: BackupsCreateOptionalParams,
  ): Promise<BackupsCreateResponse>;
  /**
   * Deletes a specific backup.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param backupName The name of the backup.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    serverName: string,
    backupName: string,
    options?: BackupsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<BackupsDeleteResponse>, BackupsDeleteResponse>>;
  /**
   * Deletes a specific backup.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param backupName The name of the backup.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    serverName: string,
    backupName: string,
    options?: BackupsDeleteOptionalParams,
  ): Promise<BackupsDeleteResponse>;
  /**
   * Get specific backup for a given server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param backupName The name of the backup.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    backupName: string,
    options?: BackupsGetOptionalParams,
  ): Promise<BackupsGetResponse>;
}
