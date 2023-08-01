const siteUrl = "https://www.sanagossafety.com/";
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/admin/" },
      { userAgent: "*", disallow: "/login" },
      { userAgent: "*", allow: "/" },
    ],
  },
};
