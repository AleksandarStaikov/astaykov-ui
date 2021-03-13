<template>
  <div class="home-wrapper">
    <div class="landing">
      <div class="landing-left">
        <div>Hi, I am</div>
        <div class="name">
          Aleksandar <br />
          Staykov
        </div>
        <div class="dash"></div>
        <div class="social-links">
          <a href="https://github.com/AleksandarStaikov" target="_blank"
            ><img alt="GitHub" src="../assets/github.png"
          /></a>
          <a
            href="https://www.linkedin.com/in/aleksandar-staykov"
            target="_blank"
            ><img alt="LinkedIn" src="../assets/linkedin.png"
          /></a>
          <a href="https://www.instagram.com/a_staikov/" target="_blank"
            ><img alt="Instagram" src="../assets/instagram.svg"
          /></a>
        </div>
      </div>
      <div class="landing-center">
        <img src="@/assets/me-smiling-clear.png" alt="" />
      </div>
      <div class="landing-right">
        <div class="intro-text">
          Software develoer, passionate about solving difficult IT problems i obicham krasi stoyanov :)
        </div>
        <div class="lighter-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia numquam
          saepe maxime repudiandae! Labore tempora aspernatur minima impedit
          blanditiis.
        </div>
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
      yearsOld,
    };
  },
};
</script>

<style  lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.home-wrapper {
  //border: 1px solid gray;
  width: 80%;
  margin: 100px auto 0 auto;

  .landing {
    display: flex;
    justify-content: space-between;

    .landing-left {
      text-align: left;
      flex: 1;

      div {
        color: #ef7d31;
        font-size: 26px;
      }

      .name {
        margin-top: 35px;
        color: #44587c;
        font-size: 36px;
        font-weight: bolder;
      }

      .dash {
        margin-top: 15px;
        height: 10px;
        width: 35px;
        background-color: #ef7d31;
      }

      .social-links {
        margin-top: 50px;

        img {
          width: 40px;
          margin-right: 20px;
        }
      }
    }

    .landing-center {
      flex: 2;

      img {
        width: 90%;
        margin: 0 auto;
      }
    }

    .landing-right {
      flex: 1;
      text-align: right;

      .intro-text {
        font-weight: bolder;
        font-size: 22px;
        color: #44587c;
        margin-top: 35px;
        line-height: 30px;
      }

      .lighter-text {
        padding-top: 20px;
      }
    }
  }
}

.image__holder {
  height: 100vh;
  width: 100%;
}

@media screen and (max-width: 1400px) and (min-width: 813px) {
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

@media screen and (min-device-width: 375px) and (max-device-width: 812px) {
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
      flex-direction: column-reverse;
      justify-content: space-between;
      color: #a593e0;
      padding: 10px 20px;

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
          height: 200px;
          width: 200px;
          background-size: 100%;
          border-radius: 500px;
        }
      }
    }
  }
}
</style>
