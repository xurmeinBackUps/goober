<template>
  <div class="valign-wrapper" :message="message">
    <p class="user-message-text">
      <img class="avatar circle" :src="user.avatar" alt="" />
      "{{ message.text }}"
      <label class="user-message-username">
        &#8212; {{ user.name }}
      </label>
      {{ userMessageCount }} messages
    </p>
  </div>
</template>

<script>


export default {
  name: 'MessageListItem',
  components: {

  },
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  computed: {
    user: function() {
      return this.$store.state.users[this.message.userId];
    },
    userMessageCount: function() {
      return Object.keys(this.user.messages).length;
    }
  }
};
</script>
