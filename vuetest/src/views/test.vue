<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>h2 1</h2>
    <h2>h2 2</h2>
  </div>
</template>

<script>
export default {
  name: 'wu test',
  data () {
    return {
      msg: 'Welcome to WuScar\'s Vue Test Web!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
