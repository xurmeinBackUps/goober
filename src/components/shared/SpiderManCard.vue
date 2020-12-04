<template>
  <v-card
    class="mx-auto"
    max-width="50%"
  >

      <v-col cols="12">
        <v-img
          :src="require('@/assets/peter_b_parker.jpg')"
          class="my-3"
          contain
          height="200"
        />

        <v-card-text>{{ quote }}</v-card-text>


      </v-col>
  </v-card>
</template>

<script>
export default {
  name: 'SpiderManCard',
  props: {
    quote: String
  }
}
</script>
