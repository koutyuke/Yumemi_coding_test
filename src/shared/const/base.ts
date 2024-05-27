const baseUrl = (): URL => {
  if (process.env.NODE_ENV === "production") {
    return new URL("https://resas-app-snowy.vercel.app");
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return new URL(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}`);
  }
  if (process.env.BASE_URL) {
    return new URL(process.env.BASE_URL);
  }

  return new URL(`http://127.0.0.1:${process.env.PORT || 3000}`);
};

export { baseUrl };
