<template>
  <v-app>
      <TheSystemBar />
      <TheNavDrawer />

      <v-main app>
        <router-view/>
      </v-main>

  </v-app>
</template>

<script>
import TheSystemBar from '@/layout/TheSystemBar.vue';
import TheNavDrawer from '@/layout/TheNavDrawer.vue';

export default {
  name: 'AppRoot',

  components: {
    TheSystemBar,
    TheNavDrawer,
  },

  data: () => ({

  }),
  
};
</script>

<style lang="scss">

</style>