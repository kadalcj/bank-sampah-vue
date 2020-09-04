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
// import axios from 'axios';
 export default {
   components:{
     'Base': () => import('./Base'/* webpackChunkName: "js/chunk-Navigation" */),
     'Footer':() => import('./Footer' /* webpackChunkName: "js/chunk-footer" */),
   },
   
   data: () => ({
    //  listReward: null,
    }),

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
    // async getReward(){
    //   try{
    //         const res = await axios.get('http://bank-sampah-api.herokuapp.com/api/reward').then(response => (this.listReward = response));
    //         console.log(res);
    //       }catch(err){
    //         console.log(err);
    //       }
    // }

  },
  mounted(){
    this.getLoginSessions();
    // this.getReward();
  }

  }
</script>
