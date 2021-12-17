<script>
export default {
  data(){
    return{
      navigation: [
        {name: this.$t('home'), key: 'home',component: 'Home'},
        {name: this.$t('aboutMe'), key: 'aboutMe', component: 'AboutMe'},
        {name: this.$t('contact'), key: 'contact', component: 'Contact'},
      ],
      mySignature: 'Oskar Straszyński',
    }
  },
}
</script>