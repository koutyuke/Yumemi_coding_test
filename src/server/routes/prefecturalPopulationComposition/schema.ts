import { t } from "elysia";

export const populationDataByYearSchema = t.Object({
  year: t.Number(),
  value: t.Number(),
});

export const prefecturalPopulationCompositionDataResponseSchema = t.Object({
  totalPopulation: t.Array(populationDataByYearSchema),
  youngPopulation: t.Array(populationDataByYearSchema),
  productivePopulation: t.Array(populationDataByYearSchema),
  elderlyPopulation: t.Array(populationDataByYearSchema),
});

export const prefecturalPopulationCompositionRouteResponseSchema = t.Object({
  boundaryYear: t.Number(),
  data: prefecturalPopulationCompositionDataResponseSchema,
});
