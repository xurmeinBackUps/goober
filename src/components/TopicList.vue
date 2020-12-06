<template>
  <v-list>
    <TopicListItem  
      v-for="topic in topics"
      :topic="topic"
      :key="topic.key"
    />
  </v-list>
</template>

<script>
import TopicListItem from './TopicListItem.vue'

export default {
  name: 'TopicList',
  components: {
    TopicListItem

  },
  props: {
    topics: {
      required: true,
      type: Array
    }
  }

}
</script>

<style>

</style>