# client library samples for JavaScript (Beta)

These sample programs show how to use the JavaScript client libraries for in some common scenarios.

| **File Name**                                           | **Description**                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [extensionsCreateSample.js][extensionscreatesample]     | Create a new Kubernetes Cluster Extension. x-ms-original-file: specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/extensions/stable/2024-11-01/examples/CreateExtension.json                                                                    |
| [extensionsDeleteSample.js][extensionsdeletesample]     | Delete a Kubernetes Cluster Extension. This will cause the Agent to Uninstall the extension from the cluster. x-ms-original-file: specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/extensions/stable/2024-11-01/examples/DeleteExtension.json |
| [extensionsGetSample.js][extensionsgetsample]           | Gets Kubernetes Cluster Extension. x-ms-original-file: specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/extensions/stable/2024-11-01/examples/GetExtension.json                                                                               |
| [extensionsListSample.js][extensionslistsample]         | List all Extensions in the cluster. x-ms-original-file: specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/extensions/stable/2024-11-01/examples/ListExtensions.json                                                                            |
| [extensionsUpdateSample.js][extensionsupdatesample]     | Patch an existing Kubernetes Cluster Extension. x-ms-original-file: specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/extensions/stable/2024-11-01/examples/PatchExtension.json                                                                |
| [operationStatusGetSample.js][operationstatusgetsample] | Get Async Operation status x-ms-original-file: specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/extensions/stable/2024-11-01/examples/GetExtensionAsyncOperationStatus.json                                                                   |

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule).

You need [an Azure subscription][freesub] to run these sample programs.

Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

3. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node extensionsCreateSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx dev-tool run vendored cross-env KUBERNETESCONFIGURATION_SUBSCRIPTION_ID="<kubernetesconfiguration subscription id>" KUBERNETESCONFIGURATION_RESOURCE_GROUP="<kubernetesconfiguration resource group>" node extensionsCreateSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[extensionscreatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/kubernetesconfiguration/arm-kubernetesconfiguration-extensions/samples/v1-beta/javascript/extensionsCreateSample.js
[extensionsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/kubernetesconfiguration/arm-kubernetesconfiguration-extensions/samples/v1-beta/javascript/extensionsDeleteSample.js
[extensionsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/kubernetesconfiguration/arm-kubernetesconfiguration-extensions/samples/v1-beta/javascript/extensionsGetSample.js
[extensionslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/kubernetesconfiguration/arm-kubernetesconfiguration-extensions/samples/v1-beta/javascript/extensionsListSample.js
[extensionsupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/kubernetesconfiguration/arm-kubernetesconfiguration-extensions/samples/v1-beta/javascript/extensionsUpdateSample.js
[operationstatusgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/kubernetesconfiguration/arm-kubernetesconfiguration-extensions/samples/v1-beta/javascript/operationStatusGetSample.js
[apiref]: https://learn.microsoft.com/javascript/api/@azure/arm-kubernetesconfiguration-extensions?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/kubernetesconfiguration/arm-kubernetesconfiguration-extensions/README.md
