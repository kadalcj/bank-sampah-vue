<template>
<div>
  <v-card class="ma-4">
      <v-img
        :src="src"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      >
        <v-card-title>Card3</v-card-title>
      </v-img>


    </v-card>
</div>
</template>

<script>
export default {
data: () => ({
    src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
  }),

}
</script>

<style>

</style>