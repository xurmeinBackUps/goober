<template>
  <v-app>
    <v-container>
      <TheNavbar />
      <v-main>
        <router-view/>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';

export default {
  name: 'AppRoot',

  components: {
    TheNavbar,
  },

  data: () => ({

  }),
  
};
</script>

<style lang="scss">
.ks-goober-app {
  contain: content;
}
</style>
