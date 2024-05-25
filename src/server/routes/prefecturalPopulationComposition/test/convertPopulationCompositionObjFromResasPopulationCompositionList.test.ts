import { describe, test, expect } from "bun:test";
import { Static } from "elysia";
import { populationDataByYearSchema } from "../schema";
import { convertPopulationCompositionObjFromResasPopulationCompositionList } from "../utils/convertPopulationCompositionObjFromResasPopulationCompositionList";
import { ResasAPIPopulationCompositionDataSchema } from "@/server/service/resas/schema";

describe("convertPopulationCompositionObjFromResasPopulationCompositionList", () => {
  test("", () => {
    const executeInput: Static<typeof ResasAPIPopulationCompositionDataSchema>[] = [
      {
        label: "総人口",
        data: [
          {
            year: 2020,
            value: 100,
          },
          {
            year: 2019,
            value: 90,
          },
        ],
      },
      {
        label: "年少人口",
        data: [
          {
            year: 2020,
            value: 10,
          },
          {
            year: 2019,
            value: 9,
          },
        ],
      },
      {
        label: "生産年齢人口",
        data: [
          {
            year: 2020,
            value: 50,
          },
          {
            year: 2019,
            value: 45,
          },
        ],
      },
      {
        label: "老年人口",
        data: [
          {
            year: 2020,
            value: 40,
          },
          {
            year: 2019,
            value: 36,
          },
        ],
      },
    ];

    const labelToKey = {
      総人口: "totalPopulation",
      年少人口: "youngPopulation",
      生産年齢人口: "productivePopulation",
      老年人口: "elderlyPopulation",
    };

    const expectedOutput: Record<
      "totalPopulation" | "youngPopulation" | "productivePopulation" | "elderlyPopulation",
      Static<typeof populationDataByYearSchema>[]
    > = {
      totalPopulation: [
        {
          year: 2020,
          value: 100,
        },
        {
          year: 2019,
          value: 90,
        },
      ],
      youngPopulation: [
        {
          year: 2020,
          value: 10,
        },
        {
          year: 2019,
          value: 9,
        },
      ],
      productivePopulation: [
        {
          year: 2020,
          value: 50,
        },
        {
          year: 2019,
          value: 45,
        },
      ],
      elderlyPopulation: [
        {
          year: 2020,
          value: 40,
        },
        {
          year: 2019,
          value: 36,
        },
      ],
    };
    expect(convertPopulationCompositionObjFromResasPopulationCompositionList(executeInput, labelToKey)).toStrictEqual(
      expectedOutput,
    );
  });
});
