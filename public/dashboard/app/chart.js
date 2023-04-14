/* eslint-disable no-undef */
const chartElement = document.getElementById('chart-line').getContext('2d')

const portfolioChart = new Chart(chartElement, {
  type: 'pie',
  data: {
    labels: ['NFT', 'TOKENs'],
    datasets: [{
      backgroundColor: ['Purple', 'Yellow'],
      data: [totalNFTs, totalTokens]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Your Portfolio'
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true
      }
    }
  }

})

const chartElement2 = document.getElementById('chart-line2').getContext('2d')

const transactionsChart = new Chart(chartElement2, {
  type: 'bar',
  data: {
    labels: ['NFT Transfers', 'Token Transfers', 'Native Transactions'],
    datasets: [{
      label: 'Transactions',
      backgroundColor: ['red', 'blue', 'green'],
      data: [totalNftTransfers, totalTokenTransfers, totalNativeTransactions]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Transactions Report'
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    }
  }

})
