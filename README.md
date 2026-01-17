1. interpolation/one-way binding - Da, src/components/WeatherCard.vue, :3–10, prikazuje city, temp, condition
2. two-way binding - Da, src/components/SearchBar.vue, :6–8, v-model="cityInput"
3. methods - Da, src/components/SearchBar.vue, :9–13, submitCity(); src/views/Home.vue, :22–25, handleSearch()
4. computed properties - Da, src/views/Home.vue, :26–28, reactive cityCount preko weatherStore.cities.length
5. scoped styles - Da, src/components/WeatherCard.vue, :13–27; src/components/SearchBar.vue, :14–33; src/views/About.vue, :16–36
6. lifecycle hook - Da, src/views/Home.vue, :20–22, onMounted(); src/views/WeatherDetails.vue, :12–16, onMounted()
7. routing (više stranica) - Da, src/router/index.js, :10–22, Home, WeatherDetails, About, NotFound
bookmarkable routing - Da, /weather/:city i /about rade direktno u browseru
dynamic routing + 404 catch-all - Da, src/router/index.js, :18–22, catch-all ruta NotFound.vue
8. stateless komponenta (props) - Da, src/components/WeatherCard.vue, :3–10, prima city, temp, condition
stateful komponenta - Da, src/components/SearchBar.vue, :6–8, data() cityInput; Pinia store src/stores/weatherStore.js
9. emit event - Da, src/components/SearchBar.vue, :10–12, emit 'search'; src/views/Home.vue, :22–25, listener handleSearch()
10. Pinia store - Da, src/stores/weatherStore.js, :6–28, state: cities/loading/error; actions fetchWeather()
11. async dohvat podataka - Da, src/stores/weatherStore.js, :10–24, mock async fetch sa Promise i setTimeout
lazy loading - Da, src/router/index.js, :7–9, WeatherDetails.vue i About.vue lazy loaded
loading / error prikaz - Da, src/views/Home.vue, :13–16, <div v-if="weatherStore.loading">Loading...</div>, <div v-if="weatherStore.error">
