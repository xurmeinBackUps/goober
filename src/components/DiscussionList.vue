<template>
  <div class="discussion-list">
    <h2 class="list-title">Discussions</h2>
    <DiscussionListItem
      v-for="discussion in discussions"
      :discussion="discussion"
      :key="discussion['.key']"
    />
  </div>
</template>

<script>
import DiscussionListItem from './DiscussionListItem.vue'

export default {
  name: 'DiscussionList',
  components: {
    DiscussionListItem
  },
  props: {
    discussions: {
      required: true,
      type: Array
    }
  }
}
</script>

<style>

</style>