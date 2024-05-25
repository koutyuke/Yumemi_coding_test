import { t } from "elysia";

export const ResasPopulationDataByYearSchema = t.Object({
  year: t.Number(),
  value: t.Number(),
  rate: t.Optional(t.Number()),
});

export const ResasAPIPopulationCompositionLabelSchema = t.Union([
  t.Literal("総人口"),
  t.Literal("年少人口"),
  t.Literal("生産年齢人口"),
  t.Literal("老年人口"),
]);

export const ResasAPIPopulationCompositionDataSchema = t.Object({
  label: ResasAPIPopulationCompositionLabelSchema,
  data: t.Array(ResasPopulationDataByYearSchema),
});

export const ResasAPIPrefecturePopulationResponseSchema = t.Object({
  message: t.Union([t.String(), t.Null()]),
  result: t.Object({
    boundaryYear: t.Number(),
    data: t.Array(ResasAPIPopulationCompositionDataSchema),
  }),
});

export const ResasAPIPrefectureDataSchema = t.Object({
  prefCode: t.Number(),
  prefName: t.String(),
});

export const ResasAPIPrefecturesResponseSchema = t.Object({
  message: t.Union([t.String(), t.Null()]),
  result: t.Array(ResasAPIPrefectureDataSchema),
});
