<template>
  <div class="education-wrapper">
    <h1>Formal Education</h1>
    <div class="list-element">
      <div class="main-data">
        <h1>Fontys University Of Applied Science</h1>
        <p class="description">ICT & Software Engineering</p>
        <div class="date">09/2017 - 07/2021 (Expected)</div>
      </div>

      <div class="secondary-data">
        <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
        <div>Eindhoven</div>
      </div>
    </div>
    <div class="list-element">
      <div class="main-data">
        <h1>VHSE "John Atanasoff"</h1>
        <p class="description">Software development</p>
        <div class="date">09/2012 - 05/2017</div>
      </div>

      <div>
        <div>GPA 5.67/6.00</div>
      </div>

      <div class="secondary-data">
        <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
        <div>Sofia</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.education-wrapper {
  width: 80%;
  margin: 100px auto 0 auto;

  .list-element {
    margin: 30px 0;
    border-radius: 5px;
    border-left: 5px solid #ef7d31;
    border-bottom: 1px solid rgba(68, 88, 124, 0.3);
    border-top: 1px solid rgba(68, 88, 124, 0.3);
    border-right: 1px solid rgba(68, 88, 124, 0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.02);
    }

    .main-data {
      text-align: left;

      h1 {
        font-size: 20px;
        margin: 0;
      }

      .description {
        font-size: 18px;
        margin: 10px 0 0 0;
      }

      .date {
        font-size: 12px;
        font-weight: lighter;
        margin: 10px 0 0 0;
      }
    }

    .secondary-data {
      display: flex;

      .icon {
        margin-right: 5px;
      }
    }
  }
}
</style>