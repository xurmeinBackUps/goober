<template>
  <v-card
    class="mx-auto"
    width="67%"
  >


        <v-img
          :src="require('@/assets/peter_b_parker.jpg')"
          class="my-3"

        />

        <v-card-title>{{ quote }}</v-card-title>



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
