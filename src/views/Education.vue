<template>
  <div class="education-wrapper">
    <div class="formal-education">
      <h1>Formal Education</h1>
      <div class="list-element">
        <div class="main-data">
          <h1>Fontys University Of Applied Science</h1>
          <p class="description">ICT & Software Engineering</p>
          <div class="date">09/2017 - 07/2021 (Expected)</div>
        </div>
        <div class="secondary-data">
          <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
          <div>Eindhoven, The Netherlands</div>
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
          <div>Sofia, Bulgaria</div>
        </div>
      </div>
    </div>
    <div class="certification">
      <h1>Certification</h1>
      <div class="certificate">
        <h1>Exam 98-375 Application Development Fundamentals</h1>
        <span>Microsoft</span>
      </div>
      <div class="certificate">
        <h1>Exam 98-366 Networking Fundamentals</h1>
        <span>Microsoft</span>
      </div>
      <div class="certificate">
        <h1>Exam 98-349 Windows Operating System Fundamentals</h1>
        <span>Microsoft</span>
      </div>
      <div class="certificate">
        <h1>Exam 98-361 Software Development Fundamentals</h1>
        <span>Microsoft</span>
      </div>
      <div class="certificate">
        <h1>Exam 98-364 Database Fundamentals</h1>
        <span>Microsoft</span>
      </div>
    </div>
    <div class="training-and-courses">
      <h1>Training and Courses</h1>
      <div class="course">
        <h1>C# Basic, Advanced and OOD</h1>
        <span>Telerik Academy</span>
      </div>
      <div class="course">
        <h1>HTML & CSS</h1>
        <span>Telerik Academy</span>
      </div>
      <div class="course">
        <h1>Relational databases</h1>
        <span>Telerik Academy</span>
      </div>
      <div class="course">
        <h1>Java Script</h1>
        <span>Telerik Academy</span>
      </div>
      <div class="course">
        <h1>High quality code principles</h1>
        <span>Telerik Academy</span>
      </div>
      <div class="course">
        <h1>Offensive Cybersecurity</h1>
        <span>Fontys University Specialization</span>
      </div>
      <div class="course">
        <h1>Deffensive Cybersecurity</h1>
        <span>Fontys University Specialization</span>
      </div>
      <div class="course">
        <h1>In Depth Vue 3 For Beginners</h1>
        <span>Udemy</span>
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

  .certification {
    .certificate {
      margin: 1rem 0.7rem;
      border-radius: 5px;
      border-left: 5px solid #31efe5;
      border-bottom: 1px solid rgba(68, 88, 124, 0.3);
      border-top: 1px solid rgba(68, 88, 124, 0.3);
      border-right: 1px solid rgba(68, 88, 124, 0.3);
      padding: 20px 40px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      transition: transform 0.5s ease;
      display: inline-block;
      text-align: left;

      &:hover {
        transform: scale(1.03);
      }

      h1 {
        font-size: 1rem;
      }
    }
  }

  .training-and-courses {
    .course {
      margin: 1rem 0.7rem;
      border-radius: 5px;
      border-left: 5px solid #ef31a6;
      border-bottom: 1px solid rgba(68, 88, 124, 0.3);
      border-top: 1px solid rgba(68, 88, 124, 0.3);
      border-right: 1px solid rgba(68, 88, 124, 0.3);
      padding: 20px 40px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      transition: transform 0.5s ease;
      display: inline-block;
      text-align: left;

      &:hover {
        transform: scale(1.03);
      }

      h1 {
        font-size: 1rem;
      }
    }
  }
}
</style>