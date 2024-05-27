import { treaty } from "@elysiajs/eden";
import type { ApiServerElysiaInstance } from "@/server";

const apiEdenFetchClient = treaty<ApiServerElysiaInstance>("http://localhost:3000");

export { apiEdenFetchClient };
