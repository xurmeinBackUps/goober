<template>
  <v-app>
   <TheNavbar />
    <v-main>
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
