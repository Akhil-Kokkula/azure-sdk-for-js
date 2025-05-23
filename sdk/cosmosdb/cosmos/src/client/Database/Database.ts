// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { ClientContext } from "../../ClientContext.js";
import {
  createDatabaseUri,
  getIdFromLink,
  getPathFromLink,
  ResourceType,
} from "../../common/index.js";
import type { CosmosClient } from "../../CosmosClient.js";
import { ErrorResponse, type RequestOptions } from "../../request/index.js";
import { Container, Containers } from "../Container/index.js";
import { User, Users } from "../User/index.js";
import type { DatabaseDefinition } from "./DatabaseDefinition.js";
import { DatabaseResponse } from "./DatabaseResponse.js";
import type { OfferDefinition } from "../Offer/index.js";
import { OfferResponse, Offer } from "../Offer/index.js";
import type { Resource } from "../Resource.js";
import type { DiagnosticNodeInternal } from "../../diagnostics/DiagnosticNodeInternal.js";
import {
  getEmptyCosmosDiagnostics,
  withDiagnostics,
  withMetadataDiagnostics,
} from "../../utils/diagnostics.js";
import { MetadataLookUpType } from "../../CosmosDiagnostics.js";
import type {
  ClientEncryptionKeyRequest,
  KeyEncryptionKey,
  EncryptionKeyWrapMetadata,
  ClientEncryptionKeyProperties,
} from "../../encryption/index.js";
import {
  ClientEncryptionKeyResponse,
  EncryptionAlgorithm,
  KeyEncryptionAlgorithm,
} from "../../encryption/index.js";
import type { EncryptionManager } from "../../encryption/EncryptionManager.js";
/**
 * Operations for reading or deleting an existing database.
 *
 * @see {@link Databases} for creating new databases, and reading/querying all databases; use `client.databases`.
 *
 * Note: all these operations make calls against a fixed budget.
 * You should design your system such that these calls scale sublinearly with your application.
 * For instance, do not call `database.read()` before every single `item.read()` call, to ensure the database exists;
 * do this once on application start up.
 */
export class Database {
  /**
   * Used for creating new containers, or querying/reading all containers.
   *
   * Use `.database(id)` to read, replace, or delete a specific, existing {@link Database} by id.
   *
   * @example Create a new container
   * ```ts snippet:DatabaseCreateContainer
   * import { CosmosClient } from "@azure/cosmos";
   *
   * const endpoint = "https://your-account.documents.azure.com";
   * const key = "<database account masterkey>";
   * const client = new CosmosClient({ endpoint, key });
   *
   * const { body: containerDefinition, container } = await client
   *   .database("<db id>")
   *   .containers.create({ id: "<container id>" });
   * ```
   */
  public readonly containers: Containers;
  /**
   * Used for creating new users, or querying/reading all users.
   *
   * Use `.user(id)` to read, replace, or delete a specific, existing {@link User} by id.
   */
  public readonly users: Users;

  /**
   * Returns a reference URL to the resource. Used for linking in Permissions.
   * @example
   * ```ts snippet:DatabaseGetUrl
   * import { CosmosClient } from "@azure/cosmos";
   *
   * const endpoint = "https://your-account.documents.azure.com";
   * const key = "<database account masterkey>";
   * const client = new CosmosClient({ endpoint, key });
   *
   * const { database } = await client.databases.createIfNotExists({ id: "Test Database" });
   *
   * const url = database.url;
   * ```
   */
  public get url(): string {
    return createDatabaseUri(this.id);
  }

  /**
   * @internal
   */
  public _rid: string;

  /** Returns a new {@link Database} instance.
   *
   * Note: the intention is to get this object from {@link CosmosClient} via `client.database(id)`, not to instantiate it yourself.
   * @hidden
   */
  constructor(
    public readonly client: CosmosClient,
    public readonly id: string,
    private clientContext: ClientContext,
    private encryptionManager?: EncryptionManager,
    _rid?: string,
  ) {
    this.containers = new Containers(this, this.clientContext, this.encryptionManager);
    this.users = new Users(this, this.clientContext);
    this._rid = _rid;
  }

  /**
   * Used to read, replace, or delete a specific, existing {@link Database} by id.
   *
   * Use `.containers` creating new containers, or querying/reading all containers.
   *
   * @example Delete a container
   * ```ts snippet:DatabaseDeleteContainer
   * import { CosmosClient } from "@azure/cosmos";
   *
   * const endpoint = "https://your-account.documents.azure.com";
   * const key = "<database account masterkey>";
   * const client = new CosmosClient({ endpoint, key });
   *
   * await client.database("<db id>").container("<container id>").delete();
   * ```
   */
  public container(id: string): Container {
    return new Container(this, id, this.clientContext, this.encryptionManager);
  }

  /**
   * Used to read, replace, or delete a specific, existing {@link User} by id.
   *
   * Use `.users` for creating new users, or querying/reading all users.
   * @example Delete a user
   * ```ts snippet:DatabaseDeleteUser
   * import { CosmosClient } from "@azure/cosmos";
   *
   * const endpoint = "https://your-account.documents.azure.com";
   * const key = "<database account masterkey>";
   * const client = new CosmosClient({ endpoint, key });
   * await client.database("<db id>").user("<user id>").delete();
   * ```
   */
  public user(id: string): User {
    return new User(this, id, this.clientContext);
  }

  /** Read the definition of the given Database.
   * @example
   * ```ts snippet:DatabaseRead
   * import { CosmosClient } from "@azure/cosmos";
   *
   * const endpoint = "https://your-account.documents.azure.com";
   * const key = "<database account masterkey>";
   * const client = new CosmosClient({ endpoint, key });
   *
   * const { resource: database } = await client.database("<db id>").read();
   * ```
   */
  public async read(options?: RequestOptions): Promise<DatabaseResponse> {
    return withDiagnostics(async (diagnosticNode: DiagnosticNodeInternal) => {
      return this.readInternal(diagnosticNode, options);
    }, this.clientContext);
  }

  /**
   * @hidden
   */
  public async readInternal(
    diagnosticNode: DiagnosticNodeInternal,
    options?: RequestOptions,
  ): Promise<DatabaseResponse> {
    const path = getPathFromLink(this.url);
    const id = getIdFromLink(this.url);
    const response = await this.clientContext.read<DatabaseDefinition>({
      path,
      resourceType: ResourceType.database,
      resourceId: id,
      options,
      diagnosticNode,
    });
    return new DatabaseResponse(
      response.result,
      response.headers,
      response.code,
      this,
      getEmptyCosmosDiagnostics(),
    );
  }

  /** Delete the given Database.
   * @example
   * ```ts snippet:CosmosClientDatabaseDelete
   * import { CosmosClient } from "@azure/cosmos";
   *
   * const endpoint = "https://your-account.documents.azure.com";
   * const key = "<database account masterkey>";
   * const client = new CosmosClient({ endpoint, key });
   * await client.database("<id here>").delete();
   * ```
   */
  public async delete(options?: RequestOptions): Promise<DatabaseResponse> {
    return withDiagnostics(async (diagnosticNode: DiagnosticNodeInternal) => {
      const path = getPathFromLink(this.url);
      const id = getIdFromLink(this.url);

      const response = await this.clientContext.delete<DatabaseDefinition>({
        path,
        resourceType: ResourceType.database,
        resourceId: id,
        options,
        diagnosticNode,
      });
      return new DatabaseResponse(
        response.result,
        response.headers,
        response.code,
        this,
        getEmptyCosmosDiagnostics(),
      );
    }, this.clientContext);
  }

  /**
   * Gets offer on database. If none exists, returns an OfferResponse with undefined.
   * @example Read the offer on the database
   * ```ts snippet:DatabaseReadOffer
   * import { CosmosClient } from "@azure/cosmos";
   *
   * const endpoint = "https://your-account.documents.azure.com";
   * const key = "<database account masterkey>";
   * const client = new CosmosClient({ endpoint, key });
   *
   * const { resource: offer } = await client.database("<db id>").readOffer();
   * ```
   */
  public async readOffer(options: RequestOptions = {}): Promise<OfferResponse> {
    return withDiagnostics(async (diagnosticNode: DiagnosticNodeInternal) => {
      const { resource: record } = await withMetadataDiagnostics(
        async (node: DiagnosticNodeInternal) => {
          return this.readInternal(node);
        },
        diagnosticNode,
        MetadataLookUpType.DatabaseLookUp,
      );

      const path = "/offers";
      const url = record._self;

      const response = await this.clientContext.queryFeed<OfferDefinition & Resource[]>({
        path,
        resourceId: "",
        resourceType: ResourceType.offer,
        query: `SELECT * from root where root.resource = "${url}"`,
        resultFn: (result) => result.Offers,
        options,
        diagnosticNode,
      });
      const offer = response.result[0]
        ? new Offer(this.client, response.result[0].id, this.clientContext)
        : undefined;
      return new OfferResponse(
        response.result[0],
        response.headers,
        response.code,
        getEmptyCosmosDiagnostics(),
        offer,
      );
    }, this.clientContext);
  }

  /**
   * Create Encryption key for database account
   * @example
   * ```ts snippet:DatabaseCreateClientEncryptionKey
   * import { ClientSecretCredential } from "@azure/identity";
   * import {
   *   AzureKeyVaultEncryptionKeyResolver,
   *   CosmosClient,
   *   EncryptionKeyWrapMetadata,
   *   EncryptionKeyResolverName,
   *   KeyEncryptionAlgorithm,
   *   EncryptionAlgorithm,
   * } from "@azure/cosmos";
   *
   * const endpoint = "https://your-account.documents.azure.com";
   * const key = "<database account masterkey>";
   * const credentials = new ClientSecretCredential("<tenant-id>", "<client-id>", "<app-secret>");
   * const keyResolver = new AzureKeyVaultEncryptionKeyResolver(credentials);
   * const client = new CosmosClient({
   *   endpoint,
   *   key,
   *   clientEncryptionOptions: {
   *     keyEncryptionKeyResolver: keyResolver,
   *   },
   * });
   * const { database } = await client.databases.createIfNotExists({ id: "<db id>" });
   * const metadata: EncryptionKeyWrapMetadata = {
   *   type: EncryptionKeyResolverName.AzureKeyVault,
   *   name: "<key-name>",
   *   value: "<key-vault-url>",
   *   algorithm: KeyEncryptionAlgorithm.RSA_OAEP,
   * };
   *
   * await database.createClientEncryptionKey(
   *   "<cek-id>",
   *   EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
   *   metadata,
   * );
   * ```
   */
  public async createClientEncryptionKey(
    clientEncryptionKeyId: string,
    encryptionAlgorithm: EncryptionAlgorithm,
    keyWrapMetadata: EncryptionKeyWrapMetadata,
  ): Promise<ClientEncryptionKeyResponse> {
    if (clientEncryptionKeyId == null || !clientEncryptionKeyId.trim()) {
      throw new Error("encryption key id cannot be null or empty");
    }
    if (encryptionAlgorithm !== EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256) {
      throw new Error(`Invalid encryption algorithm '${encryptionAlgorithm}' passed.`);
    }
    if (!keyWrapMetadata) {
      throw new Error("encryptionKeyWrapMetadata cannot be null.");
    }
    if (keyWrapMetadata.algorithm !== KeyEncryptionAlgorithm.RSA_OAEP) {
      throw new Error(`Invalid key wrap algorithm '${keyWrapMetadata.algorithm}' passed.`);
    }
    if (!this.clientContext.enableEncryption) {
      throw new Error(
        "Creating a client encryption key requires the use of an encryption-enabled client.",
      );
    }

    const keyEncryptionKey: KeyEncryptionKey =
      this.encryptionManager.keyEncryptionKeyCache.getOrCreate(
        keyWrapMetadata.name,
        keyWrapMetadata.value,
        this.encryptionManager.encryptionKeyStoreProvider,
      );

    const protectedDataEncryptionKey =
      await this.encryptionManager.protectedDataEncryptionKeyCache.getOrCreate(
        clientEncryptionKeyId,
        keyEncryptionKey,
      );

    const wrappedDataEncryptionKey = protectedDataEncryptionKey.encryptedValue;

    const body: ClientEncryptionKeyRequest = {
      id: clientEncryptionKeyId,
      encryptionAlgorithm: encryptionAlgorithm,
      keyWrapMetadata: keyWrapMetadata,
      wrappedDataEncryptionKey: wrappedDataEncryptionKey.toString("base64"),
    };

    return withDiagnostics(async (diagnosticNode: DiagnosticNodeInternal) => {
      const path = getPathFromLink(this.url, ResourceType.clientencryptionkey);
      const databaseId = getIdFromLink(this.url);
      const response = await this.clientContext.create<ClientEncryptionKeyRequest>({
        body,
        path: path,
        resourceType: ResourceType.clientencryptionkey,
        resourceId: databaseId,
        diagnosticNode,
      });
      const ref: ClientEncryptionKeyProperties = {
        id: response.result.id,
        encryptionAlgorithm: response.result.encryptionAlgorithm,
        etag: response.result._etag,
        wrappedDataEncryptionKey: new Uint8Array(
          Buffer.from(response.result.wrappedDataEncryptionKey, "base64"),
        ),
        encryptionKeyWrapMetadata: response.result.keyWrapMetadata,
      };
      return new ClientEncryptionKeyResponse(
        response.result,
        response.headers,
        response.code,
        ref,
        getEmptyCosmosDiagnostics(),
      );
    }, this.clientContext);
  }

  /**
   * Read Encryption key for database account
   * @example
   * ```ts snippet:DatabaseReadClientEncryptionKey
   * import { ClientSecretCredential } from "@azure/identity";
   * import { AzureKeyVaultEncryptionKeyResolver, CosmosClient } from "@azure/cosmos";
   *
   * const endpoint = "https://your-account.documents.azure.com";
   * const key = "<database account masterkey>";
   * const credentials = new ClientSecretCredential("<tenant-id>", "<client-id>", "<app-secret>");
   * const keyResolver = new AzureKeyVaultEncryptionKeyResolver(credentials);
   * const client = new CosmosClient({
   *   endpoint,
   *   key,
   *   clientEncryptionOptions: {
   *     keyEncryptionKeyResolver: keyResolver,
   *   },
   * });
   * const { database } = await client.databases.createIfNotExists({ id: "<db id>" });
   *
   * const { resource: clientEncryptionKey } = await database.readClientEncryptionKey("<cek-id>");
   * ```
   */
  public async readClientEncryptionKey(
    clientEncryptionKeyId: string,
  ): Promise<ClientEncryptionKeyResponse> {
    if (clientEncryptionKeyId == null || !clientEncryptionKeyId.trim()) {
      throw new ErrorResponse("encryption key id cannot be null or empty");
    }
    return withDiagnostics(async (diagnosticNode: DiagnosticNodeInternal) => {
      if (!this._rid) {
        const databaseResponse = await this.readInternal(diagnosticNode);
        if (!databaseResponse || !databaseResponse.resource) {
          throw new ErrorResponse(`Error reading database with id ${clientEncryptionKeyId}`);
        }
        this._rid = databaseResponse.resource._rid;
      }
      const path = getPathFromLink(this.url, ResourceType.clientencryptionkey);
      const resourceid = getIdFromLink(this.url);
      const response = await this.clientContext.read<ClientEncryptionKeyRequest>({
        path: path + `/${clientEncryptionKeyId}`,
        resourceType: ResourceType.clientencryptionkey,
        resourceId: resourceid + `/${ResourceType.clientencryptionkey}/${clientEncryptionKeyId}`,
        options: { databaseRid: this._rid },
        diagnosticNode,
      });
      if (!response || !response.result) {
        throw new ErrorResponse(
          `Error reading client encryption key with id ${clientEncryptionKeyId}`,
        );
      }
      const ref: ClientEncryptionKeyProperties = {
        id: response.result.id,
        encryptionAlgorithm: response.result.encryptionAlgorithm,
        etag: response.result._etag,
        wrappedDataEncryptionKey: new Uint8Array(
          Buffer.from(response.result.wrappedDataEncryptionKey, "base64"),
        ),
        encryptionKeyWrapMetadata: response.result.keyWrapMetadata,
      };
      return new ClientEncryptionKeyResponse(
        response.result,
        response.headers,
        response.code,
        ref,
        getEmptyCosmosDiagnostics(),
      );
    }, this.clientContext);
  }
  /**
   * rewraps a client encryption key with new key encryption key
   * @param id - client encryption key id
   * @param newKeyWrapMetadata - new encryption key wrap metadata
   * @returns rewrapped client encryption key with new customer managed key
   * @example
   * ```ts snippet:DatabaseRewrapClientEncryptionKey
   * import { ClientSecretCredential } from "@azure/identity";
   * import {
   *   AzureKeyVaultEncryptionKeyResolver,
   *   CosmosClient,
   *   EncryptionKeyWrapMetadata,
   *   EncryptionKeyResolverName,
   *   KeyEncryptionAlgorithm,
   * } from "@azure/cosmos";
   *
   * const endpoint = "https://your-account.documents.azure.com";
   * const key = "<database account masterkey>";
   * const credentials = new ClientSecretCredential("<tenant-id>", "<client-id>", "<app-secret>");
   * const keyResolver = new AzureKeyVaultEncryptionKeyResolver(credentials);
   * const client = new CosmosClient({
   *   endpoint,
   *   key,
   *   clientEncryptionOptions: {
   *     keyEncryptionKeyResolver: keyResolver,
   *   },
   * });
   * const { database } = await client.databases.createIfNotExists({ id: "<db id>" });
   * const newMetadata: EncryptionKeyWrapMetadata = {
   *   type: EncryptionKeyResolverName.AzureKeyVault,
   *   name: "<key-name>",
   *   value: "<key-vault-url>",
   *   algorithm: KeyEncryptionAlgorithm.RSA_OAEP,
   * };
   *
   * await database.rewrapClientEncryptionKey("<new-cek-id>", newMetadata);
   * ```
   */
  public async rewrapClientEncryptionKey(
    clientEncryptionKeyId: string,
    newKeyWrapMetadata: EncryptionKeyWrapMetadata,
  ): Promise<ClientEncryptionKeyResponse> {
    if (clientEncryptionKeyId == null || !clientEncryptionKeyId.trim()) {
      throw new ErrorResponse("encryption key id cannot be null or empty");
    }
    if (!newKeyWrapMetadata) {
      throw new ErrorResponse("encryptionKeyWrapMetadata cannot be null.");
    }
    if (newKeyWrapMetadata.algorithm !== KeyEncryptionAlgorithm.RSA_OAEP) {
      throw new ErrorResponse(
        `Invalid key wrap algorithm '${newKeyWrapMetadata.algorithm}' passed.`,
      );
    }
    if (!this.clientContext.enableEncryption) {
      throw new ErrorResponse(
        "Rewrapping a client encryption key requires the use of an encryption-enabled client.",
      );
    }

    const res = await this.readClientEncryptionKey(clientEncryptionKeyId);
    if (!res || !res.clientEncryptionKeyProperties) {
      throw new ErrorResponse(
        `Error reading client encryption key with id ${clientEncryptionKeyId}`,
      );
    }
    let clientEncryptionKeyProperties = res.clientEncryptionKeyProperties;

    let keyEncryptionKey = this.encryptionManager.keyEncryptionKeyCache.getOrCreate(
      clientEncryptionKeyProperties.encryptionKeyWrapMetadata.name,
      clientEncryptionKeyProperties.encryptionKeyWrapMetadata.value,
      this.encryptionManager.encryptionKeyStoreProvider,
    );
    const unwrappedKey = await keyEncryptionKey.unwrapEncryptionKey(
      Buffer.from(clientEncryptionKeyProperties.wrappedDataEncryptionKey),
    );

    keyEncryptionKey = this.encryptionManager.keyEncryptionKeyCache.getOrCreate(
      newKeyWrapMetadata.name,
      newKeyWrapMetadata.value,
      this.encryptionManager.encryptionKeyStoreProvider,
    );
    const rewrappedKey = await keyEncryptionKey.wrapEncryptionKey(unwrappedKey);
    clientEncryptionKeyProperties = {
      id: clientEncryptionKeyId,
      encryptionAlgorithm: clientEncryptionKeyProperties.encryptionAlgorithm,
      etag: clientEncryptionKeyProperties.etag,
      wrappedDataEncryptionKey: rewrappedKey,
      encryptionKeyWrapMetadata: newKeyWrapMetadata,
    };
    const body: ClientEncryptionKeyRequest = {
      id: clientEncryptionKeyId,
      encryptionAlgorithm: clientEncryptionKeyProperties.encryptionAlgorithm,
      keyWrapMetadata: newKeyWrapMetadata,
      wrappedDataEncryptionKey: rewrappedKey.toString("base64"),
    };
    return withDiagnostics(async (diagnosticNode: DiagnosticNodeInternal) => {
      const path = getPathFromLink(this.url, ResourceType.clientencryptionkey);
      const resourceid = getIdFromLink(this.url);
      const options = {
        accessCondition: { type: "IfMatch", condition: clientEncryptionKeyProperties.etag },
      };
      const response = await this.clientContext.replace<ClientEncryptionKeyRequest>({
        body,
        path: path + `/${clientEncryptionKeyId}`,
        resourceType: ResourceType.clientencryptionkey,
        resourceId: resourceid + `/${ResourceType.clientencryptionkey}/${clientEncryptionKeyId}`,
        options,
        diagnosticNode,
      });

      if (!response || !response.result) {
        throw new ErrorResponse(
          `Error rewrapping client encryption key with id ${clientEncryptionKeyId}`,
        );
      }

      const ref: ClientEncryptionKeyProperties = {
        id: response.result.id,
        encryptionAlgorithm: response.result.encryptionAlgorithm,
        etag: response.result._etag,
        wrappedDataEncryptionKey: new Uint8Array(
          Buffer.from(response.result.wrappedDataEncryptionKey, "base64"),
        ),
        encryptionKeyWrapMetadata: response.result.keyWrapMetadata,
      };
      return new ClientEncryptionKeyResponse(
        response.result,
        response.headers,
        response.code,
        ref,
        getEmptyCosmosDiagnostics(),
      );
    }, this.clientContext);
  }
}
