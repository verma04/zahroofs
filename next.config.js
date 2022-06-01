const path = require("path");

module.exports = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
  siteUrl: 'https://zahroofvalves.com/',
  generateRobotsTxt: true,



  images: {
    domains: ["res.cloudinary.com"],
    loader: "imgix",
    path: "",
    deviceSizes: [600, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    minimumCacheTTL: 60,
  },
  disableStaticImages: true,
};