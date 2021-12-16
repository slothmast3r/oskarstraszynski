<template>
  <div>
    <div
      v-for="el in navigation"
      :key="el.key"
      @click="navigate(el)"
    >
      {{ el.name }}
    </div>
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

<style scoped>

</style>