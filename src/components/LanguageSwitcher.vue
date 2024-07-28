<template>
  <div>
    <button @click="switchLanguage('es')">Español</button>
    <button @click="switchLanguage('qu')">Quechua</button>
  </div>
</template>

<script>
export default {
  methods: {
    switchLanguage(lang) {
      this.$emit('change-language', lang);
    }
  }
}
</script>

<style scoped>
button {
  margin: 5px;
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
