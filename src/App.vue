<template>
  <div id="app">
     <div class="nav">
      <div>
        <router-link to="/1">1</router-link>
      </div>
      <div><router-link to="/2">2</router-link></div>
      <div><router-link to="/3">3</router-link></div>
      <div><router-link to="/4">4</router-link></div>
     </div>
      <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';


export default {
  name: 'App',
  components: {
    RouterView
}
}
</script>

<style>
#app {
  display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
  }
.nav{
  width:200px ;
  display: flex;

  justify-content: space-between;
}
</style>
