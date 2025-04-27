import WithPWA from "next-pwa";

const withPWA = WithPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: "/",
  sw: "service-worker.js",
});

const config = withPWA({
  reactStrictMode: true,

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },

  // Static export and setting distDir to 'out'
  output: 'export', // Enable static export
  distDir: 'out', // Output to 'out' directory for Netlify
});

export default config;
