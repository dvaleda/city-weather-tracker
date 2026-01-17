<template>
  <div>
    <SearchBar @search="handleSearch" />

    <p v-if="hasCities">
      Total cities tracked: {{ weatherStore.cityCount }}
    </p>

    <div v-if="weatherStore.loading">Loading...</div>
    <div v-if="weatherStore.error" style="color:red">
    {{ weatherStore.error }}  
    <p>Supported cities: Zagreb, Split, Rijeka, Osijek, Zadar, Pula, Dubrovnik, Šibenik</p>
    </div>

    <div class="cards-container">
      <WeatherCard
        v-for="city in weatherStore.cities"
        :key="city.city"
        :city="city.city"
        :temp="city.temp"
        :condition="city.condition"
      />
    </div>
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
import WeatherCard from '../components/WeatherCard.vue'
import { useWeatherStore } from '../stores/weatherStore'
import { onMounted, computed } from 'vue'

export default {
  components: { SearchBar, WeatherCard },

  setup() {
    const weatherStore = useWeatherStore()

    onMounted(() => {
      weatherStore.fetchWeather('Zagreb')
    })

    const handleSearch = (city) => {
      weatherStore.fetchWeather(city)
    }

    const hasCities = computed(() => weatherStore.cities.length > 0)

    return { weatherStore, handleSearch, hasCities }
  }
}
</script>

<style scoped>
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}
</style>