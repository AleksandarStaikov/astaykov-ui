<template>
  <div class="about-wrapper">
    <section class="about-me">
      <h1>About me</h1>
      <div class="grid-content">
        <div class="box">
          I am {{ yearsOld }} years old and I was born in Bulgaria. A few years
          ago I moved to The Netherlands to do my study, which I have completed
          sucessfully. I have a strong interest and knowledge in .NET and I am
          passionate about WEB 3.0. In recent days I have began a journey to
          learn more about design and UX.
        </div>
        <img src="@/assets/meagain.png" alt="" />
      </div>
    </section>

    <section class="latest-from-me">
      <h1>Latest from me</h1>
      <div class="grid">
        <div class="latest-card" @click="openPost('web3')">
          <img src="@/assets/web3.0.png" />
          <h4>Introduction to Web 3.0</h4>
          <h5>28.05.2022</h5>
        </div>

        <div class="latest-card" @click="openPost('alarm-clock')">
          <img src="@/assets/physical-product.jpg" />
          <h4>The creation of a physical product</h4>
          <h5>06.03.2023</h5>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "About",
  setup() {
    const router = useRouter();
    const yearsOld = computed(function () {
      var birthday = new Date(1998, 12, 22);
      var difference =
        (new Date().getTime() - birthday.getTime()) / 31536000000;
      return Math.floor(new Number(difference));
    });

    const openPost = (postName) => {
      router.push(`/latest/${postName}`);
    };

    return {
      yearsOld,
      openPost,
    };
  },
};
</script>

<style lang="scss" scoped>
.about-wrapper {
  width: 80%;
  margin: 50px auto 0 auto;
}

.about-me .grid-content {
  margin: 3% auto 0 auto;
  display: grid;
  justify-content: space-evenly;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3%;
  min-width: 400;
  max-width: 1200px;
  text-align: left;

  div {
    color: rgba($color: #46434e, $alpha: 1);
    font-size: 1.1rem;
    line-height: 1.5;
    font-weight: 600;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.latest-from-me {
  margin: 70px auto 70px auto;

  .grid {
    margin: 3% auto 0 auto;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3%;
    max-width: 1200px;
    text-align: left;
  }

  .latest-card {
    border-radius: 3%;
    background-color: #ebebee;
    transition: transform 0.5s ease;
    max-width: 500px;

    &:hover {
      transform: scale(1.02);
    }

    img {
      border-radius: 4%;
      width: 90%;
      max-height: 250px;
      margin: 5%;
      background-color: #f3f4f5;
      object-fit: cover;
    }

    h4 {
      margin: 0 0 0 5%;
    }

    h5 {
      margin: 2% 0 5% 5%;
    }
  }
}

.list div {
  margin: 10px 15px;
}
</style>