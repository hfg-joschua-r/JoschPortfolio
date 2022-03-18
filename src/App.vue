<template>
  <div class="md:container md:mx-auto mt-10 mx-2 ">
    <Header/>
    <MainPart/>
    <p class="brackets 2xl:text-5xl text-xl -ml-8 mt-64">&lt;projects&gt;</p>
      
    <Projects class=""/>
    <p class="brackets 2xl:text-5xl text-xl -ml-8">&lt;/projects&gt;</p>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import MainPart from "./components/MainPart.vue"
import Projects from './components/Projects.vue'
export default {
  
  name: 'App',
  components: {
    Header,
    MainPart,
    Projects
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
.brackets {
    color: #00838F;
    font-family: 'MaisonNeueMedium';
}
</style>
