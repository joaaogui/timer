<template>
  <v-app>
    <v-content>
      <Timer/>
    </v-content>
  </v-app>
</template>

<script>
import Timer from './components/Timer';

export default {
  name: 'App',
  components: {
    Timer,
  },
};
</script>
