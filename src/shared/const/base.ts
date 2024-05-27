const baseUrl = (): URL => {
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  if (process.env.BASE_URL) {
    return new URL(process.env.BASE_URL);
  }
  return new URL("http://localhost:3000");
};

export { baseUrl };
