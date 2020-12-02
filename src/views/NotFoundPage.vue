<template>
  <v-row class="text-center">
      <v-card>
      <h1 :class="$style.headingText">
        OH NOES!
      </h1>
      <p :class="$style.statusText">
        You have become lost!
      </p>
      <p :class="$style.policyText">
        Return to the <router-link :to="{ name: 'Home' }">home page</router-link>, and try again.
      </p>
      </v-card>
  </v-row>
</template>

<script>
export default {
  name: 'NotFoundPage',
}
</script>

<style module>
/* demonstrating use & implementation of Vue-based CSS modules  */
.headingText {
  /* using camel case for more javascript-ey access to Vue $style object */
  font-size: 48px;
  color: red;
}

.statusText {
  font-size: 28px;
  font-style: italic;
  color: skyblue;
}

.policyText {
  font-size: 18px;
}

</style>