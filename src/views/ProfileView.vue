<script>
  import PreviousOrders from '../components/PreviousOrders.vue'
  import ProfileMenu from '../components/ProfileMenu.vue'
  import ProfilePoints from '../components/ProfilePoints.vue'
  import LoginProfile from '../components/LoginProfile.vue'
  import { initializeApp } from 'firebase/app'
  import {
    getFirestore,
    onSnapshot,
    collection,
    // doc,
    // deleteDoc,
    // setDoc,
    // addDoc,
    // orderBy,
    query
  } from 'firebase/firestore'
  import { onUnmounted } from 'vue'

  const firebaseConfig = {
    apiKey: 'AIzaSyAGJoAN08CeHsyoibMdRQVpegwPibf1ANk',
    authDomain: 'happy-hikers-1a875.firebaseapp.com',
    projectId: 'happy-hikers-1a875',
    storageBucket: 'happy-hikers-1a875.appspot.com',
    messagingSenderId: '434497193720',
    appId: '1:434497193720:web:5893a8bd2905affdaedd0d',
    measurementId: 'G-QW50PLVBTN'
  }
  const app = initializeApp(firebaseConfig)

  const db = getFirestore(app)
  export default {
    data() {
      return {
        loginSuccesfull: false,
        userName: '',
        accounts: [],
        account: []
      }
    },
    components: {
      PreviousOrders,
      ProfileMenu,
      ProfilePoints,
      LoginProfile
    },
    created() {
      const kontoQuery = query(collection(db, 'konto'))
      const liveKonto = onSnapshot(kontoQuery, (snapshot) => {
        this.accounts = snapshot.docs.map((doc) => {
          if (localStorage.getItem('email') === doc.data().email) {
            return {
              id: doc.id,
              email: doc.data().email,
              password: doc.data().password,
              wish: doc.data().wishlist,
              userName: doc.data().name,
              points: doc.data().profilePoints
            }
          }
        })
        for (let i = 0; i < this.accounts.length; i++) {
          if (this.accounts[i]) {
            this.account = this.accounts[i]
            this.userName = this.account.userName
          }
        }
        this.showProducts = this.products
      })
      onUnmounted(liveKonto)
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
        <ProfilePoints :points="this.account.points" />
        <div id="discount-container">
          <div class="discount-container-box">
            <img src="/assets/starbucks-discount.jpg" alt="" />
            <h3>Morningtired? 5% discount on all coffees at Starbucks!</h3>
            <p>Valid until: 17/11-2023</p>
          </div>
          <div class="discount-container-box">
            <img src="/assets/uber-discount.jpg" alt="" />
            <h3>In a hurry? 30% discount on your first ride with Uber!</h3>
            <p>Valid until: 17/11-2023</p>
          </div>
          <div class="discount-container-box">
            <img src="/assets/bnb-discount.jpg" alt="nej" />
            <h3>
              Stay comfortably! 15% discount on selected reservation at Airbnb!
            </h3>
            <p>Valid until: 17/11-2023</p>
          </div>
          <div class="discount-container-box">
            <img src="/assets/vpn-discount.jpg" alt="" />
            <h3>Surf safely! 25% off the first three months with NordVPN!</h3>
            <p>Valid until: 17/11-2023</p>
          </div>
        </div>
        <ProfileMenu />
      </div>
      <div ref="content" id="order-container">
        <h1 style="font-weight: 700">Hi {{ userName }}!</h1>
        <h3>Your previous orders:</h3>
        <PreviousOrders />
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

  .discount-container-box {
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.35s;
    /* background-color: #f3f3f3; */
    width: 200px;
    margin-top: 30px;
    border-radius: 5px;
    height: 350px;
    /* border: 1px solid rgb(179, 179, 179); */
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

  .discount-container-box:hover {
    cursor: pointer;
    box-shadow: 2px 2px 40px rgb(var(--border-color));
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
    color: var(--text-primary-dark);
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
      height: 420px;
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
