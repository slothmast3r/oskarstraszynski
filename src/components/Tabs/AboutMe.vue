<template>
  <div>
  {{loremIpsum}}
  </div>
</template>

<script>
import Constants from "../Constants";

export default {
  name: "AboutMe",
  mixins: [Constants],
}
</script>

<style scoped lang="scss">
*{
  font-size: 24px;
  color: white;
}
</style>