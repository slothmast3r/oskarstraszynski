<template>
  <div>
    <welcome />
    <navigation />
    <component
      :is="el.component"
      v-for="el in navigation"
      :key="el.key"
      class="component"
    />
    <button
      :ref="'buttonTopScroll'"
      class="back-to-top-button"
      @click="scrollPageTop"
    ><img :src="require('/src/assets/arrow_up_white.png')"></button>
  </div>
</template>

<script>
import Welcome from "./Welcome";
import Navigation from "./Navigation";
import Home from "./Tabs/Home";
import Contact from "./Tabs/Contact";
import AboutMe from "./Tabs/AboutMe";
import Constants from "./Constants";

export default {
  name: "Dashboard",
  components:{
    Welcome,
    Navigation,
    Home,
    Contact,
    AboutMe,
  },
  mixins: [Constants],
  created() {
    window.addEventListener('scroll',this.showHideButton)
  },
  unmounted() {
    window.removeEventListener('scroll',this.showHideButton)
  },
  methods:{
    showHideButton(){
      let button = this.$refs.buttonTopScroll
      if (window.scrollY > 300) {
        button.classList.add('show')
      } else {
        button.classList.remove('show')
      }
    },
    scrollPageTop(){
      window.scroll({top: 0, behavior: 'smooth'})
    }
  }
}
</script>

<style scoped lang="scss">
.component{
  height: 1000px;
  :nth-of-type(odd){
    background: white;
  }
}
.back-to-top-button {
  display: inline-block;
  background-color: black;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 50px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: background-color .3s,
  opacity .5s, visibility .5s;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
  img{
    width: 38px;
    height: 38px;
  }
}
.back-to-top-button::after {
  //content: "\2191";
  font-family: FontAwesome;
  font-weight: normal;
  font-style: normal;
  font-size: 2em;
  line-height: 50px;
  color: #fff;
}
.back-to-top-button:hover {
  cursor: pointer;
  background-color: #333;
}
.back-to-top-button:active {
  background-color: #555;
}
.back-to-top-button.show {
  opacity: 1;
  visibility: visible;
}

</style>