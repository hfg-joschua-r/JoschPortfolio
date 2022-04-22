<template>
  <div class="md:container md:mx-auto mt-10 mx-4 root">
    <Header/>
    <MainPart class="xl:mt-20"/>
    <p class="brackets 2xl:text-5xl text-3xl 2xl:-ml-24 -ml-2 xl:mt-64 mt-32">&lt;projects&gt;</p>
    <Projects class=""/>
    <p class="brackets 2xl:text-5xl text-3xl 2xl:-ml-24 -ml-2 mt-10">&lt;/projects&gt;</p>
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
