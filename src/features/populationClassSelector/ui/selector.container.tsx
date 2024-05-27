"use client";

import { FC } from "react";
import { useSelectedPopClassState } from "@/entities/selectedPopClass/store";
import { PopulationClassSelector as Presenter } from "./selector.presenter";

const PopulationClassSelector: FC = () => {
  const {
    setSelectedPopClassElderlyPopulation,
    setSelectedPopClassProductivePopulation,
    setSelectedPopClassTotalPopulation,
    setSelectedPopClassYoungPopulation,
  } = useSelectedPopClassState();

  return (
    <Presenter
      onElderlyPopulationSelected={setSelectedPopClassElderlyPopulation}
      onProductivePopulationSelected={setSelectedPopClassProductivePopulation}
      onTotalPopulationSelected={setSelectedPopClassTotalPopulation}
      onYoungPopulationSelected={setSelectedPopClassYoungPopulation}
    />
  );
};

export { PopulationClassSelector };
