<script>
  export default {
    data() {
      return {
        points: 1000
      }
    }
  }
</script>
<template>
  <div id="points-container">
    <h2 style="font-size: 3rem; font-weight: 800">Poäng: {{ this.points }}</h2>
    <div id="points-bar-container">
      <div class="bar-profile-row" v-if="this.points >= 500">
        <span class="bar-profile-active" />
        <span class="circle-active" />
      </div>
      <div class="bar-profile-row" v-else>
        <span class="bar-profile-unactive" />
        <span class="circle" />
      </div>
      <div class="bar-profile-row" v-if="this.points >= 1000">
        <span class="bar-profile-active" />
        <span class="circle-active" />
      </div>
      <div class="bar-profile-row" v-else>
        <span class="bar-profile-unactive" />
        <span class="circle" />
      </div>
      <div class="bar-profile-row" v-if="this.points >= 1500">
        <span class="bar-profile-active" />
        <span class="circle-active" />
      </div>
      <div class="bar-profile-row" v-else>
        <span class="bar-profile-unactive" />
        <span class="circle" />
      </div>
      <div class="bar-profile-row" v-if="this.points >= 2000">
        <span class="bar-profile-active" />
        <span class="circle-active" />
      </div>
      <div class="bar-profile-row" v-else>
        <span class="bar-profile-unactive" />
        <span class="circle" />
      </div>
      <div class="bar-profile-row" v-if="this.points >= 2500">
        <span class="bar-profile-active" />
        <span class="circle-active" />
      </div>
      <div class="bar-profile-row" v-else>
        <span class="bar-profile-unactive" />
        <span class="circle" />
      </div>
    </div>
    <p>
      Du behöver 1337 poäng till för att få din nästa bonusrabatt, och 1864 till
      för att bli Plus-1337-medlem. Bonusrabatter utfärdas med en fördräjning på
      30 dagar.
    </p>
  </div>
</template>

<style scoped>
  #points-container {
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #points-bar-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bar-profile-row {
    display: flex;
    align-items: center;
  }

  .bar-profile-unactive {
    display: block;
    width: 80px;
    height: 7px;
    background-color: rgb(202, 202, 202);
  }

  .circle {
    display: block;
    width: 18px;
    height: 18px;
    background-color: rgb(202, 202, 202);
    border-radius: 50px;
    margin-right: 0px;
  }

  .bar-profile-active {
    display: block;
    width: 80px;
    height: 7px;
    background-color: #4ea055;
  }

  .circle-active {
    display: block;
    width: 18px;
    height: 18px;
    background-color: #4ea055;
    border-radius: 50px;
    margin-right: 0px;
  }

  #points-container p {
    margin-top: 20px;
    text-align: left;
    font-weight: 600;
  }

  @media (max-width: 1100px) {
    .bar-profile-active,
    .bar-profile-unactive {
      width: 65px;
    }
  }

  @media (max-width: 960px) {
    .bar-profile-active,
    .bar-profile-unactive {
      width: 45px;
    }
  }

  @media (max-width: 760px) {
    #points-container {
      padding: 0px 15px 15px 15px;
      align-items: flex-start;
    }

    #points-container h2 {
      margin-bottom: 15px;
    }
    .bar-profile-active,
    .bar-profile-unactive {
      width: 45px;
    }
  }
</style>
