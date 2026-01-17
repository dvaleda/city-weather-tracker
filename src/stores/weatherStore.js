import { defineStore } from 'pinia'

const ALLOWED_CITIES = ['Zagreb', 'Split', 'Rijeka', 'Osijek', 'Zadar', 'Pula', 'Dubrovnik', 'Šibenik']

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    cities: [],
    loading: false,
    error: null
  }),

  getters: {
    cityCount: (state) => state.cities.length
  },

  actions: {
    async fetchWeather(city) {
        this.loading = true
        this.error = null

        try {
            await new Promise(resolve => setTimeout(resolve, 600))

            const normalizedCity = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()

            if (!ALLOWED_CITIES.includes(normalizedCity)) {
                throw new Error('Invalid city')
            }

            const mockData = {
                city: normalizedCity,
                temp: Math.floor(Math.random() * 30),
                condition: ['Sunny', 'Cloudy', 'Rainy'][Math.floor(Math.random() * 3)]
            }

            if (!this.cities.find(c => c.city === normalizedCity)) {
                this.cities.push(mockData)
            }
        } catch {
            this.error = 'This city is not supported. Please enter a valid city name.'
        } finally {
            this.loading = false
        }
    }
  }
})