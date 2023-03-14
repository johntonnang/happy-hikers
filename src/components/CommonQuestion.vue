<script>
  export default {
    data() {
      //Add new questions
      return {
        questions: [],
        newQuestion: ''
      }
    },
    methods: {
      addQuestion() {
        if (this.newQuestion) {
          this.questions.push(this.newQuestion)
          this.newQuestion = ''
        }
      }
    }
    // Add new questions ^^^
    /*

    SEARCHBAR

    props: ['questions'],
    data() {
      return {
        newQuestion: '' // Store the new question input value
      }
    },
    methods: {
      addQuestion() {
        // Emit the new question to the parent component
        this.$emit('questionAdded', this.newQuestion)
        // Clear the input field
        this.newQuestion = ''
      }
    }*/
  }
</script>

<template>
  <!---
  SEARCHBAR
  <div>
    <ul>
      <li v-for="(question, index) in questions" :key="index">
        {{ question }}
      </li>
    </ul>
    <form @submit.prevent="addQuestion">
      <label for="new-question">New Question:</label>
      <input id="new-question" v-model="newQuestion" />
      <button type="submit">Add Question</button>
    </form>
  </div>
-->
  <ol class="container">
    <h2>Common Questions</h2>
    <li class="question1 question">
      <p class="questionTitel">
        <strong> How can I order?</strong>
      </p>
      <p>
        You can order easily using our online platform. When you find a product
        you need, you can add it to cart, login and go through the ordering
        process. After the order is ready, you will receive order summary to
        your email. Order summary will also be stored to your account. You can
        also easily make reorders afterwards by clicking the “reorder” button on
        any of your previously made orders. After clicking the “reorder” button
        the cart will open and you can change quantities or products.
      </p>
    </li>
    <li class="question2 question">
      <p class="questionTitel">
        <strong> Why should I buy online?</strong>
      </p>
      <p>
        Speeding up the process. By ordering online you will you will get prices
        faster and you will be able to go through order confirmation and payment
        process much faster. This could save days of your time. Traceability:
        You will have easy access to all of your previous orders any time you
        want. Reordering: you can make a re-order anytime based on your previous
        orders by only couple of clicks. This will save time and effort as you
        don’t need to go through all the documents and emails from the past.
      </p>
    </li>
    <li class="question3 question">
      <p class="questionTitel">
        <strong> What information should I input when ordering?</strong>
      </p>
      <p>
        our online ordering system will ask for all the important information
        you should submit. If you have a VAT number, please remember to submit
        it. This will make sure the shipment is not delayed because of the lack
        of VAT number
      </p>
    </li>
    <li class="question4 question">
      <p class="questionTitel">
        <strong> What payment methods can I use? </strong>
      </p>
      <p>You can use all the major credit cards.</p>
    </li>
    <li class="question5 question">
      <p class="questionTitel">
        <strong> What should I do if the payment is not accepted? </strong>
      </p>
      <p>
        A: Please try again in a little while. If the payment is still not
        accepted, please verify your account balance. If everything is as it
        should, but you still can't make the payment, please contact
        happy@hikers.se notify us about the problem. We can manage the order
        manually.
      </p>
    </li>
    <li class="question6 question">
      <p class="questionTitel">
        <strong>How can I change delivery address? </strong>
      </p>
      <p>
        A: Sign in to your account and go to “my account”. On “my account” you
        can change all your contact information.
      </p>
    </li>
    <li class="question7 question">
      <p class="questionTitel">
        <strong>What are the delivery charges?</strong>
      </p>
      <p>
        Delivery charges are dependent on the shipment requirements. If the
        products on your order are due to special requirements (for example dry
        ice) extra fee will be added to the shipment charges. You can see the
        shipping fees on the checkout process before the payment is made.
      </p>
    </li>
    <li
      v-for="question in questions"
      :key="question"
      class="question7 question"
    >
      <strong>{{ question }}</strong>
    </li>
  </ol>

  <!--Add new questions-->
  <div class="addQuestions">
    <h2>Add new Questions</h2>
    <p>We will answer them as soon as we have the opportunity</p>
    <div>
      <input type="text" v-model="newQuestion" @keydown.enter="addQuestion" />
      <button @click="addQuestion">Add Question</button>
    </div>
  </div>
</template>

<style scoped>
  main {
    padding-left: 2rem;
  }
  .container {
    padding: 2rem;
    padding-top: 5rem;
    padding-left: 8rem;
    padding-right: 8rem;
  }
  h2 {
    padding: 1rem;
  }
  .questionTitel {
    margin: 0;
  }
  .question {
    padding: 1rem;
  }
  .addQuestions {
    padding-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media screen and (max-width: 700px) {
    .container {
      padding: 2rem;
      padding-top: 3rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
</style>
