<template>
  <div class="content-wrapper">
    <secion class="intro">
      <h1>Introduction to Web 3.0</h1>
      <div class="space-top">
        Recently I made a tech talk at Capgemini about WEB 3.0. The goal of the
        tech talk was to introduce my co-workers to this new interesting
        creature. As it was the most attended tach talk they have had in a long
        time, I decided to share this knowledge with more people and post it
        here.
      </div>
      <img class="space-top" src="@/assets/web3.0.png" alt="" />
    </secion>

    <div class="content">
      <section class="space-top">
        <h3>What is WEB 3.0</h3>
        <p>
          Web 3.0 is the next generation of the World Wide Web that aims to
          create a more decentralized, open, and secure internet. Unlike Web
          2.0, which is characterized by centralized platforms and services, Web
          3.0 is built on decentralized networks such as blockchain. This allows
          for more privacy, autonomy, and control for users, as well as greater
          transparency and security. Web 3.0 is also characterized by the use of
          smart contracts, which enable trustless transactions and automated
          enforcement, as well as the tokenization of assets and utilities,
          which creates new possibilities for ownership and exchange. Overall,
          Web 3.0 is expected to transform the way we interact with the internet
          and enable a new era of decentralized innovation and creativity.
        </p>
      </section>

      <section class="space-top">
        <h3>Underlying network and ownership</h3>
        <p>
          The main difference between the underlying networks of Web 2.0 and Web
          3.0 is that Web 2.0 is built on centralized platforms and services,
          while Web 3.0 is built on decentralized networks, such as blockchain.
          In Web 2.0, the ownership of data and content is usually concentrated
          in the hands of a few large corporations (Company A in the example
          below) that control the platforms and services that we use. This
          centralization of ownership leads to a lack of privacy, autonomy, and
          control for users, who are often subject to the terms and conditions
          set by these corporations. In Web 3.0, ownership is more
          decentralized, with users having greater control over their data and
          content. This is enabled by the use of decentralized networks, which
          are designed to be more transparent, secure, and resilient. These
          networks are usually maintained by the community, as everyone can
          contribute by running a node and becoming part of the network
          infrastrucutre. Overall, the shift from Web 2.0 to Web 3.0 represents
          a fundamental change in the way that we think about ownership and
          control on the internet, and has the potential to transform the way
          that we interact with each other and with the digital world.
        </p>
        <img src="@/assets/network-comparison.png" />
      </section>

      <section class="space-top">
        <h3>Storing data in WEB 3.0</h3>
        <p>Still to be added</p>
      </section>

      <section class="space-top">
        <h3>Business logic in WEB 3.0</h3>
        <p>Still to be added</p>
      </section>

      <section class="space-top">
        <h3>Integration between WEB 2.0 and 3.0</h3>
        <p>Still to be added</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Web3'
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
    object-fit: cover;
  }

  .space-top {
    margin-top: 5%;
  }
}
</style>