<template>
  <div class="container">
    <form :ref="'form'" id="form">
      <label>Name</label>
      <input
        v-model="name"
        type="text"
        name="from_name"
        placeholder="Your Name"
      >
      <label>Email</label>
      <input
        v-model="email"
        type="email"
        name="reply_to"
        placeholder="Your Email"
      >
      <label>Message</label>
      <textarea
        name="message"
        v-model="message"
        cols="30" rows="5"
        placeholder="Message">
      </textarea>

      <button type="button" @click="sendEmail" >Send</button>
    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_jFHRe62nkzTevWEmjtjml");


export default {
  name: "EmailFormContact",
  data(){
    return{
      email: '',
      name: '',
      message:'',
    }
  },
  methods:{

    sendEmail(e) {
      console.log(this.$refs.form)
      console.log(document.getElementById('form'))
      try {
        emailjs.sendForm('service_7tpkd37', 'template_1qw4kkm',document.getElementById('form'),
            'user_jFHRe62nkzTevWEmjtjml', {
              from_name: this.name,
              to_name: 'Oskar',
              reply_to: this.email,
              message: this.message
            })

      } catch(error) {
        console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>

<style scoped lang="scss">
*{box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>