<template>
  <div>
    <SubjectListItem
      v-for="subject in subjects"
      :subject="subject"
      :key="subject['.key']"
    />
  </div>
</template>

<script>
import SubjectListItem from './SubjectListItem.vue'

export default {
  name: 'SubjectList',
  components: {
    SubjectListItem
  },
  props: {
    subjects: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
</style>