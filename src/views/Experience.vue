<template>
  <div class="experience-wrapper">
    <div class="profecional-experience">
      <h1>Profecional experience</h1>
      <div class="experience-item">
        <div class="split">
          <div class="left">
            <h1>Integrace</h1>
            <div>09/2018 - Ongoing</div>
          </div>
          <div class="right">
            <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
            <div>Eindhoven, The Netherlands</div>
          </div>
        </div>
        <div class="description">
          Worked on developing total solutions for online communication and
          online commerce, including ERP integrations, content management
          applications and product information management systems.
        </div>
        <div class="tools">
          <div class="heading">Used tools and technologies</div>
          <div class="badges">
            <div>SQL</div>
            <div>REST API</div>
            <div>C#</div>
            <div>ASP .NET MVC</div>
            <div>Kendo Grids</div>
            <div>SPA</div>
            <div>Java Script</div>
            <div>HTML</div>
            <div>CSS</div>
            <div>Octopus</div>
            <div>TeamCity</div>
            <div>Mercurial</div>
          </div>
        </div>
      </div>
      <div class="experience-item">
        <div class="split">
          <div class="left">
            <h1>Technologica</h1>
            <div>06/2016 - 11/2016</div>
          </div>
          <div class="right">
            <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
            <div>Sofia, Bulgaria</div>
          </div>
        </div>
        <div class="description">
          Worked on database preformance monitorring app
        </div>
        <div class="tools">
          <div class="heading">Used tools and technologies</div>
          <div class="badges">
            <div>SQL</div>
            <div>ASP .NET MVC</div>
            <div>Kendo Grids</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.experience-wrapper {
  width: 80%;
  margin: 100px auto 0 auto;

  .experience-item {
    margin: 30px 0;
    border-radius: 5px;
    border-left: 5px solid #ef7d31;
    border-bottom: 1px solid rgba(68, 88, 124, 0.3);
    border-top: 1px solid rgba(68, 88, 124, 0.3);
    border-right: 1px solid rgba(68, 88, 124, 0.3);
    padding: 20px 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.02);
    }

    .split {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 15px;
      border-bottom: 1px solid rgba(68, 88, 124, 0.3);

      .left {
        text-align: left;

        h1 {
          font-size: 1.7vw;
          margin: 0;
        }

        div {
          font-size: 0.75vw;
          font-weight: lighter;
          margin: 5px 0 0 0;
        }
      }

      .right {
        display: flex;
        font-size: 1vw;

        .icon {
          margin-right: 5px;
        }
      }
    }

    .description {
      margin: 15px;
      font-size: 1vw;
    }

    .tools {
      .heading {
        font-size: 0.8vw;
      }

      .badges div {
        display: inline-block;
        padding: 3px 10px;
        margin: 5px 5px;
        border: 1px solid #ef7d31;
        border-radius: 15px;
        font-size: 0.8vw;
      }
    }
  }
}
</style>