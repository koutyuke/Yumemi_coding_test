"use server";

import { FC } from "react";
import { apiEdenFetchClient } from "@/shared/utils/apiEdenFetchClient";
import { PopulationCompositionViewControlPanel as Presenter } from "./populationCompositionViewControlPanel.presenter";

const PopulationCompositionViewControlPanel: FC = async () => {
  const { data, error } = await apiEdenFetchClient.api.prefectures.get();

  if (error || !data) {
    return <div>error</div>;
  }

  return <Presenter prefectures={data.data} />;
};

export { PopulationCompositionViewControlPanel };
