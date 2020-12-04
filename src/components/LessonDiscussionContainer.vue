<template>
  <div class="discussion-list">
    <h4 class="list-title">Discussion</h4>
    <MessageList :messages="messages" />
  </div>
</template>

<script>
import MessageList from './MessageList.vue'

export default {
  name: 'LessonDiscussionContainer',
  components: {
    MessageList
  },

  data(){
    return {
      messages: Object.values(this.$store.state.messages)
    }
  }
}
</script>

<style>

</style>