<template>

   <div>
     <SpiderManCard quote="There's always a bypass a key, a virus key, a who-cares key; I can never remember, so I just call it a 'goober.' -- Peter B. Parker, Earth-616"/>
        <LessonList :lessons="lessons"/>




       <TestInput />

     
    </div>

</template>

<script>
import SpiderManCard from '@/layout/SpiderManCard'
import LessonList from './LessonList.vue';
import TestInput from './TestInput.vue';

export default {
  name: 'HelloWorld',

  components: {
    TestInput,
    LessonList
  },

  data () {
    return {
      lessons: Object.values(this.$store.state.lessons),
    // messages: Object.values(this.$store.state.messages),
    // users: Object.values(this.$store.state.categories)
    }
  },



};
</script>
