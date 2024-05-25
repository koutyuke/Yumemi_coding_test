import { Value } from "@sinclair/typebox/value";
import { describe, test, expect } from "bun:test";
import { config } from "dotenv";
import { ResasClient } from "../resasClient";
import { ResasAPIPrefecturePopulationResponseSchema, ResasAPIPrefecturesResponseSchema } from "../schema";

config();

describe("ResasClient", () => {
  const apiKey = process.env.RESAS_API_KEY;

  if (!apiKey) {
    throw new Error("RESAS_API_KEY is not set.");
  }

  describe("getPrefectures - 都道府県一覧の取得", () => {
    test("返り値がSchemaに沿った値になっている", () => {
      expect(
        (async () => {
          const resasClient = new ResasClient(apiKey);
          const res = await resasClient.getPrefectures();
          return Value.Check(ResasAPIPrefecturesResponseSchema, res);
        })(),
      ).resolves.toBeTrue();
    });

    test("fetchに失敗した場合、エラーが発生する", () => {
      expect(
        (async () => {
          const resasClient = new ResasClient("invalid-api-key");
          await resasClient.getPrefectures();
        })(),
      ).rejects.toThrow();
    });
  });

  describe("getPopulationComposition - 人口構成の取得", () => {
    describe("返り値がSchemaに沿った値になっている", () => {
      test("都道府県", () => {
        expect(
          (async () => {
            const resasClient = new ResasClient(apiKey);
            const res = await resasClient.getPopulationComposition(11, "-");
            return Value.Check(ResasAPIPrefecturePopulationResponseSchema, res);
          })(),
        ).resolves.toBeTrue();
      });

      test("都道府県+市区町村", () => {
        expect(
          (async () => {
            const resasClient = new ResasClient(apiKey);
            const res = await resasClient.getPopulationComposition(11, "11100");
            return Value.Check(ResasAPIPrefecturePopulationResponseSchema, res);
          })(),
        ).resolves.toBeTrue();
      });

      test("都道府県+市区町村+追加", () => {
        expect(
          (async () => {
            const resasClient = new ResasClient(apiKey);
            const res = await resasClient.getPopulationComposition(11, "11100", {
              addArea: [{ prefCode: 11, cityCode: "11101" }],
            });
            return Value.Check(ResasAPIPrefecturePopulationResponseSchema, res);
          })(),
        ).resolves.toBeTrue();
      });
    });

    test("fetchに失敗した場合、エラーが発生する", () => {
      expect(
        (async () => {
          const resasClient = new ResasClient("invalid-api-key");
          await resasClient.getPopulationComposition(11, "-");
        })(),
      ).rejects.toThrow();
    });

    test("addAreaの要素数が11以上の場合にエラーが発生する", () => {
      expect(
        (async () => {
          const resasClient = new ResasClient("invalid-api-key");
          await resasClient.getPopulationComposition(11, "-", {
            addArea: [
              {
                prefCode: 11,
                cityCode: "11101",
              },
              {
                prefCode: 11,
                cityCode: "11102",
              },
              {
                prefCode: 11,
                cityCode: "11103",
              },
              {
                prefCode: 11,
                cityCode: "11104",
              },
              {
                prefCode: 11,
                cityCode: "11105",
              },
              {
                prefCode: 11,
                cityCode: "11106",
              },
              {
                prefCode: 11,
                cityCode: "11107",
              },
              {
                prefCode: 11,
                cityCode: "11108",
              },
              {
                prefCode: 11,
                cityCode: "11109",
              },
              {
                prefCode: 11,
                cityCode: "11110",
              },
              {
                prefCode: 11,
                cityCode: "11111",
              },
            ],
          });
        })(),
      ).rejects.toThrow();
    });
  });
});
