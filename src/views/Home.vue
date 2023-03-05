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
        </div>
      </div>
      <div class="landing-center">
        <img src="@/assets/me.jpg" alt="" />
      </div>
      <div class="landing-right">
        <div class="intro-text">
          Full-stack (backend-leaning) software engineer with experience in
          building scalable and reliable applications. Also passionate about
          DevOps and WEB 3.0.
        </div>
        <div class="dash-right"></div>
        <div class="lighter-text">
          Are <span>you</span> passionate about something?
          <p>Let's make it happen thogether!</p>
        </div>
        <a href="mailto:aleksandar.staykov.98@gmail.com">Contact me</a>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1zRpbKvHaVqFfR0Mx6qULZIys5yrrbHbS/view"
          >Get my resume</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.home-wrapper {
  width: 80%;
  margin: 100px auto 0 auto;

  .landing {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3%;
    justify-content: space-between;

    .landing-left {
      text-align: left;

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
      @media (min-width: 1025px) {
        grid-column: 2/4;
      }
      @media (max-width: 1024px) {
        grid-column: 1/3;
      }

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
      text-align: left;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      @media (max-width: 1024px) {
        grid-column: 1 / 3;
      }

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
}
</style>
