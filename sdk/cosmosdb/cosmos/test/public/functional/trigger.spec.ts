// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TriggerOperation, TriggerType } from "../../../src/index.js";
import type { TriggerDefinition, Container } from "../../../src/index.js";
import { getTestContainer, removeAllDatabases } from "../common/TestHelpers.js";
import { describe, it, assert, beforeEach } from "vitest";

const notFoundErrorCode = 404;

// Mock for trigger function bodies
declare let getContext: any;
const normalizeStringBody = (body: any): string => body.replace(/\s+/g, " ").trim();

describe("NodeJS CRUD Tests", { timeout: 10000 }, () => {
  let container: Container;

  beforeEach(async () => {
    await removeAllDatabases();
    container = await getTestContainer("trigger container");
  });

  describe("Validate Trigger CRUD", () => {
    it("nativeApi Should do trigger CRUD operations successfully name based", async () => {
      // read triggers
      const { resources: triggers } = await container.scripts.triggers.readAll().fetchAll();
      assert.equal(Array.isArray(triggers), true);

      // create a trigger
      const beforeCreateTriggersCount = triggers.length;
      const triggerDefinition: TriggerDefinition = {
        id: "sample trigger",
        body: "serverScript() { var x = 10; }",
        triggerType: TriggerType.Pre,
        triggerOperation: TriggerOperation.All,
      };

      const { resource: trigger } = await container.scripts.triggers.create(triggerDefinition);

      assert.equal(trigger.id, triggerDefinition.id);
      assert.equal(trigger.body, "serverScript() { var x = 10; }");

      // read triggers after creation
      const { resources: triggersAfterCreation } = await container.scripts.triggers
        .readAll()
        .fetchAll();
      assert.equal(
        triggersAfterCreation.length,
        beforeCreateTriggersCount + 1,
        "create should increase the number of triggers",
      );

      // query triggers
      const querySpec = {
        query: "SELECT * FROM root r WHERE r.id=@id",
        parameters: [
          {
            name: "@id",
            value: triggerDefinition.id,
          },
        ],
      };
      const { resources: results } = await container.scripts.triggers.query(querySpec).fetchAll();
      assert(results.length > 0, "number of results for the query should be > 0");

      // replace trigger
      // prettier-ignore
      trigger.body = function () { const x = 20; console.log(x); };
      const { resource: replacedTrigger } = await container.scripts
        .trigger(trigger.id)
        .replace(trigger);

      assert.equal(replacedTrigger.id, trigger.id);
      assert.equal(
        normalizeStringBody(replacedTrigger.body),
        normalizeStringBody("function() { const x = 20; console.log(x); }"),
      );

      // read trigger
      const { resource: triggerAfterReplace } = await container.scripts
        .trigger(replacedTrigger.id)
        .read();
      assert.equal(replacedTrigger.id, triggerAfterReplace.id);

      // delete trigger
      await await container.scripts.trigger(replacedTrigger.id).delete();

      // read triggers after deletion
      try {
        await container.scripts.trigger(replacedTrigger.id).read();
        assert.fail("Must fail to read after deletion");
      } catch (err: any) {
        assert.equal(err.code, notFoundErrorCode, "response should return error code 404");
      }
    });
  });

  describe("validate trigger functionality", () => {
    const triggers: TriggerDefinition[] = [
      {
        id: "t1",
        body: function () {
          const item = getContext().getRequest().getBody();
          item.id = item.id.toUpperCase() + "t1";
          getContext().getRequest().setBody(item);
        },
        triggerType: TriggerType.Pre,
        triggerOperation: TriggerOperation.All,
      },
      {
        id: "t2",
        body: "function() { }", // trigger already stringified
        triggerType: TriggerType.Pre,
        triggerOperation: TriggerOperation.All,
      },
      {
        id: "t3",
        body: function () {
          const item = getContext().getRequest().getBody();
          item.id = item.id.toLowerCase() + "t3";
          getContext().getRequest().setBody(item);
        },
        triggerType: TriggerType.Pre,
        triggerOperation: TriggerOperation.All,
      },
      {
        id: "response1",
        body: function () {
          const prebody = getContext().getRequest().getBody();
          if (prebody.id !== "TESTING POST TRIGGERt1") throw "name mismatch";
          const postbody = getContext().getResponse().getBody();
          if (postbody.id !== "TESTING POST TRIGGERt1") throw "name mismatch";
        },
        triggerType: TriggerType.Post,
        triggerOperation: TriggerOperation.All,
      },
      {
        id: "triggerOpType",
        body: "function() { }",
        triggerType: TriggerType.Post,
        triggerOperation: TriggerOperation.Delete,
      },
    ];

    it("should do trigger operations successfully with create", async () => {
      for (const trigger of triggers) {
        await container.scripts.triggers.create(trigger);
      }
      // create document
      const { resource: document } = await container.items.create(
        { id: "doc1", key: "value" },
        { preTriggerInclude: "t1" },
      );
      assert.equal(document.id, "DOC1t1", "name should be capitalized");
      const { resource: document2 } = await container.items.create(
        { id: "doc2", key2: "value2" },
        { preTriggerInclude: "t2" },
      );
      assert.equal(document2.id, "doc2", "name shouldn't change");
      const { resource: document3 } = await container.items.create(
        { id: "Doc3", prop: "empty" },
        { preTriggerInclude: "t3" },
      );
      assert.equal(document3.id, "doc3t3");
      const { resource: document4 } = await container.items.create(
        { id: "testing post trigger" },
        { postTriggerInclude: "response1", preTriggerInclude: "t1" },
      );
      assert.equal(document4.id, "TESTING POST TRIGGERt1");
      const { resource: document5 } = await container.items.create(
        { id: "responseheaders" },
        { preTriggerInclude: "t1" },
      );
      assert.equal(document5.id, "RESPONSEHEADERSt1");
      try {
        await container.items.create({ id: "Docoptype" }, { postTriggerInclude: "triggerOpType" });
        assert.fail("Must fail");
      } catch (err: any) {
        assert.equal(err.code, 400, "Must throw when using a DELETE trigger on a CREATE operation");
      }
    });
  });
});
