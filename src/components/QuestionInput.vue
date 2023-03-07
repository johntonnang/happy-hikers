<script>
  import CommonQuestions from './CommonQuestion.vue'

  export default {
    components: {
      CommonQuestions
    }
    /*
SEARCHBAR
    el: '#app',
    data: function () {
      return {
        questions: []
      }
    },
    methods: {
      onQuestionAdded(newQuestion) {
        // Add the new question to the list
        this.questions.push(newQuestion)
      }
    }*/
  }
</script>

<template>
  <div>
    <!--
    <div id="app">
      <question-list v-model="questions" @questionAdded="onQuestionAdded" />
    </div>
    -->

    <common-questions />
  </div>
</template>
