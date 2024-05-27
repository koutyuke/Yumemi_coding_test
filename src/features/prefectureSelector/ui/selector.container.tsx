"use client";

import { Static } from "elysia";
import { FC } from "react";
import { useSelectedPrefecturesState } from "@/entities/selectedPrefectures/store";
import { prefectureDataSchema } from "@/server/routes/prefectures/schema";
import { PrefectureSelector as Presenter } from "./selector.presenter";

type PrefectureSelectorProps = {
  prefectures: Static<typeof prefectureDataSchema>[];
};

const PrefectureSelector: FC<PrefectureSelectorProps> = ({ prefectures }) => {
  const { addSelectedPrefectures, removeSelectedPrefectures } = useSelectedPrefecturesState();

  return (
    <Presenter
      prefectures={prefectures}
      onPrefectureSelected={addSelectedPrefectures}
      onPrefectureUnselected={removeSelectedPrefectures}
    />
  );
};

export { PrefectureSelector };
