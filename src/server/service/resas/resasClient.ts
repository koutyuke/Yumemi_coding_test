import { ResasAPIPrefecturesResponse } from "./type";

class ResasClient {
  private baseUrl = "https://opendata.resas-portal.go.jp/api/v1";

  constructor(private readonly apiKey: string) {}

  async getPrefectures() {
    const response = await fetch(`${this.baseUrl}/prefectures`, {
      headers: {
        "X-API-KEY": this.apiKey,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch Resas API prefectures.");
    }

    const res = (await response.json()) as ResasAPIPrefecturesResponse;

    if (!res.result) {
      throw new Error("Response does not have result field.");
    }

    return res;
  }
}

export { ResasClient };
