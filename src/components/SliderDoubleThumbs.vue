<script>
  export default {
    emits: ['values-updated'],
    data() {
      return {
        minValue: 0,
        maxValue: 1750
      }
    },
    methods: {
      updateValues() {
        this.$emit('values-updated', this.minValue, this.maxValue)
      }
    },
    watch: {
      minValue() {
        this.updateValues()
      },
      maxValue() {
        this.updateValues()
      }
    }
  }
</script>

<template>
  <div class="value-container">
    <div class="min-value numberVal">
      <span> {{ minValue }} </span>
    </div>
    <div class="max-value numberVal">
      <span> {{ maxValue }} </span>
    </div>
  </div>
  <div class="container">
    <div class="range-slider">
      <div class="progress" />
      <input
        type="range"
        class="range-min"
        min="0"
        max="2500"
        v-model="minValue"
      />
      <input
        type="range"
        class="range-max"
        min="0"
        max="2500"
        v-model="maxValue"
      />
    </div>
  </div>
</template>

<style scoped>
  .value-container {
    display: flex;
    font-size: 1.1em;
    font-weight: 600;
    margin-top: 20px;
    color: var(--text-primary-dark);
  }

  .max-value {
    margin-left: auto;
  }
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 35px;
    background: white;
    border-radius: 20px;
  }
  .container .range-slider {
    position: relative;
    width: 100%;
    height: 5px;
    /* background: rgb(0, 0, 0); */
    background: var(--text-primary-dark);
    outline: none;
    top: 1px;
    margin: 10px;
  }

  .container .range-slider .progress {
    left: 25%;
    right: 25%;
    height: 100%;
    /* background: rgb(0, 0, 0); */
    background: var(--text-primary-dark);
    border-radius: 50px;
    position: absolute;
  }

  .container .range-slider input[type='range'] {
    position: absolute;
    top: -8px;
    left: -5px;
    width: 104%;
    -webkit-appearance: none;
    pointer-events: none;
    background: none;
    outline: none;
  }

  .container .range-slider input::-webkit-slider-thumb {
    pointer-events: auto;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    /* background: rgb(0, 0, 0); */
    background: var(--text-primary-dark);
    border-radius: 50px;
  }

  input::-webkit-slider-thumb:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px black;
  }
</style>
