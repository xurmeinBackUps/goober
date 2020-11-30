<template>
  <v-row>
    <v-col cols="12">
      <div
        v-for="message in messages"
        :key="message['.key']"
      >
        <p>{{ message.text }}</p>
        <p>{{ message.sender }}</p>
      </div>
      <form @submit.prevent="storeMessage">
          <label>message:</label>
          <textarea v-model="messageText"></textarea>
          <label>sender:</label>
          <span messageSender> {{ messageSender }}</span>
        <hr />
        <button>Submit</button>
      </form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'TestInput',

  data() {
    return {
      messages: [],
      messageText: '',
      messageSender: 'the current user',
    };
  },

  methods: {
    storeMessage: function() {
      this.messages.push({text: this.messageText, sender: this.messageSender});
      this.messageText = '';
    }
  }
};
</script>

<style>

</style>