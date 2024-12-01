<template>
  <div id="app">
    <router-view></router-view>  <!-- Components will be displayed here -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* General styles */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
