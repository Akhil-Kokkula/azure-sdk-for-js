// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { parseKeyVaultKeyIdentifier } from "../../src/identifier.js";
import { describe, it, assert } from "vitest";

describe("Key Vault Keys Identifier", () => {
  it("It should work with a URI of a key before it gets a version", async () => {
    const uri = "https://keyvault-name.vault.azure.net/keys/key-name/pending";
    const identifier = parseKeyVaultKeyIdentifier(uri);

    assert.deepEqual(identifier, {
      sourceId: "https://keyvault-name.vault.azure.net/keys/key-name/pending",
      vaultUrl: "https://keyvault-name.vault.azure.net",
      version: "pending",
      name: "key-name",
    });
  });

  it("It should work with a URI of a key with a specific version", async () => {
    const uri = "https://keyvault-name.vault.azure.net/keys/key-name/version";
    const identifier = parseKeyVaultKeyIdentifier(uri);

    assert.deepEqual(identifier, {
      sourceId: "https://keyvault-name.vault.azure.net/keys/key-name/version",
      vaultUrl: "https://keyvault-name.vault.azure.net",
      version: "version",
      name: "key-name",
    });
  });

  it("It should work with a deleted key recovery ID", async () => {
    const uri = "https://keyvault-name.vault.azure.net/deletedkeys/deleted-key";
    const identifier = parseKeyVaultKeyIdentifier(uri);

    assert.deepEqual(identifier, {
      sourceId: "https://keyvault-name.vault.azure.net/deletedkeys/deleted-key",
      vaultUrl: "https://keyvault-name.vault.azure.net",
      name: "deleted-key",
      version: undefined,
    });
  });

  it("It should work when using a URL that contains a port", async () => {
    const uri = "https://localhost:8443/keys/key-name/version";
    const identifier = parseKeyVaultKeyIdentifier(uri);

    assert.deepEqual(identifier, {
      sourceId: "https://localhost:8443/keys/key-name/version",
      vaultUrl: "https://localhost:8443",
      version: "version",
      name: "key-name",
    });
  });
});
