<template>
  <div class="weather-card" @click="goToDetails">
    <h3>{{ city }}</h3>
    <p>🌡️ {{ temp }}°C</p>
    <p>☁️ {{ condition }}</p>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  props: ['city', 'temp', 'condition'],
  setup(props) {
    const router = useRouter()

    const goToDetails = () => {
      router.push(`/weather/${props.city}`)
    }

    return { goToDetails }
  }
}
</script>

<style scoped>
.weather-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  background-color: #f0f9ff;
  cursor: pointer;
  transition: transform 0.2s;
}

.weather-card:hover {
  transform: scale(1.03);
}
</style>