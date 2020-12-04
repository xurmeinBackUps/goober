<template>
  <v-list>
    <LessonListItem  
      v-for="lesson in lessons"
      :lesson="lesson"
      :key="lesson['.key']"
    />
  </v-list>
</template>

<script>

import LessonListItem from './LessonListItem.vue'
export default {
  name: 'LessonList',
  components: {
    LessonListItem

  },
  props: {
    lessons: {
      required: true,
      type: Array
    }
  }

}
</script>

<style>

</style>