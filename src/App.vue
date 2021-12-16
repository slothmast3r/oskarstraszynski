<template>
  <div id="app">
    <welcome></welcome>
    <navigation/>
    <router-view/>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav-button{
  padding: 15px;
  border: 1px solid black;
}
</style>
