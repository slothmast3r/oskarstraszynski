<template>
  <div class="info-bar">
    {{ message }}
  </div>
</template>

<script>
import Constants from "./Constants";

export default {
  props: {
    message: String,
    error: {
      type: Boolean,
      default: false,
    },
    timeout: Number,
  },
  data() {
    return {
      hidden: false,
      timer: undefined,
      defaultTimeout: 5000,
    }
  },
  mounted() {
    const timeout = this.timeout ? this.timeout : this.defaultTimeout
    const _this = this
    this.timer = setTimeout(_this.close, timeout)
  },
  methods: {
    close() {
      clearTimeout(this.timer) // do not throw error if timer === undefined
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="scss">
.info-bar{
  position: fixed;
  z-index: 10;
  left: calc(50% - 200px);
  top: 0;
  width: 400px;
  height: 100px;
  background: #6e6e6e ;
  border: 1px solid white;
  color: white;
  display: flex;
  justify-content: center;
  word-break: break-all;
  align-items: center;
  font-size: 24px;

  @media screen and (max-width: 700px){
    left: 0;
    width: 100%;
  }
}
</style>