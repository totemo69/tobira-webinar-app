const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    localeDetection: false,
  },
  localePath: path.resolve('./src/locales'),
  defaultNS: 'translation',
};
