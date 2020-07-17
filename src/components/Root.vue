<template>
   <v-app id="main" :style="{background: $vuetify.theme.themes[theme].background}">
  <!-- Base Navigation-->
  <keep-alive>
      <Base/>
  </keep-alive>

<!-- body -->
    <!-- <v-main>
      <card1/>      
    </v-main> -->

<!-- Footer -->
  <keep-alive>
    <Footer/>
  </keep-alive>
  </v-app>
</template>

<script>
 export default {
   components:{
     'Base': () => import('./base/Base'/* webpackChunkName: "js/chunk-Navigation" */),
     'Footer':() => import('./base/Footer' /* webpackChunkName: "js/chunk-footer" */),
   },
   computed:{
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  }

  }
</script>
