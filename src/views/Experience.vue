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
          Working on developing total solutions for online communication and
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
            <div>JavaScript</div>
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
          Working on database preformance monitorring app
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

    <div class="personal-projects">
      <h1>Personal projects</h1>
      <div class="experience-item">
        <div class="split">
          <div class="left">
            <h1>My personal Website</h1>
          </div>
        </div>
        <div class="description">
          Peronal webiste for sharing information about myself and my interests
        </div>
        <div class="tools">
          <div class="heading">Used tools and technologies</div>
          <div class="badges">
            <div>Git</div>
            <div>VUE</div>
            <div>CSS</div>
            <div>HTML</div>
            <div>NPM</div>
            <div>JavaScript</div>
            <div>AWS Amplify</div>
            <div>AWS Route 53</div>
            <div>Go Daddy</div>
          </div>
        </div>
      </div>
      <div class="experience-item">
        <div class="split">
          <div class="left">
            <h1>InteresTag</h1>
            <div>01/2020 - 06/2020</div>
          </div>
        </div>
        <div class="description">
          Event management and networking mobile-first web application
        </div>
        <div class="tools">
          <div class="heading">Used tools and technologies</div>
          <div class="badges">
            <div>Git</div>
            <div>Python</div>
            <div>Django</div>
            <div>Django REST Framework</div>
            <div>JWT Security</div>
            <div>SQL</div>
            <div>Docker</div>
            <div>Rancher</div>
          </div>
        </div>
      </div>
      <div class="experience-item">
        <div class="split">
          <div class="left">
            <h1>Airport luggage simulation</h1>
            <div>01/2019 - 06/2019</div>
          </div>
        </div>
        <div class="description">
          Application built for optimising airport layouts and flight scheduling
        </div>
        <div class="tools">
          <div class="heading">Used tools and technologies</div>
          <div class="badges">
            <div>Git</div>
            <div>C#</div>
          </div>
        </div>
      </div>
      <div class="experience-item">
        <div class="split">
          <div class="left">
            <h1>Web recepies</h1>
            <div>09/2018 - 12/2018</div>
          </div>
        </div>
        <div class="description">
          Django web application for recepie sharing
        </div>
        <div class="tools">
          <div class="heading">Used tools and technologies</div>
          <div class="badges">
            <div>Git</div>
            <div>Python</div>
            <div>Django</div>
            <div>SQL</div>
            <div>Heroku</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.experience-wrapper {
  width: 80%;
  margin: 0 auto;
  
  & > div {
    margin-top: 100px;
  }

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

  .personal-projects .experience-item {
    border-left: 5px solid #31efe5;
  }
}
</style>