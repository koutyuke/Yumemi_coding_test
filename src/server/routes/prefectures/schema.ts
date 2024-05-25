import { t } from "elysia";

export const prefectureDataSchema = t.Object({
  prefCode: t.Number(),
  prefName: t.String(),
});

export const prefecturesRouteResponseSchema = t.Object({
  data: t.Array(prefectureDataSchema),
});
