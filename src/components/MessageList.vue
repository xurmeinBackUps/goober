<template>
  <div class="message-list-item">
    <MessageListItem
      v-for="message in messages" 
      :message="message"
      :key="message.publishedAt"
      class="messages"
    />
  </div>
</template>

<script>
import MessageListItem from './MessageListItem.vue';

export default {
  name: 'MessageList',
  components: {
    MessageListItem
  },
  props: {
    messages: {
      type: Array,
      required: true
    }
  }

}
</script>

<style>

</style>