const package = require('../../package.json');

module.exports = {
  pkv: package.version || 'v1',
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Mid Argyll Rugby',
  siteDescription:
    'Mid Argyll Rugby FC: A community run club for all ages.',
  siteType: 'Club', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Patrick Grey', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: '', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: '', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#f8bf01', //  Manifest: defines the default theme color for the application
  themeBgColor: '#404040', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/men-02.jpg',
    twitterSite: 'https://twitter.com/MidArgyllRFC', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the site
    mastodonProfile: '' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  pagination: {
    itemsPerPage: 20
  },
  menu: {
    closedText: 'Menu'
  }
};
