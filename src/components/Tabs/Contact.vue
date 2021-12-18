<template>
  <div class="component-wrapper">

    <email-form-contact/>
  </div>
</template>

<script>
import EmailFormContact from "../EmailFormContact";
export default {
  name: "Contact",
  components: {EmailFormContact}
}
</script>

<style scoped lang="scss">
.component-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>