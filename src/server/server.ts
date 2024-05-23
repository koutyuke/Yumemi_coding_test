import Elysia from "elysia";
import { apiEnvPlugin } from "./plugins/env";
import { apiErrorPlugin } from "./plugins/error";

const apiServerElysiaInstance = new Elysia({ prefix: "/api" })
  .use(apiErrorPlugin)
  .use(apiEnvPlugin)
  .get("/", () => "Hello World!");

type ApiServerElysiaInstance = typeof apiServerElysiaInstance;

export type { ApiServerElysiaInstance };
export { apiServerElysiaInstance };
