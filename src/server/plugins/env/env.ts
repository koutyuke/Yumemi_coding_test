import { env } from "@yolk-oss/elysia-env";
import { t } from "elysia";

const apiEnvPlugin = env({
  RESAS_API_KEY: t.String({
    error: "RESAS_API_KEY is required for a service!",
  }),
});

export { apiEnvPlugin };
