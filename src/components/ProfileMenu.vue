<script>
  export default {
    data() {
      return {
        rotateAngleContact: '',
        rotateAngleTest: '',
        openMenuContactBool: false,
        openMenuTestBool: false
      }
    },
    methods: {
      reloadPage() {
        window.location.reload()
      },
      scrollUp() {
        this.$parent.$refs.content.scrollIntoView({ behavior: 'smooth' })
      },
      openMenuTest() {
        if (this.rotateAngleTest === 'rotate(90deg)') {
          this.rotateAngleTest = 'rotate(0deg)'
          this.openMenuTestBool = false
        } else {
          this.rotateAngleTest = 'rotate(90deg)'
          this.openMenuTestBool = true
        }
      },
      openMenuContact() {
        if (this.rotateAngleContact === 'rotate(90deg)') {
          this.rotateAngleContact = 'rotate(0deg)'
          this.openMenuContactBool = false
        } else {
          this.rotateAngleContact = 'rotate(90deg)'
          this.openMenuContactBool = true
        }
      },
      profileLogOut() {
        localStorage.removeItem('existing-user')
        localStorage.removeItem('registred-user')
        localStorage.removeItem('email')
      }
    }
  }
</script>

<template>
  <div id="profile-options-container">
    <div @click="scrollUp()" class="option-container oc-2">
      <h4 style="margin-bottom: 0px">My orders</h4>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-right"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div>
    <div @click="scrollUp()" class="option-container">
      <h4 style="margin-bottom: 0px">My points</h4>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-right"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div>
    <div class="option-container oc-2">
      <h4 style="margin-bottom: 0px">Account settings</h4>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-right"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div>
    <div class="option-container">
      <h4 style="margin-bottom: 0px">Invite a friend</h4>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-right"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div>

    <div class="option-container" @click="openMenuContact()">
      <h4 style="margin-bottom: 0px">Contact us</h4>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-right"
        viewBox="0 0 16 16"
        :style="{ transform: rotateAngleContact }"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div>
    <div v-if="openMenuContactBool" id="contact-info-container">
      <p>Email: efterlyst@viaplay.com</p>
      <p>Telefon: 08-702 00 90</p>
      <p>Adress: 105 10 Stockholm</p>
      <p style="text-decoration: underline">Vanliga frågor</p>
    </div>
    <div @click="reloadPage(), profileLogOut()" class="option-container oc-2">
      <h4 style="margin-bottom: 0px">Log out</h4>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-right"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped>
  .option-container {
    display: flex;
    align-items: center;
    padding: 15px;
    margin: 15px 0;
    border-radius: 5px;
    /* background-color: rgb(241, 241, 241); */
    background-color: #e6e6e6;
    font-size: 0.5rem;
  }

  .option-container:hover {
    cursor: pointer;
    /* background-color: black; */
    /* color: white; */
    transition: 0.35s ease-in-out;
    background-color: #d6d6d6;
  }

  .option-container h4 {
    font-size: 1rem;
    font-weight: 600;
  }
  .option-container svg {
    margin-left: auto;
  }

  #contact-info-container {
    /* background-color: rgb(241, 241, 241); */
    color: rgb(71, 71, 71);
    margin-top: -17px;
    transition: 0.35s ease-in-out;
    padding: 10px 0px 3px 15px;
    font-weight: 600;
    font-size: 0.9rem;
  }
</style>
