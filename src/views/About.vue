<template>
  <div class="about-wrapper">
    <section>
      <h1>About me</h1>
      <div>
        I am {{ yearsOld }} years old and I was born in Bulgaria. A few years
        ago I moved to The Netherlands to do my study. I like to travel a lot
        (when possible and safe of course).
      </div>
    </section>

    <section>
      <h1>Favourite music artists</h1>
      <div class="flex-content">
        <div class="list">
          <div>Boro Purvi</div>
          <div>V:RGO</div>
          <div>Travis Scott</div>
          <div>Drake</div>
          <div>Pop Smoke</div>
        </div>
        <div>
          <img src="@/assets/boro-purvi.jpg" alt="" />
        </div>
      </div>
    </section>

    <section>
      <h1>Favourite movies and series</h1>
      <div class="flex-content">
        <div class="list">
          <div>Mission Imposible</div>
          <div>Knifes Out</div>
          <div>Nice Guys</div>
          <div>The Gentlemen</div>
          <div>Anna</div>
          <div>James Bond</div>
          <div>Star Wars</div>
          <div>Harry Potter</div>
          <div>Marvel</div>
        </div>
        <div>
          <img src="@/assets/the-gentlemen.jpg" alt="" />
        </div>
      </div>
    </section>
    <section>
      <h1>Sports</h1>
      <div class="flex-content">
        <div class="list">
          <div>Fitness</div>
          <div>Formula 1</div>
          <div>NFL</div>
          <div>LOL eSports</div>
        </div>
        <div>
          <img src="@/assets/gym.jpg" alt="" />
        </div>
      </div>
    </section>

    <section>
      <h1>Cooking</h1>
      <div class="flex-content">
        <img src="@/assets/pizza.jpg" alt="" />
        <img src="@/assets/meals.jpg" alt="" />
      </div>
    </section>

    <section>
      <h1>Hookah</h1>
      <div class="flex-content">
        <img src="@/assets/shisha-vision.jpg" alt="" />
        <img src="@/assets/shisha-blue.jpg" alt="" />
      </div>
    </section>
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
      var difference = (new Date().getTime() - birthday.getTime()) / 31536000000
      return Math.floor(new Number(difference));
    });

    return {
      yearsOld,
    };
  },
};
</script>

<style lang="scss" scoped>
.about-wrapper {
  width: 80%;
  margin: 100px auto 0 auto;
}

img {
  max-height: 300px;
}

.flex-content {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.list div {
  margin: 10px 15px;
}
</style>