<template>
  <div>
    <welcome :ref="'welcome'" />
    <div class="nav-wrapper">
      <navigation
        :ref="'navBar'"
        class="nav-bar"
        :nav-elements="navigation"
      />
    </div>
    <div class="component-wrapper">
      <component
        :is="el.component"
        v-for="el in navigation"
        :key="el.key"
        :ref="'component'"
        class="component"
      />
    </div>
    <button
      :ref="'buttonTopScroll'"
      class="back-to-top-button"
      @click="scrollPageTop"
    >
      <img :src="require('/src/assets/arrow_up_white.png')">
    </button>
  </div>
</template>

<script>
import Welcome from "./Welcome";
import Navigation from "./Navigation";
import Home from "./Tabs/Home";
import Contact from "./Tabs/Contact";
import AboutMe from "./Tabs/AboutMe";
import Constants from "./Constants";
import Work from "./Tabs/Work";

export default {
  name: "Dashboard",
  components:{
    Welcome,
    Navigation,
    Home,
    Contact,
    AboutMe,
    Work,
  },
  mixins: [Constants],
  created() {
    window.addEventListener('scroll',this.scroll)
  },
  mounted() {
    for (let i = 0; i < this.$refs.component.length; i++) {
      this.$refs.component[i].$el.style.height = window.innerHeight+'px'
      if(i === 0) {
        this.navigation[i].scrollPosition = this.$refs.welcome.$el.clientHeight+ 70
        this.navigation[i].height = window.innerHeight
      }else{
        this.navigation[i].scrollPosition = this.navigation[i-1].scrollPosition + window.innerHeight
        this.navigation[i].height = window.innerHeight
      }
    }

  },
  unmounted() {
    window.removeEventListener('scroll',this.scroll)
  },
  methods:{
    scroll(){
      this.showHideButton()
      this.navBarTransition()
      this.navChange()
    },
    navChange(){
      let top = window.pageYOffset
      for (let nav of this.navigation) {
        if(nav.scrollPosition - 10 < top && nav.scrollPosition + nav.height - 10> top){
          if(this.$route.name !== nav.component){
            this.$router.push(nav.key)
          }
        }
      }

    },
    navBarTransition(){
      this.$refs.navBar.$el.style.border = '1px solid white'

      if(window.scrollY > this.$refs.welcome.$el.clientHeight){
        this.$refs.navBar.$el.style.padding = '20px 0'
        this.$refs.navBar.$el.style.position = 'fixed'
        this.$refs.navBar.$el.style.fontSize = '16px'
        this.$refs.navBar.$el.style.width = '100%'
        this.$refs.navBar.$el.style.top = '0px'
      }else if (window.scrollY < this.$refs.welcome.$el.clientHeight){
        this.$refs.navBar.$el.style.padding = '50px 0'
        this.$refs.navBar.$el.style.position = 'relative'
        this.$refs.navBar.$el.style.fontSize = '32px'
        this.$refs.navBar.$el.style.top = '0px'
        this.$refs.navBar.$el.style.width = ''
      }

    },
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
.component-wrapper {
  z-index:0;
  :nth-child(even) {
    /deep/.text {
      color: black;
    }
    &.component-wrapper {
      background: white;
    }
  }
  :nth-child(odd) {
    /deep/.text {
      color: white;
    }
    &.component-wrapper {
      background: black;
    }
  }
}
.nav-wrapper{
  position: relative;
  background: black;
  min-height: 132px;
  .nav-bar{
    font-size: 32px;
    transition: 0.8s;
    border: 1px solid white;
    background: black;
    height: fit-content;
    min-height: 0px;
    padding: 50px;
  }
}
.back-to-top-button {
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
  display: flex;
  justify-content: center;
  align-items: center;
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