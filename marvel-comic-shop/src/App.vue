<template>
<div>
  <Header></Header>
  <Banner />
</div>
</template>

<script>

import Header from './components/Header.vue'
import Banner from './components/Banner.vue'

export default {
  name: 'App',
  components: {
    Header,
    Banner
  }
}
</script>

<style>
#app {
  @font-face {
    font-family: 'Asap Condensed';
    src: url('https://fonts.googleapis.com/css2?family=Asap+Condensed:wght@400;500;600;700&display=swap');
  }
}
</style>
