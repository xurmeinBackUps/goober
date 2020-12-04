<template>
  <div class="discussion section">

    <div>
      <h4 class="center-align truncate">
        <router-link :to="{ name: 'DiscussionShow', params: { id: discussion['.key'] } }">
          {{ discussion.title }}
        </router-link>
      </h4>
      <p class="text-faded text-xsmall">
        By <a href="#">{{ user.name }}</a>
      </p>
    </div>

    <div class="activity valign-wrapper">
      <p class="replies-count left">
        <span
          class="new badge"
          data-badge-caption="Replies"
        >{{ repliesCount }}</span>
      </p>

   
    </div>
  </div>
</template>

<script>

export default {
  name: 'DiscussionListItem',
  components: {

  },
  props: {
    discussion: {
      type: Object,
      required: true
    }
  },
  computed: {
    repliesCount: function() {
      return Object.keys(this.discussion.messages).length - 1
    },
    user: function() {
      return this.$store.state.users[this.discussion.userId]
    }
  }
}
</script>

<style>

</style>
