<template>
  <div class="home">
    <HelloWorld quotation="There's always a bypass a key, a virus key, a who-cares key... I can never remember so I just call it a 'goober.' -- Peter B. Parker, Earth-616"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'VHome',
  components: {
    HelloWorld,
  },
};
</script>
