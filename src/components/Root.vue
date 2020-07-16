<template>
   <v-app id="main" :style="{background: $vuetify.theme.themes[theme].background}">

  <!-- Base Navigation-->
    <Base/>

<!-- body -->
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row justify="center" align="center">
          <v-col class="shrink">         
          </v-col>
        </v-row>
      </v-container>
    </v-main>

<!-- Footer -->
    <Footer/>

  </v-app>
</template>

<script>
 export default {
   components:{
     'Base': () => import('./base/Base'),
     'Footer':() => import('./base/Footer'),
   },
   computed:{
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  }

  }
</script>
