<template>
<div>
    <v-card class="ma-4">
      <v-img
        :src="src"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      >
        <v-card-title>Hello Adm00n, Good {{rightFuckingNow}}</v-card-title>
      </v-img>

      <!-- <v-card-actions>

      </v-card-actions> -->
    </v-card>
</div>
</template>

<script>
export default {
  data: () => ({
      // rightFuckingNow: "",
      // src: 'https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-beautiful-seaside-sunrise-background-design-morningin-the-morningbeautiful-image_65769.jpg',
      // src2: 'https://i.pinimg.com/originals/e4/1a/5d/e41a5dcd3daa01bd4c6c0ca7a30031b3.jpg',
      // src3: 'https://wallup.net/wp-content/uploads/2016/05/02/245267-evening-night-sea-lake-city-reflection-748x421.jpg'
    }),
  computed:{
    rightFuckingNow(){
      var today = new Date();
      var time = today.getHours();
      if(time > 11) return "afternoon";
      if(time < 12) return "morning";
      return "evening";
    },
    src(){
      var today = new Date();
      var time = today.getHours();
      if(time >= 12) return "https://i.pinimg.com/originals/e4/1a/5d/e41a5dcd3daa01bd4c6c0ca7a30031b3.jpg";
      if(time <= 12) return "https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-beautiful-seaside-sunrise-background-design-morningin-the-morningbeautiful-image_65769.jpg";
      return "https://wallup.net/wp-content/uploads/2016/05/02/245267-evening-night-sea-lake-city-reflection-748x421.jpg";
    }

  },
  methods:{

  },
  mounted(){
   
  }
  


}
</script>

<style>

</style>