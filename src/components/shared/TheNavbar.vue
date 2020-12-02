<template>
   <v-app-bar
      app
      color="deep-purple accent-2"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vue Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/vue_logo.png')"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
  name: 'TheNavbar',

};
</script>
