<template>
  <v-col cols="12">
    <h1>{{ subject.name }}</h1>

    <SubjectListItem :subject="subject" />
  </v-col>
</template>

<script>
import SubjectListItem from '@/components/SubjectListItem.vue'
export default {
  name: 'SubjectShowPage',
  components: {
    SubjectListItem
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    subject: function() {
      return this.$store.state.subjects[this.id]
    }
  }
}
</script>

<style>

</style>