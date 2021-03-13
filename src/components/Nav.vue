<template>
  <div class="nav-wrapper">
    <nav>
      <router-link :to="{ name: 'Home' }">
        <img src="@/assets/monogram2.svg" alt="monogram" />
      </router-link>
      <div class="right-section">
        <router-link :to="{ name: 'Experience' }"> Experience </router-link>
        <router-link :to="{ name: 'About' }"> About </router-link>
        <router-link :to="{ name: 'Contact' }"> Contact </router-link>
        <router-link :to="{ name: 'Education' }"> Education </router-link>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.nav-wrapper {
  background-color: #f3f4f5;
  width: 100%;
  height: 100%;

  nav {
    background-color: #f3f4f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 2rem;

    a {
      align-content: center;
      color: #46434e;
      text-decoration: none;
      padding: 10px 30px;
      font-weight: bold;
      font-size: 20px;

      img {
        height: 50px;
        background-color: #f3f4f5;
      }
    }
  }
}
</style>