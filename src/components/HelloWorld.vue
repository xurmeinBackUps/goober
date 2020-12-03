<template>

    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/peter_b_parker.jpg')"
          class="my-3"
          contain
          height="200"
        />

        <h3>{{ quotation }}</h3>

        <LessonsList :lessons="lessons"/>
      </v-col>




       <TestInput />

     
    </v-row>

</template>

<script>
import LessonsList from './LessonsList.vue';
import TestInput from './TestInput.vue';
import testData from '@/data.json';

export default {
  name: 'HelloWorld',

  components: {
    TestInput,
    LessonsList
  },

  data: () => ({
    lessons: testData.lessons,
    messages: testData.messages,
    users: testData.users
  }),

  props: {
    quotation: String
  },

};
</script>
