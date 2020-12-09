<template>
    <v-container
      app
      class="topic-show"
    >
      <div >
        <h1>This is <code>/views/TopicShowPage.vue</code></h1>
          <!-- <TopicLessonContainer :lesson="topicLesson" /> -->
          <!-- <TopicDiscussionContainer :discussion="topicDiscussion" /> -->
  </div>
</v-container>
</template>

<script>
// import TopicDiscussionContainer from '@/components/TopicDiscussionContainer.vue'

export default {
  name: 'TopicShowPage',
  components: {
    // TopicDiscussionContainer
  },
  props: {
    // id: {
    //   type: String,
    //   required: true
    // }
  },
  data() {
    return {
      // topic: this.$store.state.topics[this.id]
    }
  },
  computed: {
    // topicDiscussion: function() {
    //   return Object.values(this.$store.state.discussions)
    //     .filter(discussion => discussion.topicId === this.id)
    // },
    // topicLesson: function() {
    //   return Object.values(this.$store.state.lessons)
    //     .filter(lesson => lesson.topicId === this.id)
    // }
  }
};
</script>