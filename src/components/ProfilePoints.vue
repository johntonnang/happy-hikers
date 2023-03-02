<script>
  export default {
    data() {
      return {
        profilePoints: 0,
        bonusUpgrade: 2500,
        plusMember: 5000,
        nextBonus: 0,
        plusMemberLeft: 0
      }
    },
    created() {
      this.profilePoints = localStorage.getItem('ProfilePoints')
      // Calculate next bonus
      this.nextBonus = this.bonusUpgrade - this.profilePoints
      //Calculate till plus-member
      this.plusMemberLeft = this.plusMember - this.profilePoints
    }
  }
</script>
<template>
  <div id="points-container">
    <h2 style="font-size: 3rem; font-weight: 700">
      Points: {{ this.profilePoints }}
    </h2>
    <div id="points-bar-container">
      <div class="bar-profile-row" v-if="this.profilePoints >= 500">
        <span class="bar-profile-active" />
        <span class="circle-active" />
      </div>
      <div class="bar-profile-row" v-else>
        <span class="bar-profile-unactive" />
        <span class="circle" />
      </div>
      <div class="bar-profile-row" v-if="this.profilePoints >= 1000">
        <span class="bar-profile-active" />
        <span class="circle-active" />
      </div>
      <div class="bar-profile-row" v-else>
        <span class="bar-profile-unactive" />
        <span class="circle" />
      </div>
      <div class="bar-profile-row" v-if="this.profilePoints >= 1500">
        <span class="bar-profile-active" />
        <span class="circle-active" />
      </div>
      <div class="bar-profile-row" v-else>
        <span class="bar-profile-unactive" />
        <span class="circle" />
      </div>
      <div class="bar-profile-row" v-if="this.profilePoints >= 2000">
        <span class="bar-profile-active" />
        <span class="circle-active" />
      </div>
      <div class="bar-profile-row" v-else>
        <span class="bar-profile-unactive" />
        <span class="circle" />
      </div>
      <div class="bar-profile-row" v-if="this.profilePoints >= 2500">
        <span class="bar-profile-active" />
        <span class="circle-active" />
      </div>
      <div class="bar-profile-row" v-else>
        <span class="bar-profile-unactive" />
        <span class="circle" />
      </div>
    </div>
    <p>
      You need {{ nextBonus }} points to get your next bonus discount, and
      {{ plusMemberLeft }}
      points to become a Plus member. Bonus discounts are issued with a delay of
      30 days.
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
    /* background-color: #4ea055; */
    background-color: rgba(2, 70, 2, 0.716);
  }

  .circle-active {
    display: block;
    width: 18px;
    height: 18px;
    /* background-color: #4ea055; */
    background-color: rgba(2, 70, 2, 0.716);
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
