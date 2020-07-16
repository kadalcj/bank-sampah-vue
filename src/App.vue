<template>
  <v-app>
    <v-main>
      <Root/>
    </v-main>
  </v-app>
</template>

<script>
import Root from './components/Root';

export default {
  name: 'App',
  components: {
    Root,
  },

  data: () => ({
    //
  }),
};
</script>
