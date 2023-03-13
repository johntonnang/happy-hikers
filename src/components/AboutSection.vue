<script>
  export default {
    data() {
      return {}
    },
    methods: {
      // Opens the longer text when you click on the button in Our respnsibility
      toggleResponsibility() {
        const responsibilityTxt = document.getElementById('responsibility-long')
        const responsabilityButton = document.getElementById(
          'responsibility-button'
        )
        if (responsibilityTxt.style.display === 'none') {
          responsibilityTxt.style.display = 'block'
          // change button text when the longer text appear
          responsabilityButton.innerText = 'Read less'
        } else {
          responsibilityTxt.style.display = 'none'
          responsabilityButton.innerText = 'Read more'
        }
      },
      // Opens the longer text when you click on the button in Our fabric
      toggleFabric() {
        const fabricTxt = document.getElementById('fabric-long')
        const fabricButton = document.getElementById('fabric-button')
        if (fabricTxt.style.display === 'none') {
          fabricTxt.style.display = 'block'
          // change button text when the longer text appear
          fabricButton.innerText = 'Read less'
        } else {
          fabricTxt.style.display = 'none'
          fabricButton.innerText = 'Read more'
        }
      }
    }
  }
</script>
<template>
  <div id="container">
    <div id="pic">
      <img
        id="header-pic"
        src="https://images.unsplash.com/photo-1541420565422-dd78ab4364ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="About pic"
      />
    </div>
    <div id="align-header-text">
      <h1>About</h1>
      <div id="align-p">
        <p id="p-header">Functionality, sustainability, timeless</p>
      </div>
    </div>

    <!-- <div id="align-p">
      <p id="p-header">Functionality, sustainable, timeless</p>
    </div> -->
    <div id="section-div">
      <div id="links-div">
        <ul>
          <li style="border-bottom: 2px solid #ddd">
            <router-link to="/CommonQuestionsView"
              >Common questions</router-link
            >
          </li>
          <li style="border-bottom: 2px solid #ddd">
            <router-link to="/BlogView">Blog</router-link>
          </li>
          <li style="border-bottom: 2px solid #ddd">
            <router-link to="/AboutView">About us</router-link>
          </li>
        </ul>
      </div>
      <section>
        <p class="align-about-txt">
          Happy Hikers is an online store that sells outdoor clothing and
          equipment. It was founded by a group of hikers who were frustrated
          with the lack of quality gear available. They started small, testing
          and approving each product themselves, but demand grew and the store
          expanded. Their commitment to quality products and customer
          satisfaction paid off, as they quickly gained a reputation for being a
          reliable and trustworthy source for outdoor gear. As their inventory
          grew, they moved from a small garage operation to a proper warehouse
          space and hired a team of passionate hikers and outdoor enthusiasts to
          help run the store. Today, Happy Hikers offers a carefully curated
          selection of gear and apparel for hikers, campers, climbers, and
          adventurers of all kinds. They are dedicated to providing a joyful
          shopping experience for their customers, with fast shipping and
          top-notch customer service. Whether you're a seasoned mountaineer or
          just starting out on your hiking journey, Happy Hikers has everything
          you need to make your outdoor adventures a success.
        </p>

        <div id="This-is-happy-hikers-div" style="list-style-type: disc">
          <h4 style="font-weight: bold">This is Happy Hikers:</h4>
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
        </div>
      </section>
    </div>
    <div id="line" />
    <div>
      <img
        id="pic-sustainability"
        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1013&q=80"
        alt=""
      />
    </div>

    <!-- aside? -->
    <div id="card1" class="card">
      <div class="align-card-txt">
        <h5 style="font-weight: bold">Our responsability</h5>
        <p id="responsibility-short">
          Leaving nature in better condition than we found it.
        </p>
        <p id="responsibility-long" style="display: none">
          Happy Hikers is dedicated to promoting responsible behavior in nature.
          One of the key ways in which Happy Hikers does this is by encouraging
          to adopt eco-friendly practices when they're out on the trail. For
          example, the company advocates for Leave No Trace principles, which
          include minimizing campfire impacts, packing out all trash and litter,
          and respecting wildlife. Happy Hikers also organizes volunteer events
          and clean-up efforts to help keep trails and natural areas free from
          litter and pollution. The company partners with local organizations
          and government agencies to promote sustainable practices and protect
          natural resources. In addition, Happy Hikers is committed to reducing
          its own environmental impact. The company uses eco-friendly materials
          in its products whenever possible and strives to minimize waste and
          emissions throughout its operations. By prioritizing responsibility in
          nature, Happy Hikers is setting a positive example for outdoor
          enthusiasts everywhere. Whether you're a seasoned hiker or a beginner
          just getting started, the company's commitment to sustainability and
          stewardship is an inspiration to us all.
        </p>

        <button id="responsibility-button" @click="toggleResponsibility()">
          Read More
        </button>
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
          id="img-our-fabric"
          src="https://images.unsplash.com/photo-1594350532402-72001d9fe5a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="img of knitting material"
        />
      </div>
      <div class="align-card-txt2">
        <h5 style="font-weight: bold">Our fabric</h5>
        <p id="fabric-short">
          Functional, sustainable, timeless and created based on nature´s own
          terms.
        </p>
        <p id="fabric-long" style="display: none">
          Happy Hikers is a company that truly understands the importance of
          sustainable and eco-friendly products. From their hiking gear to their
          clothing, they make sure that all of their products are made from
          sustainable materials, such as recycled plastic bottles, organic
          cotton, and bamboo. Their hiking backpacks are made from recycled
          nylon, which not only reduces waste but also uses fewer resources in
          the manufacturing process. The backpacks are also designed to be
          durable and long-lasting, ensuring that you won't need to replace them
          anytime soon. Happy Hikers' clothing line is also environmentally
          conscious, using organic cotton and bamboo to create comfortable and
          breathable pieces that are perfect for any outdoor adventure. These
          materials are not only sustainable but also help to reduce the amount
          of pesticides and water usage associated with traditional cotton
          farming. In addition to using sustainable materials, Happy Hikers also
          focuses on minimizing their environmental impact during the production
          process. They prioritize ethical manufacturing practices and strive to
          reduce their carbon footprint through sustainable packaging and
          shipping methods. Overall, Happy Hikers is a company that is committed
          to creating sustainable products without sacrificing quality or
          functionality. By choosing Happy Hikers, you can rest assured that you
          are making a positive impact on the environment while still enjoying
          the great outdoors in comfort and style. Regenerate response
        </p>
        <button id="fabric-button" @click="toggleFabric">Read More</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
    padding-top: 15%;
  }

  #p-header {
    color: #ffffffdc;
  }

  h1 {
    color: #ffffffdc;
    margin-top: 200px;
    opacity: 1;
    font-weight: bold;
    /* font-size: 7rem; */
  }

  #pic {
    margin-bottom: 0;
  }

  #line {
    margin-top: 0;
    margin-bottom: 50px;
    border-bottom: 2px solid #ddd;
  }

  #img-our-fabric,
  #img-responsability {
    width: 100%;
    height: 100%;
  }

  #pic-sustainability {
    width: 90%;
    margin-left: 5%;
  }

  /* CARD */

  #card1 {
    margin-top: 20px;
  }
  .card {
    transition: 0.3s;
    margin-bottom: 40px;

    margin-left: 5%;

    border-radius: 0;
    border-style: none;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .align-card-txt {
    margin-top: 30px;
    margin-left: 10%;
    margin-right: 15%;
  }

  .align-card-txt2 {
    margin-top: 30px;
    margin-left: 10%;
    margin-right: 10%;
  }

  h5 {
    font-size: 35px;
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

  /* BUTTON */

  button {
    background-color: white;
    color: #5c5959;
    border: none;
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 20px;
  }

  @media (min-width: 1501px) and (max-width: 2000px) {
    #align-header-text {
      position: absolute;
      display: flex;
      top: 50%;
      left: 33%;
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    #p-header {
      opacity: 1;
      font-weight: bold;
      font-size: 2rem;
    }

    h1 {
      color: #ffffffdc;
      margin-top: 20%;
      opacity: 1;
      font-weight: bold;
      font-size: 5rem;
    }

    #section-div {
      padding-top: 3rem;
      display: grid;
      grid-template-columns: 0.5fr 1fr;
    }

    section {
      padding-right: 40px;
    }

    #links-div {
      padding-right: 30px;
    }

    #line {
      border-bottom: 2px solid #ddd;
      width: 90%;
      margin-left: 75px;
    }

    /* CARD */

    #card1 {
      margin-top: 20px;
    }
    .card {
      transition: 0.3s;
      margin-bottom: 40px;
      max-width: 90%;
      max-height: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      border-radius: 0;
    }
  }

  @media (min-width: 1401px) and (max-width: 1500px) {
    #align-header-text {
      position: absolute;
      display: flex;
      top: 40%;
      left: 30%;
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    #p-header {
      opacity: 1;
      font-weight: bold;
      font-size: 2rem;
    }

    h1 {
      color: #ffffffdc;
      margin-top: 20%;
      opacity: 1;
      font-weight: bold;
      font-size: 5rem;
    }

    #section-div {
      padding-top: 3rem;
      display: grid;
      grid-template-columns: 0.5fr 1fr;
    }

    section {
      padding-right: 40px;
    }

    #links-div {
      padding-right: 30px;
    }

    #line {
      border-bottom: 2px solid #ddd;
      width: 90%;
      margin-left: 65px;
    }

    /* CARD */

    #card1 {
      margin-top: 20px;
    }
    .card {
      transition: 0.3s;
      margin-bottom: 40px;
      max-width: 90%;
      max-height: 100%;

      display: grid;
      grid-template-columns: 1fr 1fr;

      border-radius: 0;
    }
  }

  @media (min-width: 1301px) and (max-width: 1400px) {
    #align-header-text {
      position: absolute;
      display: flex;
      top: 35%;
      left: 30%;
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    #p-header {
      opacity: 1;
      font-weight: bold;
      font-size: 2rem;
    }

    h1 {
      color: #ffffffdc;
      margin-top: 20%;
      opacity: 1;
      font-weight: bold;
      font-size: 5rem;
    }

    #section-div {
      padding-top: 3rem;
      display: grid;
      grid-template-columns: 0.5fr 1fr;
    }

    section {
      padding-right: 40px;
    }

    #links-div {
      padding-right: 20px;
    }

    #line {
      border-bottom: 2px solid #ddd;
      width: 90%;
      margin-left: 60px;
    }

    /* CARD */

    #card1 {
      margin-top: 20px;
    }
    .card {
      transition: 0.3s;
      margin-bottom: 40px;
      max-width: 90%;
      max-height: 100%;

      display: grid;
      grid-template-columns: 1fr 1fr;

      border-radius: 0;
    }
  }

  @media (min-width: 1251px) and (max-width: 1300px) {
    #align-header-text {
      position: absolute;
      display: flex;
      top: 35%;
      left: 30%;
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    #p-header {
      opacity: 1;
      font-weight: bold;
      font-size: 2rem;
    }

    h1 {
      color: #ffffffdc;
      margin-top: 20%;
      opacity: 1;
      font-weight: bold;
      font-size: 5rem;
    }

    #section-div {
      padding-top: 3rem;
      display: grid;
      grid-template-columns: 0.5fr 1fr;
    }

    section {
      padding-right: 40px;
    }

    #links-div {
      padding-right: 20px;
    }

    #line {
      border-bottom: 2px solid #ddd;
      width: 90%;
      margin-left: 55px;
    }

    #pic-sustainability {
      width: 90%;
      margin-left: 5%;
    }

    /* CARD */

    #card1 {
      margin-top: 20px;
    }
    .card {
      transition: 0.3s;
      margin-bottom: 40px;
      max-width: 90%;
      max-height: 100%;

      display: grid;
      grid-template-columns: 1fr 1fr;

      border-radius: 0;
    }
  }

  @media (min-width: 1101px) and (max-width: 1250px) {
    #align-header-text {
      position: absolute;
      display: flex;
      top: 30%;
      left: 30%;
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    #p-header {
      opacity: 1;
      font-weight: bold;
      font-size: 2rem;
    }

    h1 {
      color: #ffffffdc;
      margin-top: 20%;
      opacity: 1;
      font-weight: bold;
      font-size: 5rem;
    }

    #section-div {
      padding-top: 3rem;
      display: grid;
      grid-template-columns: 0.5fr 1fr;
    }

    section {
      padding-right: 40px;
    }

    #links-div {
      padding-right: 20px;
    }

    #line {
      border-bottom: 2px solid #ddd;
      width: 90%;
      margin-left: 50px;
    }

    #pic-sustainability {
      width: 90%;
      margin-left: 5%;
    }

    /* CARD */

    #card1 {
      margin-top: 20px;
    }
    .card {
      transition: 0.3s;
      margin-bottom: 40px;
      max-width: 90%;
      max-height: 100%;

      display: grid;
      grid-template-columns: 1fr 1fr;

      border-radius: 0;
    }
  }

  @media (min-width: 901px) and (max-width: 1100px) {
    #align-header-text {
      position: absolute;
      display: flex;
      top: 25%;
      left: 25%;
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    #p-header {
      opacity: 1;
      font-weight: bold;
      font-size: 2rem;
    }

    h1 {
      color: #ffffffdc;
      margin-top: 20%;
      opacity: 1;
      font-weight: bold;
      font-size: 5rem;
    }

    #section-div {
      padding-top: 3rem;
      display: grid;
      grid-template-columns: 0.5fr 1fr;
    }

    section {
      padding-right: 40px;
    }

    #links-div {
      padding-right: 20px;
    }

    #line {
      border-bottom: 2px solid #ddd;
      width: 90%;
      margin-left: 45px;
    }

    #pic-sustainability {
      width: 90%;
      margin-left: 5%;
    }

    /* CARD */

    #card1 {
      margin-top: 20px;
    }
    .card {
      transition: 0.3s;
      margin-bottom: 40px;
      max-width: 90%;
      max-height: 100%;

      display: grid;
      grid-template-columns: 1fr 1fr;

      border-radius: 0;
    }
  }

  @media (min-width: 751px) and (max-width: 900px) {
    #align-header-text {
      position: absolute;
      display: flex;
      top: 25%;
      margin-left: 35%;
    }

    #align-p {
      position: absolute;
    }

    #p-header {
      display: none;
    }

    h1 {
      margin-top: 50px;
      font-size: 5rem;
    }

    #links-div {
      display: none;
    }

    .card {
      max-width: 90%;
    }

    #section-div {
      margin-top: 20px;
      margin-left: 30px;
      margin-right: 25px;
    }

    #This-is-happy-hikers-div {
      padding-left: 10%;
    }

    #line {
      display: none;
    }
  }

  @media (min-width: 601px) and (max-width: 750px) {
    #align-header-text {
      position: absolute;
      display: flex;
      top: 20%;
      margin-left: 35%;
    }

    #p-header {
      display: none;
    }

    #align-h1 {
      position: absolute;
      display: flex;
      top: 25%;
      margin-left: 30%;
    }

    h1 {
      margin-top: 50px;
      font-size: 5rem;
    }

    #links-div {
      display: none;
    }

    #line {
      display: none;
    }

    .card {
      max-width: 90%;
    }

    #section-div {
      margin-top: 20px;
      margin-left: 20px;
      margin-right: 20px;
    }

    #This-is-happy-hikers-div {
      padding-left: 10%;
    }
  }

  @media (min-width: 375px) and (max-width: 600px) {
    #header-pic {
      margin-top: 30px;
    }

    h1 {
      color: #3b3a3a;
      margin-top: 10px;
      text-align: center;
      font-weight: bold;
    }

    #p-header {
      display: none;
    }

    #links-div {
      display: none;
    }

    #section-div {
      margin-top: 20px;
      margin-left: 20px;
      margin-right: 20px;
    }

    #This-is-happy-hikers-div {
      padding-left: 10%;
    }

    #line {
      display: none;
    }

    .card {
      max-width: 90%;
    }
  }
</style>
