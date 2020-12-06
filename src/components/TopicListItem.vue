<template>
  <v-list-item
    :topic="topic"
    :key="topic.publishedAt"
  >
    <router-link :to="{name: 'TopicShow', params: {id: topic}}">
      {{ topic.name }}
    </router-link>
  </v-list-item>
</template>

<script>
export default {
  name: 'TopicListItem',
  props: {
    topic: {
      required: true,
      type: Object
    }
  },
}
</script>

<style>

</style>