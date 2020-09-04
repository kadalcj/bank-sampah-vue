<template>
<div>
    <v-card class="ma-4">
      <Reward/>
    </v-card>
</div>
</template>

<script>
export default {
  components:{
    'Reward' : ()=>import('./Reward/Reward')
  },
  data: () => ({
      
    }),
  computed:{

  },
  methods:{

  },
  mounted(){
   
  }
  


}
</script>

<style>

</style>