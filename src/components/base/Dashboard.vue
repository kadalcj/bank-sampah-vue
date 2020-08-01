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
     'Base': () => import('./Base'/* webpackChunkName: "js/chunk-Navigation" */),
     'Footer':() => import('./Footer' /* webpackChunkName: "js/chunk-footer" */),
   },
   computed:{
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  },

  methods:{
    async getLoginSessions(){
      console.log("checkpoint Checked");
      var getUserId = localStorage.getItem("userid");
      if(getUserId < 0){
         await this.$router.replace({path: "/login"});
      }
    },

  },
  mounted(){
    this.getLoginSessions();
  }

  }
</script>
