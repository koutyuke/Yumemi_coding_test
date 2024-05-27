import { FC } from "react";
import { Radio } from "@/shared/ui/radio";

type PopulationClassSelectorPresenterProps = {
  onTotalPopulationSelected: () => void;
  onYoungPopulationSelected: () => void;
  onProductivePopulationSelected: () => void;
  onElderlyPopulationSelected: () => void;
};

const PopulationClassSelector: FC<PopulationClassSelectorPresenterProps> = ({
  onElderlyPopulationSelected,
  onProductivePopulationSelected,
  onTotalPopulationSelected,
  onYoungPopulationSelected,
}) => (
  <section className="flex flex-col gap-4">
    <h4 className="flex w-full items-center gap-x-4 text-lg font-semibold text-sand-11 before:h-[2px] before:grow before:rounded-full before:bg-sand-8 before:content-[''] after:h-[2px] after:grow after:rounded-full after:bg-sand-8 after:content-['']">
      人口区分
    </h4>
    <span className="grid w-full grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] gap-2 px-4">
      <Radio
        label="総人口"
        name="PopulationClassSelector"
        value=""
        onClick={onTotalPopulationSelected}
        aria-label="人口区分選択: 総人口"
        defaultChecked
      />
      <Radio
        label="年少人口"
        name="PopulationClassSelector"
        value=""
        onClick={onYoungPopulationSelected}
        aria-label="人口区分選択: 年少人口"
      />
      <Radio
        label="生産年齢人口"
        name="PopulationClassSelector"
        value=""
        onClick={onProductivePopulationSelected}
        aria-label="人口区分選択: 生産年齢人口"
      />
      <Radio
        label="老年人口"
        name="PopulationClassSelector"
        value=""
        onClick={onElderlyPopulationSelected}
        aria-label="人口区分選択: 老年人口"
      />
    </span>
  </section>
);

export { PopulationClassSelector };
