<template>
  <div class="subject-list-item">

    <h2 class="list-title">
      <router-link :to="{name: 'SubjectShow', params: {id: subject}}">
        {{ subject.name }}
      </router-link>
    </h2>


  </div>
</template>

<script>
// import TopicList from './TopicList.vue'

export default {
  name: 'SubjectListItem',
  components: {
    // TopicList
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      // subject: this.
    }
  },
  computed: {
    // subjectTopics () {
    //   return Object.values(this.$store.state.topics)
    //     .filter(topics => lesson.subjectId === this.subject)
    // }
  }
}
</script>

<style scoped>
</style> 