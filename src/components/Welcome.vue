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
    <parallax class="parallax" :parallax="true"><img class="image" :src="require('/src/assets/j.jpg')"></parallax>
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
    .image{
      padding: 10px;
      background: black;
    }
  }
  .text-wrapper{
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
      font-family: 'Babak One', cursive;
      font-size: 24px;
      color: white;
    }
  }
}
</style>