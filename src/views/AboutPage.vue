<template>
  <v-container
    app
    class="about"
  >
    <SpiderManCard quote="There's always a bypass a key, a virus key, a who-cares key; I can never remember, so I just call it a 'goober.' -- Peter B. Parker, Earth-616"/>
    <TestInput />
    <HelloWorld />
  </v-container>
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
