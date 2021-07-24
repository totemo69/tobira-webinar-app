const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const path = require('path');
const { i18n } = require('./next-i18next.config');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withTM = require('next-transpile-modules')(['react-timezone-select']);

module.exports = withBundleAnalyzer();
module.exports = withTM({
  webpack5: false,
  i18n,
  images: {
    domains: [
      'tobira-webinar-dev.s3.ap-northeast-1.amazonaws.com',
      'tobira-webinar-dev.s3.amazonaws.com',
    ],
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.plugins.push(new CaseSensitivePathsPlugin());

    if (!options.isServer && config.mode === 'development') {
      const { I18NextHMRPlugin } = require('i18next-hmr/plugin');
      config.plugins.push(
        new I18NextHMRPlugin({
          localesDir: path.resolve(__dirname, 'src/locales'),
        }),
      );
    }
    return config;
  },
});
