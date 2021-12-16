<template>
  <div class="container">
    <form>
      <label>Name</label>
      <input
        v-model="name"
        type="text"
        name="name"
        placeholder="Your Name"
      >
      <label>Email</label>
      <input
        v-model="email"
        type="email"
        name="email"
        placeholder="Your Email"
      >
      <label>Message</label>
      <textarea
          name="message"
          v-model="message"
          cols="30" rows="5"
          placeholder="Message">
          </textarea>

      <input type="submit" value="Send">
    </form>
  </div>
</template>

<script>
export default {
  name: "EmailFormContact",
  data(){
    return{
      email: '',
      name: '',
      message:'',
    }
  }
}
</script>

<style scoped lang="scss">
.lol{
  .lolo{

  }
}
</style>