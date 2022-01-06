/* eslint-disable no-undef */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://meganero.com',
  generateRobotsTxt: true,
  exclude: ['/404', '/500', '/de/400', '/en/400', '/de/500', '/en/500'],
  transform: async (config, path) => {
    return {
      loc: path,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}
