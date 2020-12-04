<template>
  <div class="lesson-list">

    <h2 class="list-title">
      <router-link :to="{name: 'SubjectShow', params: {id: subject['.key']}}">
        {{ subject.name }}
      </router-link>
    </h2>

    <LessonList :lessons="subjectLessons"/>
  </div>
</template>

<script>
import LessonList from './LessonList'

export default {
  name: 'SubjectListItem',
  components: {
    LessonList
  },
  props: {
    subject: {
      required: true,
      type: Object
    }
  },
  computed: {
    subjectLessons () {
      return Object.values(this.$store.state.lessons)
        .filter(lesson => lesson.subjectId === this.subject['.key'])
    }
  }
}
</script>

<style scoped>
</style> 