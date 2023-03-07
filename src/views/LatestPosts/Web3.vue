<template>
  <div class="content-wrapper">
    <secion class="intro">
      <h1>Introduction to Web 3.0</h1>
      <div class="space-top">
        Recently I made a tech talk at Capgemini about WEB 3.0. The goal of the
        tech talk was to introduce my co-workers to this interesting
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
        <p>
          In WEB 2.0 data is stored on a centralized server, that might be
          replicated on multiple locations, but is still owned/governed by the
          same entity/company. In WEB 3.0, data is stored on decentralized
          networks, such as blockchain, that consist of the above-mentioned
          nodes. Blockchain is a distributed ledger technology that allows
          multiple parties to maintain and synchronize a shared database without
          the need for a central authority. In a blockchain network, data is
          stored in blocks that are linked together in a chain, with each block
          containing a timestamp and a cryptographic hash of the previous block.
          This creates an immutable record of all transactions on the network,
          which is transparent and tamper-resistant. Each node in the network
          has a copy of the entire blockchain, and any changes to the data on
          one node are automatically propagated to all other nodes in the
          network. This creates a highly secure and resilient system that is
          resistant to hacking, fraud, and other forms of malicious activity.
        </p>
        <img src="@/assets/blockchain.png" />
        <p>
          If someone tries to modify a piece of data, for example, a past
          transaction, that would invalidate the entire chain from that link
          onward.
        </p>
        <img src="@/assets/invalid-blockchain.png" />
      </section>

      <section class="space-top">
        <h3>Business logic in WEB 3.0</h3>
        <p>
          The applications written for WEB 3.0 are decentralized, hence the name
          DAPP. The DAPPs are made out of the so-called smart contracts. Smart
          contracts are self-executing programs that run on decentralized
          networks, and are used to automate the execution of business logic in
          Web 3.0 applications. Smart contracts are designed to be transparent,
          secure, and tamper-proof, and can be used to automate a wide range of
          processes, such as the execution of financial transactions, the
          management of supply chains, and the enforcement of digital rights.
          Smart contracts are written in a high-level programming language, such
          as Solidity, and are stored on the blockchain as code. Once deployed,
          a smart contract can be triggered by certain conditions, such as the
          completion of a certain transaction or the reaching of a certain date,
          and will automatically execute the specified logic. Smart contracts
          are executed in a trustless manner, meaning that they do not rely on
          any central authority or intermediary to enforce their rules, but
          rather rely on the consensus of the network to ensure that they are
          executed correctly.
        </p>
        <img src="@/assets/business-logic.png" alt="" />
      </section>

      <section class="space-top">
        <h3>Will WEB 3.0 kill WEB 2.0</h3>
        <p>
          The short answer to that question is NO. They are two fundamentally
          different concepts that have their own pros and cons. This means that
          they have their own use cases and achieve different goals.
        </p>
      </section>

      <section class="space-top">
        <h3>What challenges is WEB 3.0 facing</h3>
        <p>
          Although it has a lot of potential, WEB 3.0 has to tackle a few challenges to truly reach it: 

          <br><br>

          1) Scalability: One of the main challenges facing Web 3.0 is
          scalability, or the ability to handle large volumes of transactions
          and data on a decentralized network. Current blockchain technologies,
          such as Ethereum, are limited in their scalability, which can lead to
          slow transaction times and high fees. In order for Web 3.0 to be
          widely adopted, it will need to overcome these scalability issues and
          provide a fast, efficient, and cost-effective platform for
          decentralized applications.
          <br />
          2) Interoperability: Another challenge facing Web 3.0 is
          interoperability, or the ability for different blockchain networks and
          decentralized applications to communicate and exchange data with each
          other. Interoperability is essential for creating a seamless and
          interconnected internet ecosystem, but it requires standardization and
          collaboration across different projects and protocols.
          <br />
          3) Adoption: The success of Web 3.0 ultimately depends on its adoption
          by users and businesses. While there is growing interest and
          investment in Web 3.0 technologies, it will need to provide tangible
          benefits and use cases that are accessible and user-friendly in order
          to gain widespread adoption.
          <br />
          4) Regulation: As Web 3.0 technologies become more mainstream, there
          will be increasing pressure for regulatory oversight and compliance.
          This could pose a challenge for decentralized networks and
          applications, which are designed to be autonomous and independent of
          central authority. Finding a balance between innovation and regulation
          will be a key issue for the future of Web 3.0.
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Web3",
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