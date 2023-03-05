<template>
  <div class="nav-wrapper">
    <nav>
      <div class="left-section">
        <router-link :to="{ name: 'Home' }">
          <img src="@/assets/monogram.svg" alt="monogram" />
        </router-link>

        <div class="menu-icon hidden" @click="toggleMenu">
          <i class="fas fa-bars"></i>
        </div>
      </div>

      <div class="right-section">
        <router-link :to="{ name: 'Education' }"> Education </router-link>
        <router-link :to="{ name: 'Experience' }"> Experience </router-link>
        <router-link :to="{ name: 'About' }"> About </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  setup() {
    const toggleMenu = () => {
      const rightSection = document.querySelector(".right-section");
      rightSection.classList.toggle("flex-row");
    };

    return { toggleMenu };
  },
  created() {
    window.addEventListener("resize", () => {
      const rightSection = document.querySelector(".right-section");
      rightSection.classList.remove("flex-row");
    });
  },
  watch: {
    $route() {
      const rightSection = document.querySelector(".right-section");
      rightSection.classList.remove("flex-row");
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  background-color: #f3f4f5;
  width: 100%;
  height: 100%;

  nav {
    background-color: #f3f4f5;
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    margin: 1rem 2rem;

    .left-section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .menu-icon {
        color: #46434e;

        @media screen and (max-width: 1024px) {
          display: block;
          font-size: 1.8rem;
          cursor: pointer;
        }
      }
    }

    .right-section {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      justify-content: flex-end;

      @media screen and (max-width: 1024px) {
        display: none;
        flex-direction: row;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
      }
    }

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

    .hidden {
      display: none;
    }

    .flex-row {
      display: flex;
      flex-direction: column;
      align-items: center;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      grid-column: 1 / 2;
    }
  }
}
</style>