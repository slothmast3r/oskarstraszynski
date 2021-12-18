<script>
export default {
  data(){
    return{
      navigation: [
        // {name: this.$t('home'), key: 'home',component: 'Home'},
        {name: this.$t('work'), key: 'work', component: 'Work'},
        {name: this.$t('aboutMe'), key: 'aboutMe', component: 'AboutMe'},
        {name: this.$t('contact'), key: 'contact', component: 'Contact'},
      ],
      mySignature: 'Oskar Straszyński',
      loremIpsum: '\n' +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus turpis sed velit lobortis, quis facilisis est scelerisque. Fusce in volutpat orci. Quisque nisl neque, scelerisque quis venenatis maximus, dignissim in felis. Quisque placerat ligula est, vel interdum neque dapibus sed. Sed nec mauris arcu. Etiam et elit sed lectus blandit facilisis vitae sit amet risus. Aliquam eget neque a orci finibus molestie non vel neque. Donec nulla metus, tincidunt eu eros vitae, ornare congue erat. Pellentesque at tortor at ex aliquet condimentum.\n' +
          '\n' +
          'Nulla vehicula, arcu sit amet imperdiet fringilla, sapien metus porta tellus, at commodo urna ipsum eu augue. Nunc sit amet risus ultricies, vulputate dolor ut, cursus tellus. Duis fermentum metus tellus, non pulvinar arcu fringilla id. In ultrices suscipit pretium. Mauris mattis massa eget auctor posuere. Pellentesque convallis, leo eu dapibus congue, urna erat vehicula nunc, nec accumsan ligula sapien eu nisl. Praesent eleifend suscipit odio, id tincidunt nulla blandit cursus. Vestibulum convallis justo vel neque laoreet, ut vulputate libero euismod. Duis laoreet quam justo, at eleifend sapien gravida sed. Etiam id diam cursus, porta justo eget, scelerisque nisi. Morbi aliquet dolor id posuere viverra. Sed a tellus vehicula, molestie nunc tempus, vulputate sapien. Donec vel sem at sapien faucibus auctor at non odio.',
    }
  },
}
</script>