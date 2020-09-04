<template>
  <v-app>
      <v-container fluid>
        <v-row justify="center">
            <!-- card1 -->
          <v-col lg="10">
            <Reward/>
          </v-col>

        </v-row>
      </v-container>
  </v-app>
</template>

<script>
export default {
    components:{
     'Reward':() => import('./Reward/Reward'),
    //  'card2':() => import('./card2'),
    //  'card3':() => import('./card3'),
   },
data: () => ({

  }),

}
</script>

<style>

</style>