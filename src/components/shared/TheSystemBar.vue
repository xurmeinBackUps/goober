<template>
   <v-system-bar
      app
      height="fit-content"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vue Logo"
          class="shrink my-1"
          contain
          :src="require('@/assets/xsell_logo.svg')"
          transition="scale-transition"
          width="60"
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
    </v-system-bar>
</template>

<script>
export default {
  name: 'TheSystemBar',

};
</script>
