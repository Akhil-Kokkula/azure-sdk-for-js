// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Constants, OperationType, ResourceType } from "../../../src/common/index.js";
import type { CosmosHeaders } from "../../../src/queryExecutionContext/CosmosHeaders.js";
import { SessionContainer } from "../../../src/session/sessionContainer.js";
import type { SessionContext } from "../../../src/session/SessionContext.js";
import { describe, it, assert } from "vitest";

describe("SessionContainer", () => {
  const collectionLink = "dbs/testDatabase/colls/testCollection";
  const collectionRid = "-EdBAKsiRLM=";

  it("set/get/delete", () => {
    const sc = new SessionContainer();

    const tokenString = "1:1#100#1=20#2=5#3=30";

    const nameBasedRequest: SessionContext = {
      isNameBased: true,
      resourceId: collectionRid,
      resourceAddress: "/" + collectionLink + "/",
      resourceType: ResourceType.item,
      operationType: OperationType.Create,
    };

    const resHeadersNameBased: CosmosHeaders = {};
    resHeadersNameBased[Constants.HttpHeaders.OwnerFullName] = collectionLink;
    resHeadersNameBased[Constants.HttpHeaders.OwnerId] = collectionRid;
    resHeadersNameBased[Constants.HttpHeaders.SessionToken] = tokenString;

    // Add a token and get new token, should be equal
    sc.set(nameBasedRequest, resHeadersNameBased);
    const originalTokenString = sc.get(nameBasedRequest);
    assert.equal(
      tokenString,
      originalTokenString,
      "Session token string must be equal to original header on initial set",
    );

    // Add an older token, should still equal original token
    const tokenStringWithOlderVersion = "1:1#99#1=19#2=4#3=29";
    resHeadersNameBased[Constants.HttpHeaders.SessionToken] = tokenStringWithOlderVersion;
    sc.set(nameBasedRequest, resHeadersNameBased);
    const sameTokenString = sc.get(nameBasedRequest);
    assert.equal(
      tokenString,
      sameTokenString,
      "Session token string must be equal to the original higher version header",
    );

    // Add a newer version token, should equal new token
    const tokenStringWithNewerVersion = "1:1#100#1=30#2=10#3=40";
    resHeadersNameBased[Constants.HttpHeaders.SessionToken] = tokenStringWithNewerVersion;
    sc.set(nameBasedRequest, resHeadersNameBased);
    const updatedTokenString = sc.get(nameBasedRequest);
    assert.equal(
      tokenStringWithNewerVersion,
      updatedTokenString,
      "Session token string must be equal to the new higher version header",
    );

    // Add a new partition's token, should container new and old token
    const tokenFromAnotherPartition = "2:1#100#1=10";
    resHeadersNameBased[Constants.HttpHeaders.SessionToken] = tokenFromAnotherPartition;
    sc.set(nameBasedRequest, resHeadersNameBased);
    const multiplePartitions = sc.get(nameBasedRequest);
    assert(
      multiplePartitions.includes(tokenStringWithNewerVersion),
      "Token string must contain token from updated request",
    );
    assert(
      multiplePartitions.includes(tokenFromAnotherPartition),
      "Token string must contain from new partition",
    );

    // Add a token with has multiple partitions in it, 1 old, and 1 new. Should only keep the new one, but still contain tokens for both
    const p2TokenWithNewerVersion = "2:2#100#1=10#2=50";
    const tokenWithMultiplePartitions = `${tokenStringWithOlderVersion},${p2TokenWithNewerVersion}`;
    resHeadersNameBased[Constants.HttpHeaders.SessionToken] = tokenWithMultiplePartitions;
    sc.set(nameBasedRequest, resHeadersNameBased);
    const multiplePartitions2 = sc.get(nameBasedRequest);
    assert(
      multiplePartitions2.includes(tokenStringWithNewerVersion),
      "Token string must contain token from previous request for first partition",
    );
    assert(
      multiplePartitions2.includes(p2TokenWithNewerVersion),
      "Token string must contain from updated token for second partition",
    );

    // Remove tokens and get new token, should be empty
    sc.remove(nameBasedRequest);
    const emptyTokenString = sc.get(nameBasedRequest);
    assert.equal("", emptyTokenString, "Session token string must be empty after removal");
  });
});
