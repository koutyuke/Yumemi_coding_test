import { atom } from "jotai";

export type SelectedPopClass = "totalPopulation" | "youngPopulation" | "productivePopulation" | "elderlyPopulation";

export const selectedPopClassAtom = atom<SelectedPopClass>("totalPopulation");
