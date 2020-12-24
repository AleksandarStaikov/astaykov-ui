<template>
  <nav>
    <router-link to="/">
      <div class="navigation__logo">Staiski</div>
    </router-link>

    <div class="navigation__left">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
      <router-link :to="{ name: 'Home' }">Zdraveiii</router-link>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
  setup() {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 5%;
    background-color: deeppink;
    
    a {
      text-decoration: none;
      color: white;
    }

    .navigation__logo {
      font-weight: bold;
      font-size: 24px;
    }

    .navigation__left a {
      font-weight: normal;
      padding: 0px 10px;
    }
  }
}
</style>
