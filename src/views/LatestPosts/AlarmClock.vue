<template>
  <div class="content-wrapper">
    <secion class="intro">
      <h1>The creation of a physical product</h1>
      <div class="space-top">
        Content still to be added
        <br />
        <br />
        An interesting project involving hardware, electrical engineering, PCB
        design, 3D printing and software.
      </div>
      <img class="space-top" src="@/assets/physical-product.jpg" alt="" />
    </secion>
  </div>
</template>

<script>
export default {
  name: "AlarmClock",
};
</script>

<style lang="scss" scoped>
.content-wrapper {
  width: 65%;
  margin: 50px auto 50px auto;

  @media (max-width: 1024px) {
    width: 90%;
  }

  .content {
    text-align: left;

    p {
      font-size: 1.1rem;
      line-height: 1.6rem;
      font-family: "Montserrat", Helvetica, Arial, sans-serif;
      word-spacing: 0.3rem;
    }
  }

  img {
    width: 100%;
    max-height: 800px;
    object-fit: contain;
  }

  .space-top {
    margin-top: 5%;
  }
}
</style>