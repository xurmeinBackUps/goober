<template>

    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/peter_b_parker.jpg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h3 class="">
          {{ quotation }}
        </h3>

       <TestInput />
      </v-col>

     
    </v-row>

</template>

<script>
import TestInput from './TestInput.vue';
import testData from '@/data.json'
console.log(testData)

export default {
  name: 'HelloWorld',

  components: {
    TestInput,
  },

  data: () => ({
    // ...this.testData
  }),

  props: {
    quotation: String
  },

};
</script>
