<template>
  <div class="discussion-list">
    <h4 class="list-title">Discussion</h4>
    <MessageList :messages="messages" />
  </div>
</template>

<script>
import MessageList from './MessageList.vue'

export default {
  name: 'TopicDiscussionContainer',
  components: {
    MessageList
  },
  props: {
    // discussion: {
    //   type: Array,
    //   required: true
    // }
  },
  data(){
    return {
      // messages: Object.values(this.$store.state.messages)
      //   .filter(message => message.discussionId === this.discussion)
    }
  }
}
</script>

<style>

</style>