<template>
  <v-list>
    <v-list-item
      v-for="lesson in lessons"
      :lesson="lesson"
      :key="lesson['.key']"
    >{{ lesson.title }}</v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'LessonsList',
  props: {
    lessons: Object
  }

}
</script>

<style>

</style>