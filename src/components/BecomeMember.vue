<script>
  export default {
    data() {
      return {
        memberNameInput: '',
        memberUsernameInput: '',
        memberPasswordInput: '',
        correctName: true,
        correctUsername: true,
        correctPassword: true,
        loadingIcon: false
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
        setTimeout(() => {
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
            localStorage.setItem('name', this.memberNameInput)
            localStorage.setItem('username', this.memberUsernameInput)
            localStorage.setItem('password', this.memberPasswordInput)
            this.reloadPage()
          }
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
      <p style="margin: 0">Om medlemskapet</p>
    </div>
  </div>
</template>
<style scoped>
  #member-container {
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
  }

  #date-of-birth-container {
    width: 100%;
    display: flex;
    margin-bottom: 15px;
    border-top: 1px solid rgb(179, 179, 179);
    border-bottom: 1px solid rgb(179, 179, 179);
    border-left: 1px solid rgb(179, 179, 179);
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
    background-color: #58aa5f;
    border: 1.5px solid black;
    color: #222;
    padding: 14px 0;
    font-weight: 600;
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
  }

  #become-member-btn:hover {
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

  .error {
    color: rgb(219, 15, 15);
  }

  #return-login-btn {
    background-color: #fff;
    color: #222;
    padding: 12px 0;
    font-weight: 600;
    font-size: 1.1rem;
    border: 1px solid black;
  }

  #return-login-btn:hover {
    cursor: pointer;
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
