<template>
  <div id="app">
  <div class="sidebar">
      <h2>範例</h2>
      <li> <router-link to="/todos">To Do List</router-link></li>
      <li><router-link to="/products/18">Product</router-link></li>
      <li><router-link to="/about">About</router-link></li>      
      <li><router-link to="/info">Information</router-link></li>      
  </div>
  <div class="content">
     <router-view/>
  </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.sidebar{
  width:30%;
  float:left;
}
.content{
  width:70%;
  float:right;
}
</style>
