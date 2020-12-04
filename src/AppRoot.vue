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
/* Q: "Why use custom class-based CSS?" */
/* A: "Fastest loading times, most scalable format over time,
       recommendation of official Vue.js docs, and it is 
       the current dev community/industry-recognized best & standard practice" 
 */
.user-post-text {
  font-style: italic;
}

.user-post-username {
  font-style: normal; 
  font-size: 14px;
}

.avatar {
  height: 60px;
  width: 60px
}
</style>