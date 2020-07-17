<template>
<div>
  <v-card class="ma-4">
      <v-img
        :src="src"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      >
        <v-card-title>Redeem Reward</v-card-title>
      </v-img>

      <!-- <v-card-actions>
        
      </v-card-actions> -->
    </v-card>
</div>
</template>

<script>
export default {
data: () => ({
    src: 'https://static.gosugamers.net/1b/ae/b8/b74946fcd7b15ad71349606fb8c6d32215ed6b5e9409887da24888b7e4.jpg',
  }),

}
</script>

<style>

</style>