const nextConfig = {
  images: {
    domains: ["localhost", "cdn.sanity.io"], // Added "cdn.sanity.io" to the list
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rosedevelopment.org",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
