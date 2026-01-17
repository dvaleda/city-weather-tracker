<template>
  <div class="search-bar">
    <input type="text" v-model="cityInput" placeholder="Enter city" />
    <button @click="submitCity">Search</button>
  </div>
</template>

<script>
export default {
  data() { return { cityInput: '' } },
  methods: {
    submitCity() {
      if (this.cityInput.trim() !== '') {
        this.$emit('search', this.cityInput)
        this.cityInput = ''
      }
    }
  }
}
</script>

<style scoped>
.search-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.search-bar input {
  padding: 8px;
  font-size: 1em;
  width: 60%;
  border-radius: 5px 0 0 5px;
  border: 1px solid #ccc;
  outline: none;
}

.search-bar button {
  padding: 8px 15px;
  font-size: 1em;
  border: 1px solid #42b983;
  background-color: #42b983;
  color: white;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: background-color 0.2s;
}

.search-bar button:hover {
  background-color: #369a6e;
}
</style>