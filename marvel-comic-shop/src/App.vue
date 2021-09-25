<template>
<div>
  <Header></Header>
  <Banner />
  <ComicsDisplay />
</div>
</template>

<script>

import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import ComicsDisplay from './components/ComicsDisplay.vue'

export default {
  name: 'App',
  components: {
    Header,
    Banner,
    ComicsDisplay
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
