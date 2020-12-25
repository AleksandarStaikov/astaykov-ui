<template>
  <nav>
    <router-link to="/">
      <div class="navigation__left">Staiski</div>
    </router-link>

    <div class="navigation__center">
      <router-link :to="{ name: 'Home' }">Education and experience</router-link>
      <router-link :to="{ name: 'About' }">Personal projects</router-link>
      <router-link :to="{ name: 'Home' }">Me as a person</router-link>
    </div>

    <div class="navigation__rigth">
      <router-link :to="{ name: 'Home' }">Contact</router-link>
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
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10%;
    background-color: #24252a;

    a {
      text-decoration: none;
      color: white;
    }

    .navigation__logo {
      font-weight: bold;
      font-size: 24px;
    }

    .navigation__center a {
      font-weight: normal;
      padding: 0px 20px;
      color: #62F5E1;
      font-weight: bold;
      
      &:hover{
        color: #22A896;
      }
    }
  }
}
</style>
