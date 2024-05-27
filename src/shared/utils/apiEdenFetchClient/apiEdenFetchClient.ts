import { treaty } from "@elysiajs/eden";
import type { ApiServerElysiaInstance } from "@/server";
import { baseUrl } from "@/shared/const/base";

const apiEdenFetchClient = treaty<ApiServerElysiaInstance>(baseUrl.href);

export { apiEdenFetchClient };
