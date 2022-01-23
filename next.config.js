const withPlugins = require('next-compose-plugins')
const { i18n } = require('./next-i18next.config')
const withImages = require('next-images')({
  esModule: true,
  i18n
})
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins([
  [withBundleAnalyzer, withImages],
])