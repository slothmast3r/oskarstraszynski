<template>
  <div class="nav-wrapper">
    <span
      v-for="el in navigation"
      :key="el.key"
      class="nav animate-borders"
      @click="navigate(el)"
    >
      {{ el.name }}
    </span>
  </div>
</template>

<script>
import Constants from "./Constants";

export default {
  name: "Navigation",
  mixins: [Constants],
  data(){
    return{
      
    }
  },
  methods:{
    navigate(el){
      this.$router.push(el.key)

    }
  }
}
</script>

<style scoped lang="scss">
.nav-wrapper{
  font-family: 'Raleway', sans-serif;
  margin: 0 auto;
  padding: 50px;
  text-align: center;

  span
  {
    color: #FFF;
    text-decoration: none;
    margin: 0 10px;
    padding: 10px 10px;
    position: relative;
    z-index: 0;
    cursor: pointer;
  }
  .animate-borders:before, .animate-borders:after
  {
    position: absolute;
    left: 0px;
    width: 100%;
    height: 2px;
    background: #FFF;
    content: "";
    opacity: 0;
    transition: all 0.3s;
  }

  .animate-borders:before
  {
    top: 0px;
    transform: translateY(10px);
  }

  .animate-borders:after
  {
    bottom: 0px;
    transform: translateY(-10px);
  }

  .animate-borders:hover:before, .animate-borders:hover:after
  {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>