import { FC } from "react";
import { SelectedPrefecture } from "@/entities/selectedPrefectures/atom";
import { Checkbox } from "@/shared/ui/checkbox";

type Props = {
  onPrefectureSelected: (data: SelectedPrefecture) => void;
  onPrefectureUnselected: (data: SelectedPrefecture) => void;
  prefectures: SelectedPrefecture[];
};

const PrefectureSelector: FC<Props> = ({ onPrefectureSelected, onPrefectureUnselected, prefectures }) => {
  return (
    <section className="flex flex-col gap-4">
      <h4 className="flex w-full items-center gap-x-4 text-lg font-semibold text-sand-11 before:h-[2px] before:grow before:rounded-full before:bg-sand-8 before:content-[''] after:h-[2px] after:grow after:rounded-full after:bg-sand-8 after:content-['']">
        都道府県
      </h4>
      <span className="grid w-full grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-2 px-6">
        {prefectures.map(({ prefCode, prefName }) => (
          <Checkbox
            label={prefName}
            key={`PrefectureSelectorCheckBox-${prefCode}`}
            onChecked={() => {
              onPrefectureSelected({ prefCode, prefName });
            }}
            onUnchecked={() => {
              onPrefectureUnselected({ prefCode, prefName });
            }}
            aria-label={`都道府県選択: ${prefName}`}
          />
        ))}
      </span>
    </section>
  );
};

export { PrefectureSelector };
