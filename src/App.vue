<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li><router-link to="/">/</router-link></li>
      <li><router-link to="/first">/first</router-link></li>
        <ol>
          <li><router-link :to="{name: 'firstFirst', params: {id: 123}}">/first</router-link></li>
          <li><router-link to="/first/second">/second</router-link></li>
        </ol>
      <li><router-link to="/second">/second</router-link></li>
    </ul>
    <router-view></router-view>

    <p>{{ $route.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'app'
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
</style>
