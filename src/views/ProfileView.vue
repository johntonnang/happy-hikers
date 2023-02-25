<script>
  import PreviousOrders from '../components/PreviousOrders.vue'
  import ProfileMenu from '../components/ProfileMenu.vue'
  import ProfilePoints from '../components/ProfilePoints.vue'
  import LoginProfile from '../components/LoginProfile.vue'
  export default {
    data() {
      return {
        loginSuccesfull: false
      }
    },
    components: {
      PreviousOrders,
      ProfileMenu,
      ProfilePoints,
      LoginProfile
    }
  }
</script>

<template>
  <main>
    <LoginProfile
      v-if="!loginSuccesfull"
      @login-success="loginSuccesfull = true"
    />
    <div v-if="loginSuccesfull" id="main-container">
      <div ref="content" id="menu-container">
        <ProfilePoints />
        <div id="discount-container">
          <div class="discount-container-box">
            <img src="/assets/snel-hezt.jpg" alt="" />
            <h3>Medlemmar får 20% på linnement för hästar!</h3>
            <p>Giltig till och med: 17/11-2023</p>
          </div>
          <div class="discount-container-box">
            <img src="/assets/snel-hezt.jpg" alt="" />
            <h3>Medlemmar får 20% på linnement för hästar!</h3>
            <p>Giltig till och med: 17/11-2023</p>
          </div>
          <div class="discount-container-box">
            <img src="/assets/snel-hezt.jpg" alt="nej" />
            <h3>Medlemmar får 20% på linnement för hästar!</h3>
            <p>Giltig till och med: 17/11-2023</p>
          </div>
          <div class="discount-container-box">
            <img src="/assets/snel-hezt.jpg" alt="" />
            <h3>Medlemmar får 20% på linnement för hästar!</h3>
            <p>Giltig till och med: 17/11-2023</p>
          </div>
        </div>
        <ProfileMenu />
      </div>
      <div ref="content" id="order-container">
        <h1 style="font-weight: 800">
          Hej Slobodan Vladislavus Larva Dick Robin Lidvall!
        </h1>
        <h3>Dina tidigare beställningar:</h3>
        <PreviousOrders />
        <h1>Vill du returnera en vara? Synd. Det får du inte.</h1>
      </div>
    </div>
  </main>
</template>

<style scoped>
  body {
    width: 95%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  main {
    position: relative;
    top: 130px;
  }

  main p {
    width: 95%;
    margin: 0 auto;
  }

  #main-container {
    width: 95%;
    display: flex;
    margin: 0 auto;
    margin-bottom: 50px; /* Ska bort sen? */
  }

  #menu-container {
    width: 30%;
  }

  #discount-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    font-size: 0.8em;
    margin-bottom: 25px;
  }

  .discount-container-box:hover {
    cursor: pointer;
    opacity: 0.6;
    box-shadow: 0px 0px 20px black;
  }
  .discount-container-box {
    background-color: #79d681;
    width: 200px;
    margin-top: 30px;
    border-radius: 8px;
    height: 300px;
  }

  .discount-container-box img {
    width: 100%;
    height: 60%;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .discount-container-box h3 {
    font-weight: 600;
    font-size: 1.2rem;
    margin-top: 10px;
    padding: 5px 15px 0px 15px;
  }

  .discount-container-box p {
    padding: 0 10px;
  }

  #order-container {
    width: 70%;
    margin-left: 7%;
    padding-top: 15px;
  }

  #order-container h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-top: 25px;
    color: rgb(46, 46, 46);
  }

  @media (max-width: 1600px) {
    #menu-container {
      width: 40%;
    }
    #order-container {
      width: 60%;
    }
  }

  @media (max-width: 1200px) {
    #menu-container {
      width: 45%;
    }
    #order-container {
      width: 55%;
    }
    .prev-order-container {
      width: 90%;
    }
  }

  @media (max-width: 960px) {
    #menu-container {
      width: 50%;
    }
    #order-container {
      width: 50%;
    }

    .discount-container-box {
      scale: 0.9;
      width: 50%;
      height: 320px;
      margin-top: 0px;
    }
  }
  @media (max-width: 760px) {
    #main-container {
      flex-direction: column;
    }

    #menu-container {
      width: 100%;
      margin: 0 auto;
      order: 2;
    }

    #order-container {
      width: 100%;
      margin-left: 0px;
      padding: 15px 15px 15px 15px;
      order: 1;
    }
    .discount-container-box img {
      height: 60%;
    }
  }
</style>
