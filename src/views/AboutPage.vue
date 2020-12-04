<template>
  <div class="about">
    <SpiderManCard />
    <TestInput />
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import TestInput from '@/layout/TestInput.vue';
import SpiderManCard from '@/layout/SpiderManCard.vue'

export default {
  name: 'AboutPage',
  components: {
    HelloWorld,
    TestInput,
    SpiderManCard
  },
};
</script>
