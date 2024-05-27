"use client";

import { useQueries } from "@tanstack/react-query";
import { FC } from "react";
import { useSelectedPopClassState } from "@/entities/selectedPopClass/store";
import { useSelectedPrefecturesState } from "@/entities/selectedPrefectures/store";
import { apiEdenFetchClient } from "@/shared/utils/apiEdenFetchClient";
import { PopulationCompositionGraph as Presenter } from "./graph.presenter";

const PopulationCompositionGraph: FC = () => {
  const { selectedPrefectures } = useSelectedPrefecturesState();
  const { selectedPopClass } = useSelectedPopClassState();

  const prefectureNames = selectedPrefectures.map(prefecture => prefecture.prefName);

  const {
    data: populationCompositionData,
    isError: populationCompositionIsError,
    isSuccess: populationCompositionIsSuccess,
    isLoading: populationCompositionIsLoading,
  } = useQueries({
    queries: selectedPrefectures.map(prefecture => ({
      queryKey: ["prefecturePopulationComposition", prefecture.prefCode],
      queryFn: () =>
        apiEdenFetchClient.api
          .prefectures({ prefCode: prefecture.prefCode })
          .population.composition.get()
          .then(({ data }) => (data ? { ...data, ...prefecture } : null)),
    })),
    combine: result => {
      return {
        data: result.map(({ data }) => data),
        isLoading: result.some(({ isLoading }) => isLoading),
        isError: result.some(({ isError }) => isError),
        isSuccess: result.every(({ isSuccess }) => isSuccess),
      };
    },
  });

  if (populationCompositionIsLoading) {
    return <p className="text-center">データを取得中...</p>;
  }

  if (populationCompositionIsError || !populationCompositionIsSuccess) {
    return (
      <p className="text-center">
        データの取得に失敗しました。
        <br />
        時間をおいて再度お試しください。
      </p>
    );
  }

  if (!populationCompositionData.length) {
    return (
      <p className="text-center">
        表示するデータが選択されていません。
        <br />
        都道府県を選択してください。
      </p>
    );
  }

  const boundaryYear = populationCompositionData[0]?.boundaryYear ?? 0;

  const populationCompositionYearRange: { max: number; min: number } = populationCompositionData[0]?.data[
    selectedPopClass
  ].reduce(
    (acc, data) => {
      return {
        max: Math.max(acc.max, data.year),
        min: Math.min(acc.min, data.year),
      };
    },
    { max: 0, min: Infinity },
  ) ?? { max: 0, min: 0 };

  const populationComposition = populationCompositionData.reduce(
    (acc, cur) => {
      if (!cur) {
        return acc;
      }
      const { prefName, data } = cur;
      const currentSelectedComposition = data[selectedPopClass];

      const newResponse = acc.map(({ year, ...other }) => {
        const currentYearData = currentSelectedComposition.find(({ year: dataYear }) => dataYear === year);
        if (!currentYearData) {
          return {
            year,
            ...other,
          };
        }
        return {
          year,
          [prefName]: currentYearData.value,
          ...other,
        };
      });

      currentSelectedComposition.forEach(({ year, value }) => {
        if (!newResponse.find(({ year: dataYear }) => dataYear === year)) {
          newResponse.push({
            year,
            [prefName]: value,
          });
        }
      });

      return newResponse;
    },
    [] as {
      year: number;
      [key: string]: number;
    }[],
  );

  return (
    <Presenter
      years={{
        max: populationCompositionYearRange.max,
        min: populationCompositionYearRange.min,
        border: boundaryYear,
      }}
      prefectures={prefectureNames}
      data={populationComposition}
    />
  );
};

export { PopulationCompositionGraph };
