import { t } from "elysia";

export const ResasAPIPrefecturePopulationResponseSchema = t.Object({
  message: t.Union([t.String(), t.Null()]),
  result: t.Object({
    boundaryYear: t.Number(),
    data: t.Array(
      t.Object({
        label: t.Union([t.Literal("総人口"), t.Literal("年少人口"), t.Literal("生産年齢人口"), t.Literal("老年人口")]),
        data: t.Array(
          t.Object({
            year: t.Number(),
            value: t.Number(),
            rate: t.Optional(t.Number()),
          }),
        ),
      }),
    ),
  }),
});

export const ResasAPIPrefecturesResponseSchema = t.Object({
  message: t.Union([t.String(), t.Null()]),
  result: t.Array(
    t.Object({
      prefCode: t.Number(),
      prefName: t.String(),
    }),
  ),
});
