<template>
  <div id="app">
    <div class="app-wrapper">
      <dashboard/>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";

export default {
  name: 'App',
  components: {
    Dashboard,
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
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-wrapper{
  background: black;
}

</style>
