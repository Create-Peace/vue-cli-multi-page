<template>
  <div class="goBack">
    <img alt="Vue logo" src="../../assets/logo.png">
    <h1>回退</h1>
    <button @click="goBack">回退</button>
  </div>
</template>
<script>
export default {
  name: 'GoBack',
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
button {
  color: #42b983;
}
</style>