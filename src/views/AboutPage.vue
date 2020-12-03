<template>
  <div class="about">
    <OGHelloWorld quotation="There's always a bypass a key, a virus key, a who-cares key; I can never remember, so I just call it a 'goober.' -- Peter B. Parker, Earth-616"/>
  </div>
</template>

<script>
// @ is an alias to /src
import OGHelloWorld from '@/components/OGHelloWorld.vue';

export default {
  name: 'AboutPage',
  components: {
    OGHelloWorld,
  },

};
</script>
