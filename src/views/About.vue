<template>
  <div class="about-page">
    <h1>About</h1>
    <p>This is an app that tells you what the weather is like in a city you choose. It was built with Vue 3 and Pinia.</p>
    <p>Fun facts:</p>
    <ul>
      <li>Data is generated randomly</li>
      <li>Routing and dynamic routing (to prevent getting stuck on the same page)</li>
      <li>Pinia store for saving data and fetching it</li>
      <li>Binding, one-way and two-way</li>
      <li>Scoped styles and lifecycle hooks</li>
    </ul>
    <p>All in all, application for weather.</p>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about-page {
  padding: 20px;
  background-color: #f7f9fa;
  border-radius: 10px;
  line-height: 1.6;
}

.about-page h1 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.about-page ul {
  padding-left: 20px;
  margin-top: 10px;
}

.about-page li {
  margin-bottom: 5px;
}
</style>