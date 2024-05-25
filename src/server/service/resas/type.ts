import { Static } from "elysia";
import { ResasAPIPrefecturePopulationResponseSchema, ResasAPIPrefecturesResponseSchema } from "./schema";

export type ResasAPIPrefecturesResponse = Static<typeof ResasAPIPrefecturesResponseSchema>;

export type ResasAPIPrefecturePopulationResponse = Static<typeof ResasAPIPrefecturePopulationResponseSchema>;
