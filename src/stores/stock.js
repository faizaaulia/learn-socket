import { defineStore } from 'pinia'
import { socket } from '../../socket'

export const useStockStore = defineStore('store', {
  state: () => ({
    stockData: {
      labels: [],
      datasets: []
    }
  }),
  actions: {
    fillData(fetchedData) {
      this.stockData = {
        labels: [this.getRandomChartValues(fetchedData), this.getRandomChartValues(fetchedData)],
        datasets: [
          {
            label: 'Google Stock',
            backgroundColor: '#1A73E8',
            data: [this.getRandomChartValues(fetchedData), this.getRandomChartValues(fetchedData)]
          },
          {
            label: 'Microsoft Stock',
            backgroundColor: '#2b7518',
            data: [this.getRandomChartValues(fetchedData), this.getRandomChartValues(fetchedData)]
          }
        ]
      }
    },
    getStockData() {
      socket.on('newdata', (fetchedData) => {
        this.fillData(fetchedData)
      })
    },
    getRandomChartValues(number) {
      return Math.floor(Math.random() * number)
    }
  }
})
