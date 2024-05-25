import Elysia from "elysia";
import { apiEnvPlugin } from "@/server/plugins/env";
import { InternalServerErrorException } from "@/server/plugins/error/exceptions";
import { errorResponseSchema } from "@/server/schema/errorResponse";
import { ResasClient } from "@/server/service/resas/resasClient";
import { prefecturesRouteResponseSchema } from "./schema";

const prefecturesRoute = new Elysia().use(apiEnvPlugin).get(
  "/prefectures",
  async ({ env }) => {
    const resasClient = new ResasClient(env.RESAS_API_KEY);

    const prefectural = await resasClient.getPrefectures().catch(() => {
      throw new InternalServerErrorException({ message: "Failed to fetch Resas API prefectural population." });
    });

    return {
      data: prefectural.result,
    };
  },
  {
    response: {
      200: prefecturesRouteResponseSchema,
      400: errorResponseSchema,
      500: errorResponseSchema,
    },
  },
);

export { prefecturesRoute };
