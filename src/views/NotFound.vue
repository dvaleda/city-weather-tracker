<template>
  <div class="notfound-page">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
    <router-link to="/">Go back home</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.notfound-page {
  text-align: center;
  padding: 50px 20px;
  color: #c0392b;
}

.notfound-page h1 {
  font-size: 80px;
  margin: 0;
}

.notfound-page h2 {
  margin: 10px 0 20px 0;
  font-size: 28px;
}

.notfound-page p {
  font-size: 16px;
  margin-bottom: 20px;
}

.notfound-page a {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}

.notfound-page a:hover {
  text-decoration: underline;
}
</style>