<template>
  <div>
    <div class="header-text">
      {{ $t('helloMyNameIs')}}:
    </div>
    <div class="my-name">
      {{ mySignature }}
    </div>
  </div>
</template>
<script>
import Constants from "./Constants";

export default {
  name: "Welcome",
  mixins: [Constants]
}
</script>

<style scoped lang="scss">
.header-text{
  font-family: Corinthia;
  font-size: 32px;
}
.my-name{
  font-family: Babak One;
  font-size: 18px;
}
</style>