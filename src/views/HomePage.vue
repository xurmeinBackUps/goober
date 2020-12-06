<template>
  <v-container
    app
    class="home"
  >
    <v-row>
    <SpiderManCard quote="There's always a bypass a key, a virus key, a who-cares key; I can never remember, so I just call it a 'goober.' -- Peter B. Parker, Earth-616" />
      <v-col cols="6">
        <SubjectList :subjects="subjects"/>
      </v-col>
      <v-col cols="6">
        <TopicList :topics="topics" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import SpiderManCard from '@/layout/SpiderManCard.vue';
import TopicList from '@/components/TopicList.vue';
import SubjectList from '@/components/SubjectList.vue';

export default {
  name: 'HomePage',
  components: {
    TopicList,
    SubjectList,
    SpiderManCard
  },
  data () {
    return {
      subjects: Object.values(this.$store.state.subjects),
      topics: Object.values(this.$store.state.topics)
    }
  },
};
</script>
