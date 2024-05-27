import { useAtom } from "jotai";
import { selectedPopClassAtom } from "../atom/atom";

export const useSelectedPopClassState = () => {
  const [selectedPopClass, setSelectedPopClass] = useAtom(selectedPopClassAtom);

  const setSelectedPopClassTotalPopulation = () => {
    setSelectedPopClass("totalPopulation");
  };

  const setSelectedPopClassYoungPopulation = () => {
    setSelectedPopClass("youngPopulation");
  };

  const setSelectedPopClassProductivePopulation = () => {
    setSelectedPopClass("productivePopulation");
  };

  const setSelectedPopClassElderlyPopulation = () => {
    setSelectedPopClass("elderlyPopulation");
  };

  return {
    selectedPopClass,
    setSelectedPopClassTotalPopulation,
    setSelectedPopClassYoungPopulation,
    setSelectedPopClassProductivePopulation,
    setSelectedPopClassElderlyPopulation,
    setSelectedPopClass,
  };
};
