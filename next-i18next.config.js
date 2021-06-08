const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['ja', 'en'],
  },
  localePath: path.resolve('./src/locales'),
  defaultNS: 'translation'
};