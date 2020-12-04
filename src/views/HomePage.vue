<template>
  <div class="home">
    <SpiderManCard quote="There's always a bypass a key, a virus key, a who-cares key; I can never remember, so I just call it a 'goober.' -- Peter B. Parker, Earth-616" />
    <SubjectList :subjects="subjects"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SpiderManCard from '@/layout/SpiderManCard.vue'
import SubjectList from '@/components/SubjectList.vue';

export default {
  name: 'HomePage',
  components: {
    SubjectList,
    SpiderManCard
  },
  data () {
    return {
      subjects: Object.values(this.$store.state.subjects),
    }
  },
};
</script>
