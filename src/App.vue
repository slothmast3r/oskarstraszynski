<template>
  <div id="app">
    <navigation/>
    <div style="border: 1px solid #2c3e50; background: lightgreen">
      <router-view/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navigation from "./components/Navigation";

export default {
  name: 'App',
  components: {
    Navigation
    // HelloWorld
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
