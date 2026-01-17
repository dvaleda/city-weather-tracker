<template>
  <div id="app">
    <header>
      <h1>City Weather Tracker</h1>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>Vue SPA</p>
    </footer>
  </div>
</template>

<script>
export default { name: 'App' }
</script>

<style>
#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

header {
  text-align: center;
  margin-bottom: 20px;
}

header h1 {
  margin-bottom: 5px;
  color: #2c3e50;
}

nav a {
  text-decoration: none;
  color: #42b983;
  margin: 0 10px;
}

nav a.router-link-active {
  font-weight: bold;
}

footer {
  text-align: center;
  margin-top: 40px;
  font-size: 0.9em;
  color: #888;
}
</style>