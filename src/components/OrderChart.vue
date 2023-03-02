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
        Shoes: [],
        Backpacks: [],
        jacketsWoman: [],
        jacketsMan: [],
        backgroundColors: ['#012107', '#023B0D', '#036716', '#049220']
      }
    },
    mounted() {
      const orders = JSON.parse(localStorage.getItem('Orders'))
      const products = orders.flat()
      products.forEach((product) => {
        switch (product.category) {
          case 'Shoes':
            this.Shoes.push(product)
            break
          case 'Backpack':
            this.Backpacks.push(product)
            break
          case "Men's jacket":
            this.jacketsMan.push(product)
            break
          case "Women's jacket":
            this.jacketsWoman.push(product)
            break
          default:
            break
        }
      })

      const chartData = {
        labels: ['Shoes', 'Backpacks', "Men's jacket", "Women's jacket"],
        datasets: [
          {
            label: '',
            backgroundColor: this.backgroundColors,
            data: [
              this.Shoes.length,
              this.Backpacks.length,
              this.jacketsMan.length,
              this.jacketsWoman.length
            ]
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
