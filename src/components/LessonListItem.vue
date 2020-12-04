<template>
  <v-list-item
    :lesson="lesson"
    :key="lesson['.key']"
  >
    <router-link :to="{name: 'LessonShow', params: {id: lesson['.key']}}">
      {{ lesson.title }}
    </router-link>
  </v-list-item>
</template>

<script>
export default {
  props: {
    lesson: {
      required: true,
      type: Object
    }
  },
}
</script>

<style>

</style>