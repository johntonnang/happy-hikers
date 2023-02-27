<script>
  import BecomeMember from '../components/BecomeMember.vue'

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
        loadingIcon: false
      }
    },
    methods: {
      loginProfile() {
        this.loadingIcon = true
        this.failedInput = false
        setTimeout(() => {
          const email = localStorage.getItem('username')
          const password = localStorage.getItem('password')

          if (email === this.EmailInput && password === this.passwordInput) {
            this.loginSuccesfull = true
            this.failedInput = false
          }
          if (this.loginSuccesfull) {
            this.$emit('login-success', this.loginSuccesfull)
            localStorage.setItem('existing-user', this.existingUser)
          } else {
            this.failedInput = true
            this.loadingIcon = false
          }
        }, 1500)
      }
    },
    emits: ['login-success'],
    created() {
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
  <div v-if="!loginSuccesfull && loginMember" id="login-container">
    <div id="login-content">
      <div id="exit-login-container">
        <h2>Logga in</h2>
      </div>
      <p style="margin: 0">
        Bli medlem - missa inte erbjudanden, rabattarer och bonuscheckar.
      </p>
      <div class="input-container">
        <label for="username" /> E-postadress *
        <input class="input-field" v-model="EmailInput" name="username" />
      </div>
      <div class="input-container">
        <label for="username" /> Lösenord *
        <input
          type="password"
          class="input-field"
          v-model="passwordInput"
          name="password"
        />
      </div>
      <p style="color: rgb(219, 15, 15)" v-if="failedInput">
        Wrong email address or password, please try again.
      </p>
      <div class="checkbox-container">
        <input type="checkbox" name="remember-me" />
        <label for="remember-me" /> Kom ihåg mig
      </div>
      <div id="profile-btn-container">
        <button id="login-btn" @click="loginProfile">
          <div class="loader" v-if="loadingIcon" />
          <span v-else>Log in</span>
        </button>
        <button
          id="member-btn"
          @click=";(becomeMember = true), (loginMember = false)"
        >
          Become Member
        </button>
      </div>
      <p style="margin: 0">Om medlemskapet</p>
    </div>
  </div>
  <BecomeMember v-if="becomeMember" />
</template>
<style scoped>
  #login-container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 25%;
    border: 1px solid black;
    padding: 20px;
    margin-bottom: 100px; /* Ska tas bort? */
    box-shadow: 0px 0px 8px black;
    background-color: rgb(250, 250, 250);
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
    border: 1px solid rgb(179, 179, 179);
  }

  #profile-btn-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 20px 0 10px 0;
  }

  #login-btn {
    background-color: #58aa5f;
    border: 1.5px solid black;
    color: #222;
    padding: 14px 0;
    font-weight: 600;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
  }

  #login-btn:hover {
    cursor: pointer;
    background-color: #8fee97;
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
    background-color: #fff;
    color: #222;
    padding: 12px 0;
    font-weight: 600;
    font-size: 1.1rem;
    border: 1px solid black;
  }

  #member-btn:hover {
    cursor: pointer;
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
