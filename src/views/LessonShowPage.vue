<template>
  <div class="lesson-show">
    <h1>This is <code>/views/LessonShowPage.vue</code></h1>
    <v-container>
      <h2>{{ lesson.name }}</h2>
      <p>{{ lesson.description }}</p>
      <LessonDiscussionContainer :discussion="discussion"/>
    </v-container>
  </div>
</template>

<script>
import LessonDiscussionContainer from '@/components/LessonDiscussionContainer.vue'

export default {
  name: 'LessonShowPage',
  components: {
    LessonDiscussionContainer
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      lesson: this.$store.state.lessons[this.id]
    }
  },
  computed: {
    discussion: function() {

      return this.lesson.discussionId

    }
  }
};
</script>