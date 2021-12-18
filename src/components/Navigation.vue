<template>
  <div class="nav-wrapper">
    <span
      v-for="el in navElements"
      :key="el.key"
      class="nav animate-borders"
      :class="{bold: el.component === linkName}"
      @click="navigate(el)"
    >
      {{ el.name }}
    </span>
  </div>
</template>

<script>

export default {
  name: "Navigation",
  props:{
    navElements:Array
  },
  data(){
    return{
      linkName: ''
    }
  },
  watch:{
    $route (to,from){
      this.linkName = to.name
    }
  },
  methods:{
    navigate(el){
      window.scroll({top: el.scrollPosition, behavior: 'smooth'})

    }
  }
}
</script>

<style scoped lang="scss">
.nav-wrapper{
  text-align: center;
  .nav{

    &.bold{
      font-weight: bold;
    }
  }
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