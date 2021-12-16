<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div style="height: 100px; width: 100px; background: red" @click="pushSomewhere"></div>
    <div style="border: 1px solid #2c3e50; height: 100px; width: 100px; background: lightgreen">
      <router-view/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  methods: {
    pushSomewhere(){
      console.log(this.$route)
      if(this.$route.name === "Bar") {
        this.$router.push('foo')
      }
      else{
        this.$router.push('bar')
      }
    },
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
</style>
