import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
      },
      theme: {
        themes: {
          light: {
            primary: colors.green.darken1, // #E53935
            secondary: colors.red.lighten4, // #FFCDD2
            accent: colors.indigo.base, // #3F51B5
          },
          dark: {
            primary: colors.red.darken2, // #E53935
            secondary: colors.red.lighten4, // #FFCDD2
            accent: colors.indigo.base, // #3F51B5
          },
        },
      },

});
