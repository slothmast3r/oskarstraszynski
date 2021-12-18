<template>
  <div id="app">
    <div class="app-wrapper">
      <transition-group name="fade">
        <info-bar
          v-for="(bar, index) in messages"
          :key="bar.id"
          :message="bar.message"
          :timeout="bar.timeout"
          :style="{
            top: 105 * index+'px'
          }"
          @close="removeInfoBarInput(bar)"
        />
      </transition-group>
      <dashboard />
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";
import InfoBar from "./components/InfoBar";
import {EventBus} from "./main";

export default {
  name: 'App',
  components: {
    InfoBar,
    Dashboard,
  },
  data(){
    return{
      messages:[],
      lastId: 0,
    }
  },
  created() {
    EventBus.$on('new-info-bar', input => {

      input.id = this.lastId++
      this.messages.push(input)
    })
  },
  methods: {
    removeInfoBarInput(arg) {
      this.messages = this.messages.filter(v => v.id !== arg.id)
    },
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
