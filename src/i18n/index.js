import messages from "./messages";
import VueI18n from "vue-i18n";
import Vue from 'vue'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

export default i18n;