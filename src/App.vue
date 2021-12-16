<template>
  <div id="app">
    <div style="background: black">
      <welcome></welcome>
      <navigation/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";

export default {
  name: 'App',
  components: {
    Welcome,
    Navigation
  },
  methods: {
  }
}
</script>

<style>
body {
  margin: 0;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
