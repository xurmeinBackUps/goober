<template>
  <v-app>
      <TheSystemBar />
      <TheNavDrawer />
    <v-container fluid>
      <v-main>
        <router-view/>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import TheSystemBar from '@/components/shared/TheSystemBar.vue';
import TheNavDrawer from '@/components/shared/TheNavDrawer.vue';

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
