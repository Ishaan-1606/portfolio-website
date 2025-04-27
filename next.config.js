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

  distDir: '.next', // Default directory

  // You may want to add experimental flags for better TypeScript integration
  experimental: {
    esmExternals: true, // Make sure ES module externals are supported
  },
});

export default config;
