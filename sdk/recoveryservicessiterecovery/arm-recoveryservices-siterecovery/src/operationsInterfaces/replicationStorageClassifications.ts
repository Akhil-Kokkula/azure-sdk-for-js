/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  StorageClassification,
  ReplicationStorageClassificationsListByReplicationFabricsOptionalParams,
  ReplicationStorageClassificationsListOptionalParams,
  ReplicationStorageClassificationsGetOptionalParams,
  ReplicationStorageClassificationsGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ReplicationStorageClassifications. */
export interface ReplicationStorageClassifications {
  /**
   * Lists the storage classifications available in the specified fabric.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param resourceName The name of the recovery services vault.
   * @param fabricName Site name of interest.
   * @param options The options parameters.
   */
  listByReplicationFabrics(
    resourceGroupName: string,
    resourceName: string,
    fabricName: string,
    options?: ReplicationStorageClassificationsListByReplicationFabricsOptionalParams,
  ): PagedAsyncIterableIterator<StorageClassification>;
  /**
   * Lists the storage classifications in the vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param resourceName The name of the recovery services vault.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    resourceName: string,
    options?: ReplicationStorageClassificationsListOptionalParams,
  ): PagedAsyncIterableIterator<StorageClassification>;
  /**
   * Gets the details of the specified storage classification.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param resourceName The name of the recovery services vault.
   * @param fabricName Fabric name.
   * @param storageClassificationName Storage classification name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    fabricName: string,
    storageClassificationName: string,
    options?: ReplicationStorageClassificationsGetOptionalParams,
  ): Promise<ReplicationStorageClassificationsGetResponse>;
}
