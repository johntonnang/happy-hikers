<script>
  import BecomeMember from '../components/BecomeMember.vue'
  import { initializeApp } from 'firebase/app'
  import {
    getFirestore,
    onSnapshot,
    collection,
    // updateDoc,
    // doc,
    // deleteDoc,
    // setDoc,
    // addDoc,
    // orderBy,
    query
  } from 'firebase/firestore'
  // import { onUnmounted } from 'vue'

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
    components: {
      BecomeMember
    },
    data() {
      return {
        loginSuccesfull: false,
        EmailInput: '',
        passwordInput: '',
        becomeMember: false,
        loginMember: true,
        existingUser: true,
        failedInput: false,
        loadingIcon: false,
        loginAccepted: false,
        errorInput: false,
        accounts: null,
        accountRef: null
      }
    },
    methods: {
      reloadPage() {
        window.location.reload()
      },
      loginProfile() {
        this.loadingIcon = true
        this.failedInput = false
        this.errorInput = false
        const kontoQuery = query(collection(db, 'konto'))
        onSnapshot(kontoQuery, (snapshot) => {
          this.accounts = snapshot.docs.map((doc) => {
            if (this.EmailInput === doc.data().email) {
              return {
                id: doc.id,
                email: doc.data().email,
                password: doc.data().password,
                name: doc.data().name,
                phone: doc.data().phone,
                registredUser: doc.data().registredUser,
                wish: doc.data().wishlist,
                cart: doc.data().cart
              }
            }
          })
          this.showProducts = this.products
          for (let i = 0; i < this.accounts.length; i++) {
            console.log(this.accounts[i])
            if (this.accounts[i]) {
              this.account = this.accounts[i]
            }
          }
        })
        setTimeout(() => {
          let logedIn = false
          for (let accountIndex in this.accounts) {
            // console.log(this.accounts[accountIndex].password.toString());
            if (this.accounts[accountIndex]) {
              if (
                this.accounts[accountIndex].email === this.EmailInput &&
                this.accounts[accountIndex].password.toString() ===
                  this.passwordInput
              ) {
                this.loginProfileAccepted(this.accounts[accountIndex].email)
                this.failedInput = false
                this.errorInput = false
                logedIn = true
                localStorage.setItem('email', this.accounts[accountIndex].email)
                // let wish = ''
                // let cart = ''
                // let changed = false
                // if (
                //   this.accounts[accountIndex].wish.length === 0 &&
                //   localStorage.getItem('wish')
                // ) {
                //   changed = true
                //   wish = JSON.parse(localStorage.getItem('Wish'))
                // } else {
                // let wish = this.accounts[accountIndex].wish
                // }

                // if (
                //   this.accounts[accountIndex].cart.length === 0 &&
                //   localStorage.getItem('Cart')
                // ) {
                //   changed = true
                //   cart = JSON.parse(localStorage.getItem('Cart'))
                // } else {
                // let cart = this.accounts[accountIndex].cart
                // }
                // if()
                // if (changed === true) {
                //   setDoc(doc(db, 'konto', this.account.id), {
                //     id: this.account.id,
                //     email: this.account.email,
                //     password: this.account.password,
                //     name: this.account.name,
                //     phone: this.account.phone,
                //     registredUser: this.account.registredUser,
                //     wishlist: wish,
                //     cart: cart
                //   })
                // }

                break
              }
            }
          }
          if (logedIn === false) {
            this.loadingIcon = false
            this.errorInput = true
          }
        }, 1500)
      },
      loginProfileAccepted(email) {
        this.loginSuccesfull = true
        this.loginAccepted = true
        this.failedInput = true
        localStorage.setItem('email', email)
        setTimeout(() => {
          this.$emit('login-success', this.loginSuccesfull)
          localStorage.setItem('existing-user', this.existingUser)
          localStorage.setItem('discount-active', true)
          window.location.reload()
        }, 3000)
      }
    },
    emits: ['login-success'],
    created() {
      // const kontoQuery = query(collection(db, 'konto'))
      // onSnapshot(kontoQuery, (snapshot) => {
      //   this.accounts = snapshot.docs.map((doc) => {
      //     if (localStorage.getItem('email') === doc.data().email) {
      //       return {
      //         id: doc.id,
      //         email: doc.data().email,
      //         password: doc.data().password,
      //         name: doc.data().name,
      //         phone: doc.data().phone,
      //         registredUser: doc.data().registredUser,
      //         wish: doc.data().wishlist,
      //         cart: doc.data().cart
      //       }
      //     }
      //   })
      //   this.showProducts = this.products
      //   for (let i = 0; i < this.accounts.length; i++) {
      //     console.log(this.accounts[i])
      //     if (this.accounts[i]) {
      //       this.account = this.accounts[i]
      //     }
      //   }
      // })

      const alreadyUser = localStorage.getItem('existing-user')
      if (alreadyUser) {
        this.$emit('login-success', this.loginSuccesfull)
        this.becomeMember = false
        this.loginMember = true
      }
    }
  }
</script>

<template>
  <div v-if="!failedInput && loginMember" id="login-container">
    <div id="login-content">
      <div id="exit-login-container">
        <h2>Log in</h2>
      </div>
      <p style="margin: 0">
        Become a member - don't miss out on offers, discounts, and bonus checks.
      </p>
      <div class="input-container">
        <label for="username" /> Email Address *
        <input class="input-field" v-model="EmailInput" name="username" />
      </div>
      <div class="input-container">
        <label for="username" /> Password *
        <input
          type="password"
          class="input-field"
          v-model="passwordInput"
          name="password"
        />
      </div>
      <p style="color: #db0f0f" v-if="errorInput">
        Wrong email address or password, please try again.
      </p>
      <div class="checkbox-container">
        <input type="checkbox" name="remember-me" />
        <label for="remember-me" /> Remember me
      </div>
      <div id="profile-btn-container">
        <button v-if="!loginAccepted" id="login-btn" @click="loginProfile">
          <div class="loader" v-if="loadingIcon" />
          <span v-else>Log in</span>
        </button>
        <button
          v-if="loginAccepted"
          style="background-color: rgba(2, 70, 2, 0.7)"
          id="login-btn"
          @click="loginProfile"
        >
          <img src="assets/output-onlinegiftools.gif" alt="Checkmark" />
          <span style="margin-left: 5px">Redirecting...</span>
        </button>
        <button
          id="member-btn"
          @click=";(becomeMember = true), (loginMember = false)"
        >
          Become Member
        </button>
      </div>
      <p style="margin: 0">About membership</p>
    </div>
  </div>
  <BecomeMember v-if="becomeMember" />
</template>
<style scoped>
  #login-btn img {
    width: 30px;
  }
  #login-container {
    /* position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto; */
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 25%;
    /* border: 1px solid black; */
    border: 1px solid rgb(var(--border-color));
    padding: 20px;
    margin-bottom: 100px; /* Ska tas bort? */
    /* box-shadow: 0px 0px 8px black; */
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
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

  #login-container p:first-of-type {
    padding-bottom: 20px;
    font-size: 0.9rem;
  }

  #login-container p:last-of-type {
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
    border: 1px solid rgb(var(--border-color));
    border-radius: 5px;
    outline: none;
  }

  #profile-btn-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 20px 0 10px 0;
  }

  #login-btn {
    /* background-color: #58aa5f; */
    background-color: rgba(var(--bg-primary), 0.7);
    /* background-color: #579d5d; */
    /* border: 1.5px solid black; */
    /* color: #222; */
    border: none;
    color: var(--text-primary-light);
    padding: 14px 0;
    font-weight: 600;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    border-radius: 35px;
    transition: all 0.35s;
  }

  #login-btn:hover {
    cursor: pointer;
    /* background-color: #8fee97; */
    filter: brightness(140%);
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

  #member-btn {
    /* background-color: #e6e6e6; */
    background-color: var(--bg-secondary);
    /* color: #222; */
    color: var(--text-primary-light);
    padding: 12px 0;
    font-weight: 600;
    font-size: 1.1rem;
    /* border: 1px solid black; */
    border: none;
    border-radius: 35px;
    transition: all 0.35s;
  }

  #member-btn:hover {
    cursor: pointer;
    /* background-color: #d6d6d6; */
    filter: brightness(140%);
  }

  @media (max-width: 1600px) {
    #login-container {
      width: 40%;
    }
  }

  @media (max-width: 760px) {
    #login-container {
      width: 85%;
    }
  }
</style>
