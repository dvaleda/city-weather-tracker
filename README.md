1. interpolation/one-way binding - Da, src/components/WeatherCard.vue, :3–5, interpolacija se koristi za prikaz podataka proslijeđenih preko propsa
2. two-way binding - Da, src/components/SearchBar.vue, :3, v-model="cityInput" varijabla cityInput je dvosmjerno povezana s input poljem putem v-model
3. methods - Da, src/components/SearchBar.vue, :12, submitCity()
4. computed properties - Da, src/views/Home.vue, :47, computed svojstvo hasCities
5. scoped styles - Da, src/components/WeatherCard.vue, :26; src/components/SearchBar.vue, :22; src/views/About.vue, :23; src/views/Home.vue, :54
6. lifecycle hook - Da, src/views/Home.vue, :39, onMounted(); src/views/WeatherDetails.vue, :33, onMounted() lifecycle hook se koristi za inicijalni dohvat podataka
7. routing (više stranica) - Da, src/router/index.js, :9–13, definirane rute: /, /about, /weather/:city
bookmarkable routing - Da, src/router/index.js, :17 createWebHistory() i rute rade direktno u browseru (npr. /weather/Zagreb)
dynamic routing + 404 catch-all - Da, src/router/index.js, :13, nevažeće rute vode na 404 stranicu
8. stateless komponenta (props) - Da, src/components/WeatherCard.vue, :3–18, koristi props (city, temp, condition) i nema vlastito stanje
stateful komponenta - Da, src/components/SearchBar.vue, :3-15, koristi lokalni state cityInput
9. emit event - Da, src/components/SearchBar.vue, :14, event search emitira se roditeljskoj komponenti (Home.vue)
10. Pinia store - Da, src/stores/weatherStore.js, :5–44, globalno stanje (cities, loading, error) i fetchWeather()
11. async dohvat podataka - Da, src/stores/weatherStore.js, :17, :22, podaci su mockani u memoriji, ali dohvat je asinkron
lazy loading - Da, src/router/index.js, :6-7, WeatherDetails i About se učitavaju po potrebi (lazy loading)