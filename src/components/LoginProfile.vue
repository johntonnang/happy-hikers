<script>
  export default {
    data() {
      return {
        loginSuccesfull: false,
        usernameInput: 'Slobodan_Vladisalvus_Larva_Robin_Lidvall@gmail.com',
        passwordInput: 'asdf1234'
      }
    },
    methods: {
      loginProfile() {
        this.loginSuccesfull = true
        this.$emit('login-success', this.loginSuccesfull)
      }
    },
    emits: ['login-success']
  }
</script>

<template>
  <div v-if="!loginSuccesfull" id="login-container">
    <div id="login-content">
      <div id="exit-login-container">
        <h2>Logga in</h2>
      </div>
      <p style="margin: 0">
        Bli medlem - missa inte erbjudanden, rabattarer och bonuscheckar.
      </p>
      <div class="input-container">
        <label for="username" /> E-postadress *
        <input class="input-field" v-model="usernameInput" name="username" />
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
      <div class="checkbox-container">
        <input type="checkbox" name="remember-me" />
        <label for="remember-me" /> Kom ihåg mig
      </div>
      <div id="profile-btn-container">
        <button id="login-btn" @click="loginProfile">Logga in</button>
        <button id="member-btn">Bli medlem</button>
      </div>
      <p style="margin: 0">Om medlemskapet</p>
    </div>
  </div>
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
    font-size: 1.1rem;
  }

  #login-btn:hover {
    cursor: pointer;
    background-color: #8fee97;
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
</style>
