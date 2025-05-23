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
  VirtualMachine,
  VirtualMachinesListOptionalParams,
  VirtualMachinesGetOptionalParams,
  VirtualMachinesGetResponse,
  VirtualMachineRestrictMovement,
  VirtualMachinesRestrictMovementOptionalParams,
  VirtualMachinesRestrictMovementResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VirtualMachines. */
export interface VirtualMachines {
  /**
   * List VirtualMachine resources by Cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: VirtualMachinesListOptionalParams,
  ): PagedAsyncIterableIterator<VirtualMachine>;
  /**
   * Get a VirtualMachine
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster
   * @param virtualMachineId ID of the virtual machine.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    virtualMachineId: string,
    options?: VirtualMachinesGetOptionalParams,
  ): Promise<VirtualMachinesGetResponse>;
  /**
   * Enable or disable DRS-driven VM movement restriction
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster
   * @param virtualMachineId ID of the virtual machine.
   * @param restrictMovement The body type of the operation request.
   * @param options The options parameters.
   */
  beginRestrictMovement(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    virtualMachineId: string,
    restrictMovement: VirtualMachineRestrictMovement,
    options?: VirtualMachinesRestrictMovementOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VirtualMachinesRestrictMovementResponse>,
      VirtualMachinesRestrictMovementResponse
    >
  >;
  /**
   * Enable or disable DRS-driven VM movement restriction
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster
   * @param virtualMachineId ID of the virtual machine.
   * @param restrictMovement The body type of the operation request.
   * @param options The options parameters.
   */
  beginRestrictMovementAndWait(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    virtualMachineId: string,
    restrictMovement: VirtualMachineRestrictMovement,
    options?: VirtualMachinesRestrictMovementOptionalParams,
  ): Promise<VirtualMachinesRestrictMovementResponse>;
}
