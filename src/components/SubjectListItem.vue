<template>
  <div class="lesson-list">

    <h2 class="list-title">
      <router-link :to="{name: 'Subject', params: {subjectId: subject.name}}">
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
        .filter(lesson => lesson.subjectId === this.subject.name)
    }
  }
}
</script>

<style scoped>
</style> 