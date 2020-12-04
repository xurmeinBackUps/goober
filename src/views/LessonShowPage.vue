<template>
  <div class="lesson-show">
    <h1>This is <code>/views/LessonShowPage.vue</code></h1>
    <v-container>
      <h2>{{ lesson.name }}</h2>
      <p>{{ lesson.description }}</p>
      <DiscussionList :discussions="discussions" />
    </v-container>
  </div>
</template>

<script>
import DiscussionList from '@/components/DiscussionList.vue'

export default {
  name: 'LessonShowPage',
  components: {
    DiscussionList
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
    discussions: function() {
      const discussionIds = Object.values(this.lesson.discussions)
      return Object.values(this.$store.state.discussions)
        .filter(discussion => discussionIds.includes(discussion['.key']))
    }
  }
};
</script>