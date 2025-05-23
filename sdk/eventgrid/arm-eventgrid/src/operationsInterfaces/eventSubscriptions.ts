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
  EventSubscription,
  EventSubscriptionsListGlobalBySubscriptionOptionalParams,
  EventSubscriptionsListGlobalBySubscriptionForTopicTypeOptionalParams,
  EventSubscriptionsListGlobalByResourceGroupOptionalParams,
  EventSubscriptionsListGlobalByResourceGroupForTopicTypeOptionalParams,
  EventSubscriptionsListRegionalBySubscriptionOptionalParams,
  EventSubscriptionsListRegionalByResourceGroupOptionalParams,
  EventSubscriptionsListRegionalBySubscriptionForTopicTypeOptionalParams,
  EventSubscriptionsListRegionalByResourceGroupForTopicTypeOptionalParams,
  EventSubscriptionsListByResourceOptionalParams,
  EventSubscriptionsListByDomainTopicOptionalParams,
  EventSubscriptionsGetOptionalParams,
  EventSubscriptionsGetResponse,
  EventSubscriptionsCreateOrUpdateOptionalParams,
  EventSubscriptionsCreateOrUpdateResponse,
  EventSubscriptionsDeleteOptionalParams,
  EventSubscriptionUpdateParameters,
  EventSubscriptionsUpdateOptionalParams,
  EventSubscriptionsUpdateResponse,
  EventSubscriptionsGetFullUrlOptionalParams,
  EventSubscriptionsGetFullUrlResponse,
  EventSubscriptionsGetDeliveryAttributesOptionalParams,
  EventSubscriptionsGetDeliveryAttributesResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a EventSubscriptions. */
export interface EventSubscriptions {
  /**
   * List all aggregated global event subscriptions under a specific Azure subscription.
   * @param options The options parameters.
   */
  listGlobalBySubscription(
    options?: EventSubscriptionsListGlobalBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<EventSubscription>;
  /**
   * List all global event subscriptions under an Azure subscription for a topic type.
   * @param topicTypeName Name of the topic type.
   * @param options The options parameters.
   */
  listGlobalBySubscriptionForTopicType(
    topicTypeName: string,
    options?: EventSubscriptionsListGlobalBySubscriptionForTopicTypeOptionalParams,
  ): PagedAsyncIterableIterator<EventSubscription>;
  /**
   * List all global event subscriptions under a specific Azure subscription and resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param options The options parameters.
   */
  listGlobalByResourceGroup(
    resourceGroupName: string,
    options?: EventSubscriptionsListGlobalByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<EventSubscription>;
  /**
   * List all global event subscriptions under a resource group for a specific topic type.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicTypeName Name of the topic type.
   * @param options The options parameters.
   */
  listGlobalByResourceGroupForTopicType(
    resourceGroupName: string,
    topicTypeName: string,
    options?: EventSubscriptionsListGlobalByResourceGroupForTopicTypeOptionalParams,
  ): PagedAsyncIterableIterator<EventSubscription>;
  /**
   * List all event subscriptions from the given location under a specific Azure subscription.
   * @param location Name of the location.
   * @param options The options parameters.
   */
  listRegionalBySubscription(
    location: string,
    options?: EventSubscriptionsListRegionalBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<EventSubscription>;
  /**
   * List all event subscriptions from the given location under a specific Azure subscription and
   * resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param location Name of the location.
   * @param options The options parameters.
   */
  listRegionalByResourceGroup(
    resourceGroupName: string,
    location: string,
    options?: EventSubscriptionsListRegionalByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<EventSubscription>;
  /**
   * List all event subscriptions from the given location under a specific Azure subscription and topic
   * type.
   * @param location Name of the location.
   * @param topicTypeName Name of the topic type.
   * @param options The options parameters.
   */
  listRegionalBySubscriptionForTopicType(
    location: string,
    topicTypeName: string,
    options?: EventSubscriptionsListRegionalBySubscriptionForTopicTypeOptionalParams,
  ): PagedAsyncIterableIterator<EventSubscription>;
  /**
   * List all event subscriptions from the given location under a specific Azure subscription and
   * resource group and topic type.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param location Name of the location.
   * @param topicTypeName Name of the topic type.
   * @param options The options parameters.
   */
  listRegionalByResourceGroupForTopicType(
    resourceGroupName: string,
    location: string,
    topicTypeName: string,
    options?: EventSubscriptionsListRegionalByResourceGroupForTopicTypeOptionalParams,
  ): PagedAsyncIterableIterator<EventSubscription>;
  /**
   * List all event subscriptions that have been created for a specific resource.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param providerNamespace Namespace of the provider of the topic.
   * @param resourceTypeName Name of the resource type.
   * @param resourceName Name of the resource.
   * @param options The options parameters.
   */
  listByResource(
    resourceGroupName: string,
    providerNamespace: string,
    resourceTypeName: string,
    resourceName: string,
    options?: EventSubscriptionsListByResourceOptionalParams,
  ): PagedAsyncIterableIterator<EventSubscription>;
  /**
   * List all event subscriptions that have been created for a specific domain topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the top level domain.
   * @param topicName Name of the domain topic.
   * @param options The options parameters.
   */
  listByDomainTopic(
    resourceGroupName: string,
    domainName: string,
    topicName: string,
    options?: EventSubscriptionsListByDomainTopicOptionalParams,
  ): PagedAsyncIterableIterator<EventSubscription>;
  /**
   * Get properties of an event subscription.
   * @param scope The scope of the event subscription. The scope can be a subscription, or a resource
   *              group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic.
   *              For example, use '/subscriptions/{subscriptionId}/' for a subscription,
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}'
   *              for a resource, and
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}'
   *              for an EventGrid topic.
   * @param eventSubscriptionName Name of the event subscription to be found.
   * @param options The options parameters.
   */
  get(
    scope: string,
    eventSubscriptionName: string,
    options?: EventSubscriptionsGetOptionalParams,
  ): Promise<EventSubscriptionsGetResponse>;
  /**
   * Asynchronously creates a new event subscription or updates an existing event subscription based on
   * the specified scope.
   * @param scope The identifier of the resource to which the event subscription needs to be created or
   *              updated. The scope can be a subscription, or a resource group, or a top level resource belonging to
   *              a resource provider namespace, or an EventGrid topic. For example, use
   *              '/subscriptions/{subscriptionId}/' for a subscription,
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}'
   *              for a resource, and
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}'
   *              for an EventGrid topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 64 characters in length and should use alphanumeric letters only.
   * @param eventSubscriptionInfo Event subscription properties containing the destination and filter
   *                              information.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    scope: string,
    eventSubscriptionName: string,
    eventSubscriptionInfo: EventSubscription,
    options?: EventSubscriptionsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<EventSubscriptionsCreateOrUpdateResponse>,
      EventSubscriptionsCreateOrUpdateResponse
    >
  >;
  /**
   * Asynchronously creates a new event subscription or updates an existing event subscription based on
   * the specified scope.
   * @param scope The identifier of the resource to which the event subscription needs to be created or
   *              updated. The scope can be a subscription, or a resource group, or a top level resource belonging to
   *              a resource provider namespace, or an EventGrid topic. For example, use
   *              '/subscriptions/{subscriptionId}/' for a subscription,
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}'
   *              for a resource, and
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}'
   *              for an EventGrid topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 64 characters in length and should use alphanumeric letters only.
   * @param eventSubscriptionInfo Event subscription properties containing the destination and filter
   *                              information.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    scope: string,
    eventSubscriptionName: string,
    eventSubscriptionInfo: EventSubscription,
    options?: EventSubscriptionsCreateOrUpdateOptionalParams,
  ): Promise<EventSubscriptionsCreateOrUpdateResponse>;
  /**
   * Delete an existing event subscription.
   * @param scope The scope of the event subscription. The scope can be a subscription, or a resource
   *              group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic.
   *              For example, use '/subscriptions/{subscriptionId}/' for a subscription,
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}'
   *              for a resource, and
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}'
   *              for an EventGrid topic.
   * @param eventSubscriptionName Name of the event subscription to be deleted.
   * @param options The options parameters.
   */
  beginDelete(
    scope: string,
    eventSubscriptionName: string,
    options?: EventSubscriptionsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete an existing event subscription.
   * @param scope The scope of the event subscription. The scope can be a subscription, or a resource
   *              group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic.
   *              For example, use '/subscriptions/{subscriptionId}/' for a subscription,
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}'
   *              for a resource, and
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}'
   *              for an EventGrid topic.
   * @param eventSubscriptionName Name of the event subscription to be deleted.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    scope: string,
    eventSubscriptionName: string,
    options?: EventSubscriptionsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Asynchronously updates an existing event subscription.
   * @param scope The scope of existing event subscription. The scope can be a subscription, or a
   *              resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid
   *              topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription,
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}'
   *              for a resource, and
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}'
   *              for an EventGrid topic.
   * @param eventSubscriptionName Name of the event subscription to be updated.
   * @param eventSubscriptionUpdateParameters Updated event subscription information.
   * @param options The options parameters.
   */
  beginUpdate(
    scope: string,
    eventSubscriptionName: string,
    eventSubscriptionUpdateParameters: EventSubscriptionUpdateParameters,
    options?: EventSubscriptionsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<EventSubscriptionsUpdateResponse>,
      EventSubscriptionsUpdateResponse
    >
  >;
  /**
   * Asynchronously updates an existing event subscription.
   * @param scope The scope of existing event subscription. The scope can be a subscription, or a
   *              resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid
   *              topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription,
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}'
   *              for a resource, and
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}'
   *              for an EventGrid topic.
   * @param eventSubscriptionName Name of the event subscription to be updated.
   * @param eventSubscriptionUpdateParameters Updated event subscription information.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    scope: string,
    eventSubscriptionName: string,
    eventSubscriptionUpdateParameters: EventSubscriptionUpdateParameters,
    options?: EventSubscriptionsUpdateOptionalParams,
  ): Promise<EventSubscriptionsUpdateResponse>;
  /**
   * Get the full endpoint URL for an event subscription.
   * @param scope The scope of the event subscription. The scope can be a subscription, or a resource
   *              group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic.
   *              For example, use '/subscriptions/{subscriptionId}/' for a subscription,
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}'
   *              for a resource, and
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}'
   *              for an EventGrid topic.
   * @param eventSubscriptionName Name of the event subscription.
   * @param options The options parameters.
   */
  getFullUrl(
    scope: string,
    eventSubscriptionName: string,
    options?: EventSubscriptionsGetFullUrlOptionalParams,
  ): Promise<EventSubscriptionsGetFullUrlResponse>;
  /**
   * Get all delivery attributes for an event subscription.
   * @param scope The scope of the event subscription. The scope can be a subscription, or a resource
   *              group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic.
   *              For example, use '/subscriptions/{subscriptionId}/' for a subscription,
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}'
   *              for a resource, and
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}'
   *              for an EventGrid topic.
   * @param eventSubscriptionName Name of the event subscription.
   * @param options The options parameters.
   */
  getDeliveryAttributes(
    scope: string,
    eventSubscriptionName: string,
    options?: EventSubscriptionsGetDeliveryAttributesOptionalParams,
  ): Promise<EventSubscriptionsGetDeliveryAttributesResponse>;
}
