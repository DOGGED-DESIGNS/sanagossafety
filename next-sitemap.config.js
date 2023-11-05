const siteUrl = "https://www.bencodelightlimited.com.ng/";
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/home" },
      { userAgent: "*", disallow: "/login" },
      { userAgent: "*", allow: "/" },
    ],
  },
};
