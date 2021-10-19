const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const path = require('path');
const { i18n } = require('./next-i18next.config');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withTM = require('next-transpile-modules')(['react-timezone-select']);
const { withSentryConfig } = require('@sentry/nextjs');

module.exports = withBundleAnalyzer();
const moduleExports = withTM({
  webpack5: false,
  i18n,
  images: {
    domains: [
      'tobira-webinar-dev.s3.ap-northeast-1.amazonaws.com',
      'tobira-webinar-dev.s3.amazonaws.com',
      'tobira-webinar.s3.amazonaws.com',
      'tobira-webinar.s3.ap-northeast-1.amazonaws.com',
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
  async redirects() {
    return [
      {
        source: '/',
        destination: '/webinars/list-webinar',
        permanent: true,
      },
    ];
  },
});

const SentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
