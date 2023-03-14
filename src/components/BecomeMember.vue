<script>
  // import { async } from '@firebase/util'
  import { initializeApp } from 'firebase/app'
  import {
    getFirestore,
    // onSnapshot,
    collection,
    // doc,
    // deleteDoc,
    // setDoc,
    addDoc
    // orderBy,
    // query
  } from 'firebase/firestore'
  // import { onUnmounted, ref } from 'vue'

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
        memberNameInput: '',
        memberUsernameInput: '',
        memberPasswordInput: '',
        memberPhoneInput: '',
        correctName: true,
        correctUsername: true,
        correctPassword: true,
        correctPhone: true,
        loadingIcon: false,
        registredUser: true,
        discountActive: true
      }
    },
    methods: {
      reloadPage() {
        window.location.reload()
      },

      saveInput() {
        this.loadingIcon = true
        this.correctName = true
        this.correctUsername = true
        this.correctPassword = true
        if (this.memberNameInput === '') {
          this.correctName = false
          this.loadingIcon = false
          return
        } else if (
          this.memberUsernameInput === '' ||
          !this.memberUsernameInput.includes('@')
        ) {
          this.correctUsername = false
          this.loadingIcon = false
          return
        } else if (this.memberPasswordInput === '') {
          this.correctPassword = false
          this.loadingIcon = false
          return
        } else {
          let wish = []
          let cart = []
          addDoc(collection(db, 'konto'), {
            name: this.memberNameInput,
            email: this.memberUsernameInput,
            phone: this.memberPhoneInput,
            registredUser: this.registredUser,
            password: this.memberPasswordInput,
            wishlist: wish,
            cart: cart,
            orders: '[]',
            profilePoints: 0
          })
        }
        setTimeout(() => {
          this.reloadPage()
        }, 1500)
      }
    }
  }
</script>

<template>
  <div id="member-container">
    <div id="login-content">
      <div id="exit-login-container">
        <h2>Become Member</h2>
      </div>
      <p style="margin: 0">
        Become a member - don't miss out on offers, discounts, and bonus checks.
      </p>
      <div class="input-container">
        <label for="name" /> Name *
        <input class="input-field" v-model="memberNameInput" name="name" />
        <span class="error" v-if="!correctName"
          >The name field cannot be left empty.</span
        >
      </div>
      <div class="input-container">
        <label for="username" /> Email Address *
        <input
          class="input-field"
          v-model="memberUsernameInput"
          name="username"
        />
        <span class="error" v-if="!correctUsername"
          >Enter a valid email address.</span
        >
      </div>
      <div class="input-container">
        <label for="password" /> Password *
        <input
          type="password"
          class="input-field"
          v-model="memberPasswordInput"
          name="password"
        />
        <span class="error" v-if="!correctPassword"
          >The password field cannot be left empty.</span
        >
      </div>
      <div class="input-container">
        <label for="Phone" /> Phone (Optional)
        <input class="input-field" v-model="memberPhoneInput" name="phone" />
      </div>
      <label for="day" />Date of birth *
      <div id="date-of-birth-container">
        <input class="input-field-date" placeholder="YYYY" name="day" />
        <input class="input-field-date" placeholder="MM" name="month" />
        <input class="input-field-date" placeholder="DD" name="year" />
      </div>
      <div class="checkbox-container">
        <input type="checkbox" name="remember-me" />
        <label for="remember-me" /> Yes, please. Send me offers, style updates,
        and invitations to special member events.
      </div>
      <div id="profile-btn-container">
        <button id="become-member-btn" @click="saveInput">
          <div class="loader" v-if="loadingIcon" />
          <span v-else>Become Member</span>
        </button>
        <button id="return-login-btn" @click="reloadPage">Log in</button>
      </div>
      <p style="margin: 0">About membership</p>
    </div>
  </div>
</template>
<style scoped>
  #member-container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 25%;
    /* border: 1px solid black; */
    border: 1px solid rgb(179, 179, 179);
    padding: 20px;
    margin-bottom: 100px; /* Ska tas bort? */
    /* box-shadow: 0px 0px 8px black; */
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.202);
    background-color: rgb(250, 250, 250);
    border-radius: 5px;
  }

  #exit-login-container {
    display: flex;
    width: 100%;
  }

  #exit-login-container h2 {
    font-weight: 600;
  }

  #member-container p:first-of-type {
    padding-bottom: 20px;
    font-size: 0.9rem;
  }

  #member-container p:last-of-type {
    color: rgb(73, 73, 73);
    text-decoration: underline;
    text-align: center;
    width: 100%;
    padding-top: 10px;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  .input-container > .input-field {
    padding: 12px;
    border: 1px solid rgb(179, 179, 179);
    border-radius: 5px;
    outline: none;
  }

  #date-of-birth-container {
    width: 100%;
    display: flex;
    margin-bottom: 15px;
    border-top: 1px solid rgb(179, 179, 179);
    border-bottom: 1px solid rgb(179, 179, 179);
    border-left: 1px solid rgb(179, 179, 179);
    border-radius: 5px;
  }

  .input-field-date {
    padding: 10px;
    text-align: center;
    border: none;
    width: 100%;
    border-right: 1px solid rgb(179, 179, 179);
  }

  #profile-btn-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 20px 0 10px 0;
  }

  #become-member-btn {
    /* background-color: #58aa5f; */
    background-color: rgba(2, 70, 2, 0.716);
    border: none;
    color: #eee;
    padding: 14px 0;
    font-weight: 600;
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
    border-radius: 35px;
    transition: all 0.35s;
  }

  #become-member-btn:hover {
    cursor: pointer;
    background-color: rgb(2, 40, 2, 0.716);
  }

  .loader {
    border: 3px solid #e6e6e6;
    border-radius: 50%;
    border-top: 3px solid #0d0d0e;
    width: 28px;
    height: 28px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .error {
    color: rgb(219, 15, 15);
  }

  #return-login-btn {
    background-color: #e6e6e6;
    color: #222;
    padding: 12px 0;
    font-weight: 600;
    font-size: 1.1rem;
    border: none;
    border-radius: 35px;
    transition: all 0.35s;
  }

  #return-login-btn:hover {
    cursor: pointer;
    background-color: #d6d6d6;
  }

  @media (max-width: 1600px) {
    #member-container {
      width: 40%;
    }
  }

  @media (max-width: 760px) {
    #member-container {
      width: 85%;
    }
  }
</style>
