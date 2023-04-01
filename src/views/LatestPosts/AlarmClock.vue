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
      <img
        class="space-top limited"
        src="@/assets/physical-product.jpg"
        alt=""
      />
    </secion>

    <div class="content">
      <section class="space-top">
        <h3>Introduction</h3>
        <p>
          A while ago a few was reading a book about sleep called "Sleep
          Smarter" (10/10 I totally recommend). In there the author describes
          the sleep patterns that we, as humans, have developed over the many
          years of evolution. That of of course was reffering to the circadian
          rhythm.
          <br />
          To summarise, it is good for us when we sleep to be in a completely
          dark environment. And subsequently, when we wake up, it is optimal
          (and easier) if that happens naturally, by the environment getting
          brighter.
          <br />
          Why do I say easier? Well, we have all experienced that unpleasant
          situation, when we up and flick the lights switch, and
          <b>the eyes start burning</b>. That is because they have not yet
          adapted to the increased amount of light that they are receiving. So,
          if we can give them more time to adapt by gradually increasing the
          brightness, voila, problem solved.
          <br />
          So now, something like a lamp can control its color and brightness is
          needed. That lamp should also be able to play some sound (like a
          regular alarm clock). And of course, this had to be done automatically
          under a given schedule. But, now if I am going to have a lamp in the
          room, I also want to be able to control it like a regular lamp,
          completely unrelated to the alarm.
        </p>
      </section>
      <section class="space-top">
        <h3>The initial idea</h3>
        <p>
          Now of course, had I made the google search, I would most likely have
          been able to find an already existing product that matches that lamp
          alarm clock description.
          <br />
          Despite that knowledge, and due to the fact that I had an ESP8266 and
          a 3D printer lying around the house, I decided to create this thing on
          my own.
          <br />
          So, the initial idea was that the ESP will be able to control an LED
          strip, alongside a buzzer and a vibration motor. There would be a few
          buttons for physical control, like turning the alarm off, turning the
          light on and of, and adjusting the brightness. The rest could be
          controlled via an API, as the ESP can connect to the local network and
          host a web server. Besides creating the software for the ESP I would
          also create a UI that will be hosted somewhere and will be able to
          call the API, for a better experience. At the end of the day, no one
          wants to have to open a laptop and send a request via Postman to
          change the color of the bedroom lamps.
        </p>
      </section>
      <section class="space-top">
        <h3>First steps</h3>
        <p>
          Now, I have used Arduino around 5-6 years ago for some simple projects
          like connecting servos and buttons and single LEDs, but I have
          forgotten even that.
          <br />
          Being coutios of that, my first assignement was to familiarize myself with
          the ESP. It had to connect to the WiFi, get the current time using
          NTP, and of course it had to track some initialy hardcoded time of the
          day to be able to trigger a buzzer.
        </p>
      </section>

      <section class="space-top">
        <h3>Hosting the API</h3>
        <p>
          The second step was to get rid of the hardcoded alarms and make it configurable via an API, 
          I wouldn`t want to flash the entire ESP each time I wanted to change my alarm.
        </p>
      </section>

      <section class="space-top">
        <h3>Adding the LED strip</h3>
        <p>

        </p>
      </section>

      <section class="space-top">
        <h3>connecting all the elements together</h3>
        <p>

        </p>
      </section>

      <section class="space-top">
        <h3>Designing and ordering the PCB</h3>
        <p>

        </p>
      </section>

      <section class="space-top">
        <h3>Soldering the components</h3>
        <p>

        </p>
      </section>

      <section class="space-top">
        <h3>Designing and prnting the housing</h3>
        <p>

        </p>
      </section>

      <section class="space-top">
        <h3>End result</h3>
        <p>

        </p>
      </section>
    </div>
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

  .limited {
    max-height: 500px;
  }

  .space-top {
    margin-top: 5%;
  }
}
</style>