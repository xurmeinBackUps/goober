<template>
  <div class="row">
    <div class="row">
      <h1
        class="col s12"
        :class="$style.headingText"
      >OH NOES!</h1>
    </div>
    <p
      class="col s6"
      :class="$style.statusText"
    >You have become lost!</p>
    <p
      class="col s6"
      :class="$style.policyText"
    >Return to the <router-link :to="{ name: 'Home' }">home page</router-link>, and try again.</p>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage',
}
</script>

<style module>
/* demonstrating use +implementation of Vue-based CSS modules  */
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