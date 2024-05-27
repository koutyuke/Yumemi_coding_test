import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { PopulationCompositionGraph } from "@/features/populationCompositionGraph/ui";

type PopulationCompositionGraphViewerProps = {
  className?: string;
};

const PopulationCompositionGraphViewer: FC<PopulationCompositionGraphViewerProps> = ({ className }) => {
  return (
    <div
      className={twMerge(
        "flex size-full flex-col items-center justify-center gap-4 rounded-lg bg-sand-2 p-6 shadow-lg outline outline-sand-6",
        className,
      )}
    >
      <PopulationCompositionGraph />
    </div>
  );
};

export { PopulationCompositionGraphViewer };
