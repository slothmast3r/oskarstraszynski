<template>
  <div class="component-wrapper">
    <div class="content-wrapper text">
      <h1>{{ $t('work') }}</h1>
      {{ $t('iVeWorkedForStartupCompany') }}
      <a
        class="link"
        href="https://www.clavo.app"
        @mouseover="(e)=>changeImage('clavo')"
        @mouseleave="(e)=>changeImage(null)"
      > Clavo</a>. {{ $t('currentlyLookingForCoolProjectsToGetInto') }}
    </div>
    <div
      class="content-wrapper my-image"
    >
      <transition name="flip">
        <img
          v-if="!showImage"
          class="icon"
          :src="require('/src/assets/jav2.jpg')"
        >
      </transition>
      <transition name="flip">
        <clavo-logo
          v-if="showImage=== 'clavo'"
          :width="306"
          :height="66"
          class="icon"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import Constants from "../Constants";
import ClavoLogo from "../../assets/clavo_logo";

export default {
  name: "Work",
  components: {ClavoLogo},
  mixins: [Constants],
  data(){
    return{
      showImage: undefined,
    }
  },
  methods:{
    changeImage(input){
      this.showImage = input
    }
  }
}
</script>

<style scoped lang="scss">
a {
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}
.component-wrapper {
  display: flex;
  flex-direction: row;

  .content-wrapper {
    flex-grow: 1;
    flex-basis: 0;

    .link{
      transition:0.4s;
      cursor: pointer;
      &:hover{
        color: darkblue;
      }
    }
    &.text {
      padding: 100px 80px;
      font-size: 24px;
      font-weight: bold;
      text-align: left;
      @media screen and (max-width: 700px) {
        padding: 20px 10px;
      }
    }

    &.my-image {
      display: flex;
      justify-content: center;
      align-items: center;

    }
    .icon{
      background: white;
      position:absolute;
    }
  }
}
.flip-enter-active, .flip-leave-active {
  transition: .5s;
}

.flip-enter, .flip-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: rotateY(180deg);
  opacity: 0;
}
</style>