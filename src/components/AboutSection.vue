<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<template>
  <div id="container">
    <div id="pic">
      <img
        src="https://images.unsplash.com/photo-1541420565422-dd78ab4364ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="About pic"
      />
    </div>
    <div id="align-h1">
      <h1>About</h1>
    </div>
    <div id="align-p">
      <p id="p-header">Functionality, sustainable, timeless</p>
    </div>
    <div id="section-div">
      <section>
        <p>
          Happy Hikers is an online store that sells outdoor clothing and
          equipment. It was founded by a group of hikers who were frustrated
          with the lack of quality gear available. They started small, testing
          and approving each product themselves, but demand grew and the store
          expanded.
        </p>

        <p>
          Their commitment to quality products and customer satisfaction paid
          off, as they quickly gained a reputation for being a reliable and
          trustworthy source for outdoor gear. As their inventory grew, they
          moved from a small garage operation to a proper warehouse space and
          hired a team of passionate hikers and outdoor enthusiasts to help run
          the store.
        </p>

        <p>
          Today, Happy Hikers offers a carefully curated selection of gear and
          apparel for hikers, campers, climbers, and adventurers of all kinds.
          They are dedicated to providing a joyful shopping experience for their
          customers, with fast shipping and top-notch customer service. Whether
          you're a seasoned mountaineer or just starting out on your hiking
          journey, Happy Hikers has everything you need to make your outdoor
          adventures a success.
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped>
  /* section {
    display: block;
  } */

  img {
    max-width: 100%;
  }

  #container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-top: 15%;
  }

  #align-p {
    position: absolute;
    left: 25%;
    padding-bottom: 20%;
  }

  #p-header {
    color: #ffffffdc;
    margin-top: 300px;
    opacity: 0.9;
    font-weight: bold;
    font-size: 3rem;
  }

  #align-h1 {
    position: absolute;
    display: flex;
    top: 25%;
    left: 40%;
  }

  h1 {
    color: #ffffffdc;
    margin-top: 110px;
    opacity: 0.9;
    font-weight: bold;
    font-size: 7rem;
  }
</style>
