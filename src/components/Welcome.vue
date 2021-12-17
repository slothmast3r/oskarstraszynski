<template>
  <div class="content-wrapper">
    <div class="text-wrapper">
      <div class="header-text">
        {{ $t('helloMyNameIs')}}:
      </div>
      <div class="my-name">
        {{ mySignature.toUpperCase() }}
      </div>
    </div>
    <parallax class="parallax" :speedFactor="0.75" :parallax="true"><img class="image" :src="require('/src/assets/j.jpg')"></parallax>
  </div>
</template>
<script>
import Constants from "./Constants";
import Parallax from 'vue-parallaxy'
export default {
  name: "Welcome",
  mixins: [Constants],
  components:{
    Parallax,
  }
}
</script>

<style scoped lang="scss">
.content-wrapper{

  position: relative;
  .parallax{
    z-index: 1;
    .image{
      margin: 60px 0;
      width: 100%;
      background: black;
    }
  }
  .text-wrapper{

    z-index: 2;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .header-text{
       font-family: 'Corinthia', cursive;
       font-size: 40px;
       font-weight: bold;
       color: white;
     }
    .my-name{
      font-family: 'Raleway', sans-serif;
      font-weight: bold;
      font-size: 24px;
      color: white;
    }
  }
}
</style>