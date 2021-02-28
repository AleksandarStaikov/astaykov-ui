<template>
  <nav>
    <router-link to="/">
      <div class="navigation__left">Staiksi</div>
    </router-link>

    <div class="navigation__center">
      <router-link :to="{ name: 'Education' }">Education</router-link>
      <router-link :to="{ name: 'Experience' }">Experience</router-link>
      <router-link :to="{ name: 'MyProjects' }">My projects</router-link>
      <router-link :to="{ name: 'GetToKnowMe' }">Me as a person</router-link>
    </div>

    <div class="navigation__rigth">
      <router-link :to="{ name: 'Contact' }">Contact</router-link>
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
  
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  @media screen and (min-width: 813px) {
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

      .navigation__left {
        font-weight: bold;
        font-size: 24px;
        color: violet;
      }

      .navigation__center a {
        font-weight: normal;
        padding: 0px 20px;
        color: #62f5e1;
        font-weight: bold;

        &:hover {
          color: #22a896;
        }
      }

      .navigation__rigth {
        font-size: 18px;
        border: 2px solid white;
        border-radius: 15px;

        a {
          padding: 2px 10px;
          display: inline-block;
        }
      }
    }
  }
}

@media screen and (max-width: 813px) {
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 2%;
    background-color: #24252a;

    a {
      text-decoration: none;
      color: white;
    }

    .navigation__left {
      font-weight: bold;
      font-size: 24px;
      color: violet;
    }

    .navigation__center a {
      font-weight: normal;
      padding: 0px 20px;
      color: #62f5e1;
      font-weight: bold;
      display: none;

      &:hover {
        color: #22a896;
      }
    }

    .navigation__rigth {
      display: none;
      font-size: 18px;
      border: 2px solid white;
      border-radius: 15px;

      a {
        padding: 2px 10px;
        display: inline-block;
      }
    }
  }
}
</style>
