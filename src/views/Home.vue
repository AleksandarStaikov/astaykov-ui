<template>
  <div class="home__container">
    <div class="grid__container">
      <div class="text__holder">
        <h1>Hello, I am <span>Aleksandar Staykov</span></h1>
        <p>
          I am an enthusiastic developer, specializing primarily in back-end
          development, but not limited to it. I am {{ yearsOld }} years old and
          I am based in Eindhoven and Sofia
        </p>
        <div class="social__links">
         <a href="https://github.com/AleksandarStaikov" target="_blank"><img alt="GitHub" src="../assets/github.png"></a>
         <a href="https://www.linkedin.com/in/aleksandar-staykov" target="_blank"><img alt="LinkedIn" src="../assets/linkedin.png"></a>
         <a href="https://www.instagram.com/a_staikov/" target="_blank"><img alt="Instagram" src="../assets/instagram.svg"></a>
        </div>
      </div>
      <div class="image__holder">
        <div class="image"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "Home",
  components: {},
  setup() {

    const yearsOld = computed(function () {
      var birthday = new Date(1998, 12, 22);
      return new Number(
        (new Date().getTime() - birthday.getTime()) / 31536000000
      ).toFixed(0);
    });

    return {
      yearsOld
    };
  },
};
</script>

<style  lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.image__holder {
  height: 100vh;
  width: 100%;
}

@media screen and (max-width: 1400px) {
  .home__container {
    background-image: url("../assets/background.jpg");
    /* Full height */
    height: 100vh;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .grid__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #a593e0;
      padding: 50px 100px;

      .text__holder {
        text-align: left;

        h1 {
          span {
            color: violet;
          }
        }

        p {
          font-family: "Montserrat", Helvetica, Arial, sans-serif;
          font-size: 20px;
          font-weight: bold;
          display: inline-block;
          width: 70%;
        }
        
        .social__links img {
          height: 50px;
          width: 50px;
          margin: 0 15px 0 0;
        }
      }

      .image__holder {
        height: unset;
        width: unset;

        .image {
          background-image: url("../assets/IMG_9664 (3).jpg");
          height: 400px;
          width: 400px;
          background-size: 100%;
          border-radius: 500px;
        }
      }
    }
  }
}

@media screen and (max-width: 1920px) and (min-width: 1401px) {
  .home__container {
    background-image: url("../assets/background.jpg");
    /* Full height */
    height: 100vh;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .grid__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #a593e0;
      padding: 100px 200px;

      .text__holder {
        font-family: "Montserrat", Helvetica, Arial, sans-serif;
        text-align: left;

        h1 {
          span {
            color: violet;
          }
        }

        p {
          font-size: 20px;
          font-weight: bold;
          display: inline-block;
          width: 50%;
        }

        .social__links img {
          height: 50px;
          width: 50px;
          margin: 0 15px 0 0;
        }
      }

      .image__holder {
        height: unset;
        width: unset;

        .image {
          background-image: url("../assets/IMG_9664 (3).jpg");
          height: 600px;
          width: 600px;
          background-size: 100%;
          border-radius: 500px;
        }
      }
    }
  }
}
</style>
