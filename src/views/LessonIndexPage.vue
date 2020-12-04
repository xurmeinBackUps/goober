<template>
  <v-container app>
    <LessonListItem
      v-for="lesson in lessons"
      :lesson="lesson"
      :key="lesson['.key']"
    />
  </v-container>
</template>

<script>
import LessonListItem from '@/components/LessonListItem.vue'
export default {
  name: 'LessonIndexPage',
  components: {
    LessonListItem
  },

  data: function() {
    return {
      lessons: this.$store.state.lessons
    }
  },

}
</script>

<style>

</style>