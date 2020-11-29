<template>
  <v-app>
   <TheNavbar app />
    <v-main app>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';

export default {
  name: 'App',

  components: {
    TheNavbar,
  },

  data: () => ({
    //
  }),
};
</script>
