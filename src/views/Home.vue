<template>
  <div class="home__container">
    <div class="grid__container">
      <div class="text__holder">
        <h1>Hello, I am Aleks</h1>
        <p>I am a back-end developer, based in Eindhoven and Sofia</p>
      </div>
      <div class="image__holder">
        <div class="image"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style  lang="scss" scoped>
.image__holder {
  height: 100vh;
  width: 100%;
}

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
    color: white;
    padding: 100px;

    .text__holder{
      font-family: Helvetica, Arial, sans-serif;
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
</style>
