<template>
  <div class="container">
    <div class="header"> {{ $t('contactMe')}}</div>
    <form
      id="form"
      :ref="'form'"
      class="container d-flex justify-content-center align-items-center"
    >
      <div class="form-group">
        <label
          for="from_name"
          class="d-block"
        >
          <user-icon
            :width="20"
            :height="20"
            class="icon"
          />
        </label>
        <input
          id="from_name"
          v-model="name"
          class="form-styles form-styles-lg thick"
          type="text"
          name="from_name"
          :placeholder="$t('name')"
        >
      </div>
      <div class="form-group">
        <label
          for="email"
          class="d-block"
        >
          <mail-icon
            :width="20"
            :height="20"
            class="icon"
          /></label>
        <input
          id="email"
          v-model="email"
          class="form-styles thick"
          type="email"
          name="reply_to"
          :placeholder="$t('email')"
        >
      </div>
      <div class="form-group message">
        <textarea
          v-model="message"
          class="form-styles message"
          name="message"
          cols="30"
          rows="7"
          :placeholder="$t('message')"
        />
      </div>

      <button
        type="button"
        @click="sendEmail"
      >
        Send
      </button>
    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import UserIcon from '../assets/person_ico'
import MailIcon from '../assets/mail'
import {EventBus} from "../main";
init("user_jFHRe62nkzTevWEmjtjml");


export default {
  name: "EmailFormContact",
  components:{
    UserIcon,
    MailIcon
  },
  data(){
    return{
      email: '',
      name: '',
      message:'',
    }
  },
  methods:{

    sendEmail(e) {
      if(this.name && this.message && this.email) {
        try {
          emailjs.sendForm('service_7tpkd37', 'template_1qw4kkm', document.getElementById('form'),
              'user_jFHRe62nkzTevWEmjtjml', {
                from_name: this.name,
                to_name: 'Oskar',
                reply_to: this.email,
                message: this.message
              })

        } catch (error) {
          console.log({error})
          EventBus.$emit('new-info-bar', {message: this.$t('sendingEmailFailed')})

        }
        // Reset form field
        this.name = ''
        this.email = ''
        this.message = ''

        EventBus.$emit('new-info-bar', {message: this.$t('emailSentSuccessfully')})
      }else{
        EventBus.$emit('new-info-bar', {message: this.$t('fieldsCannotBeEmpty')})

      }
    },
  }
}
</script>

<style scoped lang="scss">

.container {
  border-radius: 70px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 700px){

    width: calc(100% - 40px);
  }
}
form.container{
  display: flex;
  flex-direction: column;
  width: 75%;
  @media screen and (max-width: 700px){

    width: calc(100% - 40px);
  }
  ::placeholder{
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    color: #838788;
  }
}

label {
  float: left;
}
.d-block {
  position: absolute;
  .icon{
    color: #57565c;
    height: 1.3rem;
    position: absolute;
    left: 1.5rem;
    top: 1.1rem;
  }
}
.form-group{
  margin: 10px 0;
  width: 100%;
}
.form-styles{
  background-color: #f2f6f8;
  border-radius: 2rem;
  border: none;
  width: 75%;
  box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.11);

  @media screen and (max-width: 700px){

    width: fit-content;
  }
  &.thick {
    height: 2.3rem;
    padding: .5rem 3.5rem;

  }
  input,
  textarea {
    font-family: 'Raleway', sans-serif;
    color: #212529;
    font-size: 1.1rem;
  }
  &:focus {
    background-color: #f2f6f8;
    border: none;
    box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.11);
  }
  &.message{
    resize: vertical;
    padding: .5rem 1.8rem;
  }
}
.header{
  font-family: 'Corinthia', cursive;
font-size: 40px;
  font-weight: bold;
}

button {
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  width: 50%;
  align-self: center;
  box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.11);
}

button:hover {
  background-color: #9dc5c3;
  background-image: linear-gradient(315deg, #696969 0%, #7D7D7D  74%);
}
</style>