import { Value } from "@sinclair/typebox/value";
import { describe, test, expect } from "bun:test";
import { Static } from "elysia";
import { prefecturesRoute } from "../prefectures";
import { prefecturesRouteResponseSchema } from "../schema";

describe("prefectureRoute", () => {
  test("成功時にstatusが200かつ、データがSchemaに沿った形になっている。", async () => {
    const app = prefecturesRoute;

    const response = await app.handle(new Request("http://localhost/prefectures"));

    const responseJson = (await response.json()) as Static<typeof prefecturesRouteResponseSchema>;

    expect(response.status).toBe(200);
    expect(Value.Check(prefecturesRouteResponseSchema, responseJson)).toBeTrue();
  });
});
