import { FC } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceArea,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { lineStrokeColor } from "../utils/lineStrokeColor";

type PopulationGraphPresenterProps = {
  years: {
    min: number;
    max: number;
    border: number;
  };
  data: {
    year: number;
    [key: string]: number;
  }[];
  prefectures: string[];
};

const PopulationCompositionGraph: FC<PopulationGraphPresenterProps> = ({ years, data, prefectures }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 30, left: 4, bottom: 10 }} width={500} height={500}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--color-sand-8)" />
        <XAxis dataKey="year" stroke="var(--color-sand-11)" unit="年" fontSize={14} />
        <YAxis
          stroke="var(--color-sand-11)"
          unit="万人"
          fontSize={14}
          tickFormatter={value => `${Math.floor(value / 10000)}`}
          domain={["dataMin", "dataMax"]}
        />
        <Tooltip
          contentStyle={{
            color: "var(--color-sand-12)",
            backgroundColor: "var(--color-sand-3)",
            borderColor: "var(--color-sand-6)",
            borderRadius: "6px",
            fontSize: "14px",
          }}
        />
        <Legend />
        {prefectures.map((prefecture, index) => (
          <Line key={prefecture} type="monotone" dataKey={prefecture} stroke={lineStrokeColor(index)} />
        ))}
        <ReferenceArea
          x1={years.min}
          x2={years.border}
          stroke="var(--color-green-8)"
          fill="var(--color-green-8)"
          strokeOpacity={0.15}
          fillOpacity={0.15}
          label={{ value: "実績値", position: "insideTop" }}
        />
        <ReferenceArea
          x1={years.border}
          x2={years.max}
          stroke="var(--color-blue-8)"
          fill="var(--color-blue-8)"
          strokeOpacity={0.15}
          fillOpacity={0.15}
          label={{ value: "予測値", position: "insideTop" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export { PopulationCompositionGraph };
