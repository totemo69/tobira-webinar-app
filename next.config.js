const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { i18n } = require('./next-i18next.config');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});


module.exports = withBundleAnalyzer();
module.exports = { 
  i18n,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    config.plugins.push(new CaseSensitivePathsPlugin());

    return config;
  }
};