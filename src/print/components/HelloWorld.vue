<template>
  <div class="hello">
    <img alt="Vue logo" src="../../assets/logo.png">
    <h1>print</h1>
     <router-link to="/print/go-back"> 测试跳转</router-link> 
     <a-component />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
a {
  color: #42b983;
}
</style>
