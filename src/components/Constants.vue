<script>
export default {
  data(){
    return{
      navigation: [
        {name: this.$t('home'),key: 'home'},
        {name: this.$t('aboutMe'), key: 'aboutMe'},
        {name: this.$t('contact'), key: 'contact'},
      ],
      mySignature: 'Oskar Straszyński',
    }
  },
}
</script>