<template>
  <h2 id="chart-header">Sales Breakdown by Product Category</h2>
  <div id="chart-container">
    <canvas ref="chartCanvas" style="height: 300px" />
  </div>
</template>

<script>
  import Chart from 'chart.js/auto'

  export default {
    data() {
      return {
        test: 10,
        test2: 15,
        backgroundColors: [
          '#012107',
          '#023B0D',
          '#036716',
          '#049220',
          '#05B929',
          '#04D32D'
        ]
        // backgroundColors: [
        //   'rgba(27, 26, 28, 0.7)',
        //   'rgba(27, 26, 28, 0.7)',
        //   'rgba(27, 26, 28, 0.7)',
        //   'rgba(27, 26, 28, 0.7)',
        //   'rgba(27, 26, 28, 0.7)',
        //   'rgba(27, 26, 28, 0.7)'
        // ]
      }
    },
    mounted() {
      const chartData = {
        labels: [
          'Shoes',
          'Backpacks',
          'Equipment',
          'Jackets',
          'Women Clothing',
          'Men Clothing'
        ],
        datasets: [
          {
            label: '',
            backgroundColor: this.backgroundColors,
            data: [3, 4, 5, 6, 7, 8]
          }
        ]
      }
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              fontStyle: 'italic'
            }
          }
        }
      }
      const chartCanvas = this.$refs.chartCanvas

      this.chart = new Chart(chartCanvas, {
        type: 'bar',
        data: chartData,
        options: chartOptions
      })
    },
    beforeUnmount() {
      this.chart.destroy()
    }
  }
</script>

<style>
  #chart-header {
    text-align: center;
    width: 70%;
    padding-bottom: 5px;
    font-weight: 400;
  }

  #chart-container {
    width: 70%;
  }

  @media (max-width: 1600px) {
    #chart-container {
      width: 90%;
    }
    #chart-header {
      width: 90%;
    }
  }

  @media (max-width: 960px) {
    #chart-container {
      width: 100%;
    }
    #chart-header {
      width: 100%;
    }
  }

  @media (max-width: 760px) {
    #chart-container {
      padding-bottom: 25px;
      border-bottom: 1px solid black;
    }
  }
</style>
