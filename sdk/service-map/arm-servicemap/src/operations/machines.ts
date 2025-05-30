/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Machines } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ServiceMap } from "../serviceMap.js";
import {
  Machine,
  MachinesListByWorkspaceNextOptionalParams,
  MachinesListByWorkspaceOptionalParams,
  MachinesListByWorkspaceResponse,
  Connection,
  MachinesListConnectionsNextOptionalParams,
  MachinesListConnectionsOptionalParams,
  MachinesListConnectionsResponse,
  Process,
  MachinesListProcessesNextOptionalParams,
  MachinesListProcessesOptionalParams,
  MachinesListProcessesResponse,
  Port,
  MachinesListPortsNextOptionalParams,
  MachinesListPortsOptionalParams,
  MachinesListPortsResponse,
  MachineGroup,
  MachinesListMachineGroupMembershipNextOptionalParams,
  MachinesListMachineGroupMembershipOptionalParams,
  MachinesListMachineGroupMembershipResponse,
  MachinesGetOptionalParams,
  MachinesGetResponse,
  MachinesGetLivenessOptionalParams,
  MachinesGetLivenessResponse,
  MachinesListByWorkspaceNextResponse,
  MachinesListConnectionsNextResponse,
  MachinesListProcessesNextResponse,
  MachinesListPortsNextResponse,
  MachinesListMachineGroupMembershipNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Machines operations. */
export class MachinesImpl implements Machines {
  private readonly client: ServiceMap;

  /**
   * Initialize a new instance of the class Machines class.
   * @param client Reference to the service client
   */
  constructor(client: ServiceMap) {
    this.client = client;
  }

  /**
   * Returns a collection of machines matching the specified conditions.  The returned collection
   * represents either machines that are active/live during the specified interval  of time (`live=true`
   * and `startTime`/`endTime` are specified) or that are known to have existed at or  some time prior to
   * the specified point in time (`live=false` and `timestamp` is specified).
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param options The options parameters.
   */
  public listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: MachinesListByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<Machine> {
    const iter = this.listByWorkspacePagingAll(
      resourceGroupName,
      workspaceName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByWorkspacePagingPage(
          resourceGroupName,
          workspaceName,
          options,
          settings
        );
      }
    };
  }

  private async *listByWorkspacePagingPage(
    resourceGroupName: string,
    workspaceName: string,
    options?: MachinesListByWorkspaceOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Machine[]> {
    let result: MachinesListByWorkspaceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByWorkspace(
        resourceGroupName,
        workspaceName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByWorkspaceNext(
        resourceGroupName,
        workspaceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByWorkspacePagingAll(
    resourceGroupName: string,
    workspaceName: string,
    options?: MachinesListByWorkspaceOptionalParams
  ): AsyncIterableIterator<Machine> {
    for await (const page of this.listByWorkspacePagingPage(
      resourceGroupName,
      workspaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns a collection of connections terminating or originating at the specified machine
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param options The options parameters.
   */
  public listConnections(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    options?: MachinesListConnectionsOptionalParams
  ): PagedAsyncIterableIterator<Connection> {
    const iter = this.listConnectionsPagingAll(
      resourceGroupName,
      workspaceName,
      machineName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listConnectionsPagingPage(
          resourceGroupName,
          workspaceName,
          machineName,
          options,
          settings
        );
      }
    };
  }

  private async *listConnectionsPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    options?: MachinesListConnectionsOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Connection[]> {
    let result: MachinesListConnectionsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listConnections(
        resourceGroupName,
        workspaceName,
        machineName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listConnectionsNext(
        resourceGroupName,
        workspaceName,
        machineName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listConnectionsPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    options?: MachinesListConnectionsOptionalParams
  ): AsyncIterableIterator<Connection> {
    for await (const page of this.listConnectionsPagingPage(
      resourceGroupName,
      workspaceName,
      machineName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns a collection of processes on the specified machine matching the specified conditions. The
   * returned collection represents either processes that are active/live during the specified interval
   * of time (`live=true` and `startTime`/`endTime` are specified) or that are known to have existed at
   * or  some time prior to the specified point in time (`live=false` and `timestamp` is specified).
   *
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param options The options parameters.
   */
  public listProcesses(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    options?: MachinesListProcessesOptionalParams
  ): PagedAsyncIterableIterator<Process> {
    const iter = this.listProcessesPagingAll(
      resourceGroupName,
      workspaceName,
      machineName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listProcessesPagingPage(
          resourceGroupName,
          workspaceName,
          machineName,
          options,
          settings
        );
      }
    };
  }

  private async *listProcessesPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    options?: MachinesListProcessesOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Process[]> {
    let result: MachinesListProcessesResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listProcesses(
        resourceGroupName,
        workspaceName,
        machineName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listProcessesNext(
        resourceGroupName,
        workspaceName,
        machineName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listProcessesPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    options?: MachinesListProcessesOptionalParams
  ): AsyncIterableIterator<Process> {
    for await (const page of this.listProcessesPagingPage(
      resourceGroupName,
      workspaceName,
      machineName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns a collection of live ports on the specified machine during the specified time interval.
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param options The options parameters.
   */
  public listPorts(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    options?: MachinesListPortsOptionalParams
  ): PagedAsyncIterableIterator<Port> {
    const iter = this.listPortsPagingAll(
      resourceGroupName,
      workspaceName,
      machineName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPortsPagingPage(
          resourceGroupName,
          workspaceName,
          machineName,
          options,
          settings
        );
      }
    };
  }

  private async *listPortsPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    options?: MachinesListPortsOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Port[]> {
    let result: MachinesListPortsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listPorts(
        resourceGroupName,
        workspaceName,
        machineName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listPortsNext(
        resourceGroupName,
        workspaceName,
        machineName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPortsPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    options?: MachinesListPortsOptionalParams
  ): AsyncIterableIterator<Port> {
    for await (const page of this.listPortsPagingPage(
      resourceGroupName,
      workspaceName,
      machineName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns a collection of machine groups this machine belongs to during the specified time interval.
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param options The options parameters.
   */
  public listMachineGroupMembership(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    options?: MachinesListMachineGroupMembershipOptionalParams
  ): PagedAsyncIterableIterator<MachineGroup> {
    const iter = this.listMachineGroupMembershipPagingAll(
      resourceGroupName,
      workspaceName,
      machineName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listMachineGroupMembershipPagingPage(
          resourceGroupName,
          workspaceName,
          machineName,
          options,
          settings
        );
      }
    };
  }

  private async *listMachineGroupMembershipPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    options?: MachinesListMachineGroupMembershipOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<MachineGroup[]> {
    let result: MachinesListMachineGroupMembershipResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listMachineGroupMembership(
        resourceGroupName,
        workspaceName,
        machineName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listMachineGroupMembershipNext(
        resourceGroupName,
        workspaceName,
        machineName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listMachineGroupMembershipPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    options?: MachinesListMachineGroupMembershipOptionalParams
  ): AsyncIterableIterator<MachineGroup> {
    for await (const page of this.listMachineGroupMembershipPagingPage(
      resourceGroupName,
      workspaceName,
      machineName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns a collection of machines matching the specified conditions.  The returned collection
   * represents either machines that are active/live during the specified interval  of time (`live=true`
   * and `startTime`/`endTime` are specified) or that are known to have existed at or  some time prior to
   * the specified point in time (`live=false` and `timestamp` is specified).
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param options The options parameters.
   */
  private _listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: MachinesListByWorkspaceOptionalParams
  ): Promise<MachinesListByWorkspaceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listByWorkspaceOperationSpec
    );
  }

  /**
   * Returns the specified machine.
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    options?: MachinesGetOptionalParams
  ): Promise<MachinesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, machineName, options },
      getOperationSpec
    );
  }

  /**
   * Obtains the liveness status of the machine during the specified time interval.
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param options The options parameters.
   */
  getLiveness(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    options?: MachinesGetLivenessOptionalParams
  ): Promise<MachinesGetLivenessResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, machineName, options },
      getLivenessOperationSpec
    );
  }

  /**
   * Returns a collection of connections terminating or originating at the specified machine
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param options The options parameters.
   */
  private _listConnections(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    options?: MachinesListConnectionsOptionalParams
  ): Promise<MachinesListConnectionsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, machineName, options },
      listConnectionsOperationSpec
    );
  }

  /**
   * Returns a collection of processes on the specified machine matching the specified conditions. The
   * returned collection represents either processes that are active/live during the specified interval
   * of time (`live=true` and `startTime`/`endTime` are specified) or that are known to have existed at
   * or  some time prior to the specified point in time (`live=false` and `timestamp` is specified).
   *
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param options The options parameters.
   */
  private _listProcesses(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    options?: MachinesListProcessesOptionalParams
  ): Promise<MachinesListProcessesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, machineName, options },
      listProcessesOperationSpec
    );
  }

  /**
   * Returns a collection of live ports on the specified machine during the specified time interval.
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param options The options parameters.
   */
  private _listPorts(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    options?: MachinesListPortsOptionalParams
  ): Promise<MachinesListPortsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, machineName, options },
      listPortsOperationSpec
    );
  }

  /**
   * Returns a collection of machine groups this machine belongs to during the specified time interval.
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param options The options parameters.
   */
  private _listMachineGroupMembership(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    options?: MachinesListMachineGroupMembershipOptionalParams
  ): Promise<MachinesListMachineGroupMembershipResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, machineName, options },
      listMachineGroupMembershipOperationSpec
    );
  }

  /**
   * ListByWorkspaceNext
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param nextLink The nextLink from the previous successful call to the ListByWorkspace method.
   * @param options The options parameters.
   */
  private _listByWorkspaceNext(
    resourceGroupName: string,
    workspaceName: string,
    nextLink: string,
    options?: MachinesListByWorkspaceNextOptionalParams
  ): Promise<MachinesListByWorkspaceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, nextLink, options },
      listByWorkspaceNextOperationSpec
    );
  }

  /**
   * ListConnectionsNext
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param nextLink The nextLink from the previous successful call to the ListConnections method.
   * @param options The options parameters.
   */
  private _listConnectionsNext(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    nextLink: string,
    options?: MachinesListConnectionsNextOptionalParams
  ): Promise<MachinesListConnectionsNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, machineName, nextLink, options },
      listConnectionsNextOperationSpec
    );
  }

  /**
   * ListProcessesNext
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param nextLink The nextLink from the previous successful call to the ListProcesses method.
   * @param options The options parameters.
   */
  private _listProcessesNext(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    nextLink: string,
    options?: MachinesListProcessesNextOptionalParams
  ): Promise<MachinesListProcessesNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, machineName, nextLink, options },
      listProcessesNextOperationSpec
    );
  }

  /**
   * ListPortsNext
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param nextLink The nextLink from the previous successful call to the ListPorts method.
   * @param options The options parameters.
   */
  private _listPortsNext(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    nextLink: string,
    options?: MachinesListPortsNextOptionalParams
  ): Promise<MachinesListPortsNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, machineName, nextLink, options },
      listPortsNextOperationSpec
    );
  }

  /**
   * ListMachineGroupMembershipNext
   * @param resourceGroupName Resource group name within the specified subscriptionId.
   * @param workspaceName OMS workspace containing the resources of interest.
   * @param machineName Machine resource name.
   * @param nextLink The nextLink from the previous successful call to the ListMachineGroupMembership
   *                 method.
   * @param options The options parameters.
   */
  private _listMachineGroupMembershipNext(
    resourceGroupName: string,
    workspaceName: string,
    machineName: string,
    nextLink: string,
    options?: MachinesListMachineGroupMembershipNextOptionalParams
  ): Promise<MachinesListMachineGroupMembershipNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, machineName, nextLink, options },
      listMachineGroupMembershipNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MachineCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.live,
    Parameters.startTime,
    Parameters.endTime,
    Parameters.timestamp,
    Parameters.top
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Machine
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.timestamp],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.machineName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getLivenessOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}/liveness",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Liveness
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.startTime,
    Parameters.endTime
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.machineName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listConnectionsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}/connections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConnectionCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.startTime,
    Parameters.endTime
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.machineName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listProcessesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}/processes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProcessCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.live,
    Parameters.startTime,
    Parameters.endTime,
    Parameters.timestamp
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.machineName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listPortsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}/ports",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PortCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.startTime,
    Parameters.endTime
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.machineName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listMachineGroupMembershipOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}/machineGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MachineGroupCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.startTime,
    Parameters.endTime
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.machineName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByWorkspaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MachineCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listConnectionsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConnectionCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.machineName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listProcessesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProcessCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.machineName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listPortsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PortCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.machineName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listMachineGroupMembershipNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MachineGroupCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.machineName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
