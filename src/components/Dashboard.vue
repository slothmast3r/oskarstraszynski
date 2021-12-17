<template>
  <div>
    <welcome></welcome>
    <navigation/>
  </div>
</template>

<script>
import Welcome from "./Welcome";
import Navigation from "./Navigation";

export default {
  name: "Dashboard",
  components:{
    Welcome,
    Navigation
  }
}
</script>

<style scoped>

</style>