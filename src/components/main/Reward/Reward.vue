<template>
  <v-app>
      <v-container fluid>
        <v-row justify="center" md="8" xs="4">
            <!-- card1 -->
          <v-col >
            <RewardList/>
          </v-col>

        </v-row>
      </v-container>
  </v-app>
</template>

<script>
// import axios from 'axios';
export default {
    components:{
        'RewardList': () => import('./RewardList')
    },
}
</script>

<style>

</style>