<template>
  <Header></Header>
  
</template>

<script>

import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
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
