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
      <p id="p-header" style="margin-bottom: 700px">
        Functionality, sustainable, timeless
      </p>
    </div>
    <div id="section-div">
      <div id="links-div">
        <ul>
          <li style="border-bottom: 2px solid #ddd">
            <a href="#">Common questions</a>
          </li>
          <li style="border-bottom: 2px solid #ddd">
            <a href="#">Blog</a>
          </li>
          <li style="border-bottom: 2px solid #ddd">
            <a href="#">About us</a>
          </li>
        </ul>
      </div>
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

        <div id="section-2" style="list-style-type: disc">
          <h4 style="font-weight: bold,  padding-bottom: 10px;">
            This is Happy Hikers:
          </h4>
          <!-- <ul> -->
          <li style="font-size: 130%">
            <strong>Develope</strong> timeless, functionality and sustainable
            outdoor products
          </li>

          <li style="font-size: 130%">
            <strong>Act</strong> responsibly towards nature animals and people
          </li>

          <li style="font-size: 130%">
            <strong>Inspire</strong>
            and arouse interest in outdoor life
          </li>
          <!-- </ul> -->
          <div id="line" />
        </div>
      </section>
    </div>

    <div id="align-pic2">
      <img
        style="width: 700px"
        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1013&q=80"
        alt=""
      />
    </div>

    <!-- aside? -->
    <div id="card1" class="card">
      <div class="align-card-txt">
        <h5 style="font-weight: bold">Our responsability</h5>
        <p>Leaving nature in better condition than we found it</p>
        <a href="">Read more</a>
      </div>
      <div class="align-pic">
        <img
          id="img-responsability"
          src="https://images.unsplash.com/photo-1602268806507-0ac045af9c64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          alt="img of a person i responsability text"
        />
      </div>
    </div>
    <!-- aside? -->
    <div class="card">
      <div class="align-pic2">
        <img
          src="https://images.unsplash.com/photo-1594350532402-72001d9fe5a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="img of knitting material"
        />
      </div>
      <div class="align-card-txt2">
        <h5 style="font-weight: bold">Our fabric</h5>
        <p>
          Functional, sustainable, timeless and created based on nature´s own
          terms
        </p>
        <a href="">Read more</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* section {
    display: block;
  } */

  h4,
  li,
  p,
  h5 {
    color: #5c5959;
  }

  h4 {
    padding-top: 20px;
    padding-bottom: 10px;
  }

  p {
    font-size: 20px;
  }

  img {
    max-width: 100%;
  }

  #container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* text-align: center; */
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
    margin-top: 200px;
    opacity: 0.9;
    font-weight: bold;
    font-size: 7rem;
  }

  #section-div {
    padding-top: 3rem;
    display: grid;
    grid-template-columns: 0.5fr 1fr;
  }

  section {
    padding-right: 40px;
  }

  #line {
    margin-top: 50px;
    margin-bottom: 50px;
    border-bottom: 2px solid #ddd;
    width: 750px;
  }

  #align-pic2 {
    margin-left: 35%;
  }

  /* CARD */

  #card1 {
    margin-top: 20px;
  }
  .card {
    /* box-shadow: 0 4px 8px 0 rgba(169, 166, 166, 0.2); */
    transition: 0.3s;
    margin-bottom: 40px;
    max-width: 90%;
    max-height: 90%;
    /* display: flex;
    flex-direction: columns; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 10%;

    border-radius: 0;
    /* border-style: none; */
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  #container {
    display: grid;
    grid-template-rows: 1fr 1fr;
  }

  #img-responsability {
    width: 90%;
    margin-left: 40px;
  }

  .align-card-txt {
    padding-right: 40px;
    padding-left: 40px;
  }
  .align-card-txt2 {
    padding-right: 40px;
    padding-left: 40px;
  }

  /* LINKS */

  ul {
    list-style-type: none;
    padding-left: 50px;
    width: 350px;
  }

  li {
    margin: 1rem;
  }

  a {
    color: #3b3a3a;
    text-decoration: none;
    transition: all 0.35s ease-in-out;
    font-weight: bold;
    font-size: larger;
  }
</style>
