const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { i18n } = require('./next-i18next.config');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withTM = require('next-transpile-modules')(['react-timezone-select']);

module.exports = withBundleAnalyzer();
module.exports = withTM({
  webpack5: false,
  i18n,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    config.plugins.push(new CaseSensitivePathsPlugin());

    return config;
  }
});