/** @type {import('next').NextConfig} */
const cspHeader = `
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data:;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
`;
// default-src 'self';
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
  compiler: {
    // removeConsole: {
    //   exclude: process.env.NODE_ENV === "production" ? ["error"] : [],
    // }, // suppress logs on production
    reactRemoveProperties: process.env.NODE_ENV === "production", // remove react properties on production (Included: ^data-test)
  },
  reactStrictMode: true,
  output: "standalone",
};

module.exports = nextConfig;
