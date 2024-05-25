import Elysia from "elysia";
import { apiEnvPlugin } from "./plugins/env";
import { apiErrorPlugin } from "./plugins/error";
import { prefecturalPopulationCompositionRoute } from "./routes/prefecturalPopulationComposition";
import { prefecturesRoute } from "./routes/prefectures";

const apiServerElysiaInstance = new Elysia({ prefix: "/api" })
  .use(apiErrorPlugin)
  .use(apiEnvPlugin)
  .use(prefecturesRoute)
  .use(prefecturalPopulationCompositionRoute)
  .compile();

type ApiServerElysiaInstance = typeof apiServerElysiaInstance;

export type { ApiServerElysiaInstance };
export { apiServerElysiaInstance };
