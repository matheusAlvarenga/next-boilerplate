const withImages = require('next-images')
const { i18n } = require('./next-i18next.config')

module.exports = withImages({
  esModule: true,
  i18n
})