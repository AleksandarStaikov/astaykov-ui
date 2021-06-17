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
        <img src="@/assets/me.jpg" alt="" />
      </div>
      <div class="landing-right">
        <div class="intro-text">
          Back-end developer and DevOps enthusiast based in Eindhoven and Sofia
        </div>
        <div class="dash-right"></div>
        <div class="lighter-text">
          Are <span>you</span> passionate about something?
          <p>Let's make it happen thogether!</p>
        </div>
        <a href="mailto:aleksandar.staykov.98@gmail.com">Contact me</a>
        <a target="_blank" :href="`${publicPath}AleksandarStaykovResume.pdf`">Get my resume</a>
      </div>
    </div>
    <div class="about-me-section">
      <div>About me</div>
      <div class="about-content-wrapper">
        <div class="left">
          <div class="age">
            <img src="@/assets/cake.png" alt="" />
          </div>
          <div class="age">
            <img src="@/assets/bulgaria.png" alt="" />
          </div>
        </div>
        <div class="right">
          <img src="@/assets/person-working.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "Home",
  setup() {
    const yearsOld = computed(function () {
      var birthday = new Date(1998, 12, 22);
      return new Number(
        (new Date().getTime() - birthday.getTime()) / 31536000000
      ).toFixed(0);
    });

    const publicPath = process.env.BASE_URL

    return {
      yearsOld,
      publicPath
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
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
        transition: transform 0.5s ease;
      }
    }

    .landing-center:hover {
      img {
        transform: scale(1.03);
      }
    }

    .landing-right {
      flex: 1;
      text-align: left;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      .intro-text {
        font-weight: bolder;
        font-size: 22px;
        color: #44587c;
        line-height: 30px;
      }

      .dash-right {
        margin-top: 15px;
        height: 5px;
        width: 50px;
        background-color: #ef7d31;
      }

      .lighter-text {
        padding-top: 20px;

        span {
          color: #ef7d31;
          font-weight: bold;
        }
      }

      a {
        border-radius: 10px;
        border: 2px solid #ef7d31;
        background-color: #ef7d31;
        padding: 5px 7px;
        outline: none;
        font-size: 20px;
        cursor: pointer;
        color: #f3f4f5;
        text-decoration: none;
        margin-bottom: 10px;

        &:hover {
          color: #d9e7f5;
        }
      }
    }
  }

  .about-me-section {
    background-color: #46434e;
    border-radius: 30px;
    margin-top: 50px;
    padding-top: 30px;
    color: #f3f4f5;
    display: none;

    div {
      font-size: 24px;
    }

    .about-content-wrapper {
      display: flex;
      margin: 0 auto;
      width: 80%;
      padding: 20px 0;
      justify-content: space-between;

      .left {
        font-weight: bold;

        img {
          height: 100px;
        }
      }

      .right {
        img {
          height: 400px;
        }
      }
    }
  }
}
</style>
