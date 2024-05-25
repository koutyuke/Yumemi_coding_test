import Elysia, { t } from "elysia";
import { apiEnvPlugin } from "@/server/plugins/env";
import { InternalServerErrorException } from "@/server/plugins/error/exceptions";
import { errorResponseSchema } from "@/server/schema/errorResponse";
import { ResasClient } from "@/server/service/resas/resasClient";
import { prefecturalPopulationCompositionRouteResponseSchema } from "./schema";
import { convertPopulationCompositionObjFromResasPopulationCompositionList } from "./utils";

const prefecturalPopulationCompositionRoute = new Elysia().use(apiEnvPlugin).get(
  "/prefectures/:prefCode/population/composition",
  async ({ env, params }) => {
    const resasClient = new ResasClient(env.RESAS_API_KEY);
    const resasPopulationCompositionData = await resasClient
      .getPopulationComposition(params.prefCode, "-")
      .catch(() => {
        throw new InternalServerErrorException({ message: "Failed to fetch Resas API prefectural population." });
      });

    const prefecturalPopulationCompositionObj = convertPopulationCompositionObjFromResasPopulationCompositionList(
      resasPopulationCompositionData.result.data,
      {
        総人口: "totalPopulation",
        年少人口: "youngPopulation",
        生産年齢人口: "productivePopulation",
        老年人口: "elderlyPopulation",
      },
    );

    return {
      boundaryYear: resasPopulationCompositionData.result.boundaryYear,
      data: prefecturalPopulationCompositionObj,
    };
  },
  {
    response: {
      200: prefecturalPopulationCompositionRouteResponseSchema,
      400: errorResponseSchema,
      500: errorResponseSchema,
    },
    params: t.Object({
      prefCode: t.Numeric(),
    }),
  },
);

export { prefecturalPopulationCompositionRoute };
