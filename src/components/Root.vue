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
    async getLoginSessions(){
      console.log("checkpoint Checked");
      var getUserId = localStorage.getItem("userid");
      if(getUserId > 0){
         await this.$router.replace({path: "/dashboard"});
      }else{
         await this.$router.replace({path: "/login"});
      }

  }
  },
  mounted(){
    this.getLoginSessions();
  }

  }
</script>
