/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Port,
  ProcessesListAcceptingPortsOptionalParams,
  Connection,
  ProcessesListConnectionsOptionalParams,
  ProcessesGetOptionalParams,
  ProcessesGetResponse,
  ProcessesGetLivenessOptionalParams,
  ProcessesGetLivenessResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Processes. */
export interface Processes {
  /**
   * Returns a collection of ports on which this process is accepting
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param processName Process resource name.
   * @param options The options parameters.
   */
  listAcceptingPorts(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    processName: string,
    options?: ProcessesListAcceptingPortsOptionalParams
  ): PagedAsyncIterableIterator<Port>;
  /**
   * Returns a collection of connections terminating or originating at the specified process
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param processName Process resource name.
   * @param options The options parameters.
   */
  listConnections(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    processName: string,
    options?: ProcessesListConnectionsOptionalParams
  ): PagedAsyncIterableIterator<Connection>;
  /**
   * Returns the specified process.
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param processName Process resource name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    processName: string,
    options?: ProcessesGetOptionalParams
  ): Promise<ProcessesGetResponse>;
  /**
   * Obtains the liveness status of the process during the specified time interval.
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param processName Process resource name.
   * @param options The options parameters.
   */
  getLiveness(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    processName: string,
    options?: ProcessesGetLivenessOptionalParams
  ): Promise<ProcessesGetLivenessResponse>;
}
