<template>
  <v-app>
      <v-container >
        <v-row dense>
            <!-- card1 -->
          <v-col :cols="12" >
            <card1/>
          </v-col>

        <v-col :cols="6" >
            <card2/>           
        </v-col>

        <v-col :cols="6">
            <card3/>           
        </v-col>

        </v-row>
      </v-container>
  </v-app>
</template>

<script>
export default {
    components:{
     'card1':() => import('./card1'),
     'card2':() => import('./card2'),
     'card3':() => import('./card3'),
   },
data: () => ({

  }),

}
</script>

<style>

</style>