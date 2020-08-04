<template>
   <v-app id="main" :style="{background: $vuetify.theme.themes[theme].background}">
  <!-- Base Navigation-->

  <router-view></router-view>
  
  </v-app>
</template>

<script>
 export default {
   components:{
   },
   computed:{
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  },

  methods:{
  },
  mounted(){
  }

  }
</script>
