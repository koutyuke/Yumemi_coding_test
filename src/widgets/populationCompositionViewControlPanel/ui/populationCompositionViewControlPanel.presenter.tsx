import { FC } from "react";
import { PopulationClassSelector } from "@/features/populationClassSelector/ui";
import { PrefectureSelector } from "@/features/prefectureSelector/ui";

type PopulationCompositionViewControlPanelProps = Parameters<typeof PrefectureSelector>[0];

const PopulationCompositionViewControlPanel: FC<PopulationCompositionViewControlPanelProps> = ({ prefectures }) => {
  return (
    <div className="flex h-fit w-full flex-col gap-4 rounded-lg bg-sand-2 p-6 shadow-lg outline outline-sand-6">
      <PopulationClassSelector />
      <PrefectureSelector prefectures={prefectures} />
    </div>
  );
};

export { PopulationCompositionViewControlPanel };
