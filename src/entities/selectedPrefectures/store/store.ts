import { useAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { SelectedPrefecture, selectedPrefecturesAtom } from "../atom";

export const useSelectedPrefecturesState = () => {
  const [selectedPrefectures, setSelectedPrefectures] = useAtom(selectedPrefecturesAtom);
  const resetSelectedPrefectures = useResetAtom(selectedPrefecturesAtom);

  const addSelectedPrefectures = (data: SelectedPrefecture) => {
    setSelectedPrefectures(prev => [...prev, data]);
  };

  const removeSelectedPrefectures = (data: SelectedPrefecture) => {
    setSelectedPrefectures(prev => prev.filter(prefecture => prefecture.prefCode !== data.prefCode));
  };

  return {
    selectedPrefectures,
    setSelectedPrefectures,
    addSelectedPrefectures,
    removeSelectedPrefectures,
    resetSelectedPrefectures,
  };
};
