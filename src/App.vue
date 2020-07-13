<template>
  <v-app>
    <v-content>
      <Root/>
    </v-content>
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
