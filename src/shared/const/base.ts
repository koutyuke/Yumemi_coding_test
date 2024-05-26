const baseUrl: URL = process.env.VERCEL_URL
  ? new URL(process.env.VERCEL_URL)
  : new URL(`http://localhost:${process.env.PORT}`);

export { baseUrl };
