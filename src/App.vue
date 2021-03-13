<template>
  <Nav />

  <router-view />
</template>

<script>
import Nav from '@/components/Nav'

export default {
  name: "App",
  components: {
    Nav
  }
};
</script>

<style lang="scss">

body {
  background-color: #f3f4f5;
}

#app {
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
  
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f3f4f5;
}

</style>
