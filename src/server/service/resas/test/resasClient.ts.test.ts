import { Value } from "@sinclair/typebox/value";
import { describe, test, expect } from "bun:test";
import { config } from "dotenv";
import { ResasClient } from "../resasClient";
import { ResasAPIPrefecturesResponseSchema } from "../schema";

config();

describe("resasAPI", () => {
  const apiKey = process.env.RESAS_API_KEY;

  if (!apiKey) {
    throw new Error("RESAS_API_KEY is not set.");
  }

  describe("getPrefectures - 都道府県一覧の取得", () => {
    test.skip("返り値がSchemaに沿った値になっている", () => {
      expect(
        (async () => {
          const resasClient = new ResasClient(apiKey);
          const res = await resasClient.getPrefectures();
          return Value.Check(ResasAPIPrefecturesResponseSchema, res);
        })(),
      ).resolves.toBeTrue();
    });

    test.skip("fetchに失敗した場合、エラーが発生する", () => {
      expect(
        (async () => {
          const resasClient = new ResasClient("invalid-api-key");
          await resasClient.getPrefectures();
        })(),
      ).rejects.toThrow();
    });
  });
});
