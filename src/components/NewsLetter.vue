<script>
  export default {
    data() {
      return {
        // Shows newsletter popup
        showPopup: true,
        // Hides confirmation
        showConfirmationPopup: false,
        // receiving string from v-model
        email: '',
        errorMessage: false
      }
    },
    mounted() {
      // You have to delete closedNewsletter in localstorage everytime you want the newsletter to show up again if you have closed the newsletter once.
      const hasClosedNews = localStorage.getItem('closedNewsletter')
      // if closing newsletter
      if (hasClosedNews) {
        // hide showPopup
        this.showPopup = false
      } else {
        // if the popup has not been closed before. Show it!
        this.showPopup = true
      }
    },

    methods: {
      //  Close popup
      closePopup() {
        this.showPopup = false
        // set localStorage value to true. Popup has been closed
        localStorage.setItem('closedNewsletter', 'true')
      },

      showConfirmation() {
        // If checkbox is not checked errormessage shows. Else showConfirmationPopup shows.
        if (!document.getElementById('checkbox').checked) {
          this.errorMessage = true
          return
        }
        this.showConfirmationPopup = true
      }
    }
  }
</script>

<template>
  <!-- If showPopup is true show this -->
  <main id="container" v-if="showPopup">
    <div id="newsletter">
      <button id="popup-close" @click="closePopup">X</button>

      <!-- if showConfirmationPopup is false show this. Else show confirmation-popup -->
      <div v-if="!showConfirmationPopup" id="align-text">
        <h1 id="h1-news">Newsletter</h1>
        <h5>Join us</h5>
        <div id="paragraph">
          <p id="info-txt">
            Do you love outdoor activities like hiking, camping, or rock
            climbing? Our online store has everything you need for your next
            adventure. Subscribe to our newsletter for the latest products,
            helpful tips, and exclusive deals. Enter your email and start
            receiving updates today.
          </p>
        </div>

        <!-- When user click Submit confirmationPopup will show -->
        <form @submit.prevent="showConfirmation">
          <div id="check-box-div">
            <input type="checkbox" name="" id="checkbox" />
            <div id="label-div">
              <label for="checkbox"
                >Agree to receive information about Happy Hiker's via e-mail.
                You can unsubscribe at any time.</label
              >
            </div>
          </div>
          <!-- if errormessage is true this message will show -->
          <div v-if="errorMessage" id=" error-message">
            <label style="color: rgb(176, 20, 20)">
              Please confirm by clicking in the checkbox before submitting
            </label>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" Enter your email"
            v-model="email"
          />
          <button
            class="submit-btn"
            @click="
              // if checkbox is checked show confirmation else put errormessage to true
              checkbox.checked ? showConfirmation() : (errorMessage = true)
            "
          >
            Submit
          </button>
        </form>
      </div>

      <div v-else id="confirmation-popup">
        <h1>Thank you for subscribing</h1>
        <div id="check-icon">
          <img src="/assets/output-onlinegiftools.gif" alt="Checkmark" />
          <span>Redirecting...</span>
        </div>
        <p>We´ll send you uppdates and exclusive deals to: {{ email }}.</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
  }

  #confirmation-popup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  h2 {
    padding-top: 30px;
  }

  #container {
    display: flex;
    justify-content: center;
  }

  #popup-close {
    border: none;
    font-size: large;
    font-weight: bold;
    margin-top: 10px;
    margin-right: 90%;
    position: absolute;
    top: 0;
    right: 0%;
  }

  #confirmation-popup {
    margin-left: 10%;
    margin-right: 10%;
  }

  h1 {
    color: rgba(4, 92, 4, 0.716);
    font-weight: bold;
  }

  h5 {
    font-weight: bold;
  }

  h5,
  label,
  p {
    color: rgb(191, 186, 186);
  }

  p {
    font-weight: bold;
  }

  #newsletter {
    background-color: rgb(34, 34, 34);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    /* max-width: 30%;
    max-height: 45%; */
    position: fixed;
    z-index: 99;
    opacity: 0.9;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5%;
  }

  #align-text {
    text-align: center;
    opacity: 1;
  }

  button {
    color: rgb(234, 232, 232);
    background-color: rgb(34, 34, 34);
    border: 1px solid black;
    border-radius: 5px;
    margin-top: 10px;
    margin-left: 10%;
    margin-right: 10%;
    font-weight: bold;
  }

  .submit-btn:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  #email {
    margin-top: 10px;
    margin-right: 10%;
    margin-left: 10%;
    border-radius: 5px;
    border: 1px solid rgb(179, 179, 179);
    outline: none;
  }

  #check-box-div {
    display: flex;
    flex-direction: row;
    padding-right: 30px;
  }

  #checkbox {
    margin-left: 15%;
    border: 1px solid rgb(179, 179, 179);
  }

  label {
    font-weight: lighter;
  }

  #label-div {
    margin-left: 20px;
    margin-right: 20px;
  }

  form {
    display: flex;
    justify-content: center;
  }

  #paragraph {
    padding-left: 20px;
    padding-right: 20px;
  }

  #check-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    margin-top: 20px;
    width: 30px;
    height: 30px;
    opacity: 0.8;
  }

  @media (min-width: 1601px) and (max-width: 2000px) {
    #newsletter {
      top: 15%;
      max-width: 40%;
    }
    #confirmation-popup {
      padding-left: 15px;
      padding-right: 15px;
    }
  }

  @media (min-width: 1151px) and (max-width: 1600px) {
    #newsletter {
      top: 15%;
      max-width: 50%;
    }
    #confirmation-popup {
      padding-left: 15px;
      padding-right: 15px;
    }
  }

  @media (min-width: 801px) and (max-width: 1150px) {
    #newsletter {
      top: 15%;
      max-width: 50%;
    }

    #confirmation-popup {
      padding-left: 15px;
      padding-right: 15px;
    }
  }

  @media (min-width: 651px) and (max-width: 800px) {
    #newsletter {
      top: 15%;
      max-width: 80%;
    }

    #checkbox {
      margin-bottom: 5%;
    }
    #confirmation-popup {
      padding-left: 15px;
      padding-right: 15px;
    }
  }

  @media (min-width: 591px) and (max-width: 650px) {
    #newsletter {
      top: 15%;
      max-width: 80%;
    }

    #checkbox {
      margin-bottom: 5%;
    }
    #confirmation-popup {
      padding-left: 15px;
      padding-right: 15px;
    }
  }

  @media (min-width: 461px) and (max-width: 590px) {
    #newsletter {
      top: 15%;
      max-width: 80%;
    }

    #checkbox {
      margin-bottom: 10%;
    }
    #confirmation-popup {
      padding-left: 15px;
      padding-right: 15px;
    }
  }

  @media (min-width: 451px) and (max-width: 460px) {
    #newsletter {
      top: 15%;
      max-width: 80%;
    }

    #checkbox {
      margin-bottom: 10%;
    }

    #popup-close {
      margin-top: 5px;
      margin-right: 90%;
    }

    #confirmation-popup {
      padding-left: 15px;
      padding-right: 15px;
    }
  }

  @media (min-width: 375px) and (max-width: 450px) {
    #newsletter {
      top: 10%;
      padding-bottom: 20px;
      max-width: 80%;
    }

    #popup-close {
      margin-top: 5px;
    }

    #checkbox {
      margin-bottom: 20%;
    }

    #confirmation-popup {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
</style>
