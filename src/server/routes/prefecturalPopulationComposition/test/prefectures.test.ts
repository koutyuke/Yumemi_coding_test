import { Value } from "@sinclair/typebox/value";
import { describe, test, expect } from "bun:test";
import { Static } from "elysia";
import { prefecturalPopulationCompositionRoute } from "../prefecturalPopulationComposition";
import { prefecturalPopulationCompositionRouteResponseSchema } from "../schema";

describe("prefecturalPopulationCompositionRoute", () => {
  test("成功時にstatusが200かつ、データがSchemaに沿った形になっている。", async () => {
    const app = prefecturalPopulationCompositionRoute;

    const response = await app.handle(new Request("http://localhost/prefectures/1/population/composition"));

    const responseJson = (await response.json()) as Static<typeof prefecturalPopulationCompositionRouteResponseSchema>;

    expect(response.status).toBe(200);
    expect(Value.Check(prefecturalPopulationCompositionRouteResponseSchema, responseJson)).toBeTrue();
  });
});
