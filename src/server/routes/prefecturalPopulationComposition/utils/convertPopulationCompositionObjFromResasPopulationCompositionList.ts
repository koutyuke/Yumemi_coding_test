import { Static } from "elysia";
import { populationDataByYearSchema } from "../schema";
import { ResasAPIPopulationCompositionDataSchema } from "@/server/service/resas/schema";

const convertPopulationCompositionObjFromResasPopulationCompositionList = <S extends string>(
  resasPopulationCompositionsList: Static<typeof ResasAPIPopulationCompositionDataSchema>[],
  labelToKey: Record<Static<typeof ResasAPIPopulationCompositionDataSchema>["label"], S>,
): Record<S, Static<typeof populationDataByYearSchema>[]> => {
  return Object.fromEntries(
    resasPopulationCompositionsList.map(populationComposition => {
      return [
        labelToKey[populationComposition.label],
        populationComposition.data.map(data => {
          return {
            year: data.year,
            value: data.value,
          };
        }),
      ];
    }),
  ) as Record<S, Static<typeof populationDataByYearSchema>[]>;
};

export { convertPopulationCompositionObjFromResasPopulationCompositionList };
