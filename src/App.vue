<template>
  <div class="md:container md:mx-auto mt-10">
    <Header/>
    <MainPart/>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import MainPart from "./components/MainPart.vue"
export default {
  
  name: 'App',
  components: {
    Header,
    MainPart
  }
}
</script>
<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;

}
</style>
