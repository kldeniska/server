<template>
  <div>
      <NavComp/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavComp from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    NavComp
  }
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #B3A16C;


}
body{
  margin: 0;
  max-width: 1170px;
  margin: 0px auto;
  background-color: #B3A16C;
}
</style>
