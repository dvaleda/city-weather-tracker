<template>
  <div class="weather-details">
    <h1>Weather Details</h1>

    <div v-if="loading">Loading...</div>

    <div v-if="error">
      <p style="color:red">{{ error }}</p>
      <router-link to="/">← Back to Home</router-link>
    </div>

    <div v-if="cityData">
      <h2>{{ cityData.city }}</h2>
      <p>🌡️ Temperature: {{ cityData.temp }}°C</p>
      <p>☁️ Condition: {{ cityData.condition }}</p>
    </div>
  </div>
</template>

<script>
import { useWeatherStore } from '../stores/weatherStore'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const weatherStore = useWeatherStore()

    const cityData = ref(null)
    const error = ref(null)

    onMounted(async () => {
      try {
        await weatherStore.fetchWeather(route.params.city)

        cityData.value = weatherStore.cities.find(
          c => c.city.toLowerCase() === route.params.city.toLowerCase()
        )

        if (!cityData.value) {
          error.value = 'City not found'
        }
      } catch {
        error.value = 'City not found'
      }
    })

    return {
      cityData,
      error,
      loading: weatherStore.loading
    }
  }
}
</script>

<style scoped>
.weather-details {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f0f9ff;
  border-radius: 10px;
  text-align: center;
}
</style>