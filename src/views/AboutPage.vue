<template>
  <div class="about">
    <OGHelloWorld />
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
