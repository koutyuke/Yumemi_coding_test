import { Static } from "elysia";
import { atomWithReset } from "jotai/utils";
import { prefectureDataSchema } from "@/server/routes/prefectures/schema";

export type SelectedPrefecture = Static<typeof prefectureDataSchema>;

const selectedPrefecturesAtom = atomWithReset<SelectedPrefecture[]>([]);

export { selectedPrefecturesAtom };
