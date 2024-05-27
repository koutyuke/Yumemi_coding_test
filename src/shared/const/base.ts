const baseUrl: URL = process.env.VERCEL_URL
  ? new URL(process.env.VERCEL_URL)
  : new URL(`http://127.0.0.1:${process.env.PORT}`);

export { baseUrl };
