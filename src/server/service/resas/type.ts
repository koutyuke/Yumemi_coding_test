export type ResasAPIPrefecturePopulationResponse = {
  message: string | null;
  result: {
    boundaryYear: number;
    data: {
      label: "総人口" | "年少人口" | "生産年齢人口" | "老年人口";
      data: {
        year: number;
        value: number;
        rate?: number;
      }[];
    }[];
  };
};

export type ResasAPIPrefecturesResponse = {
  message: string | null;
  result: {
    prefCode: number;
    prefName: string;
  }[];
};
