import { t } from "elysia";

export const ResasAPIPrefecturePopulationResponseSchema = t.Object({});

export const ResasAPIPrefecturesResponseSchema = t.Object({
  message: t.Union([t.String(), t.Null()]),
  result: t.Array(
    t.Object({
      prefCode: t.Number(),
      prefName: t.String(),
    }),
  ),
});
