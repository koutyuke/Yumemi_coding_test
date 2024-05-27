const colorList = [
  "var(--color-red-9)",
  "var(--color-crimson-9)",
  "var(--color-purple-9)",
  "var(--color-indigo-9)",
  "var(--color-teal-9)",
  "var(--color-grass-9)",
  "var(--color-brown-9)",
  "var(--color-yellow-9)",
  "var(--color-sky-9)",
];

const lineStrokeColor = (index: number) => {
  return colorList[index % colorList.length];
};

export { lineStrokeColor };
