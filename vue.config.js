module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: 'https://bank-sampah-api.herokuapp.com',
}
}