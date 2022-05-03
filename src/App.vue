<template>
  <div class="md:container md:mx-auto mt-10 mx-4 root">
    <!-- Header part -->
    <div class="flex lg:justify-end justify-center"  data-aos="fade-left">
      <div>
        <p class="2xl:text-2xl text-lg mx-4 secondaryColor" @click="goto('projects')" >projects</p>
      </div>
      <div>
        <p class="2xl:text-2xl text-lg mx-4 secondaryColor" @click="goto('about-me')">about me</p>
      </div>
      <div>
        <p class="2xl:text-2xl text-lg mx-4 secondaryColor" @click="goto('contact')">contact</p>
      </div>
    </div>
    <!-- End of header part -->
    <MainPart class="xl:mt-20" />
    <p class="brackets 2xl:text-5xl text-3xl 2xl:-ml-24 -ml-2 xl:mt-64 mt-32" ref="projects">
      &lt;projects&gt;
    </p>
    <Projects />
    <p class="brackets 2xl:text-5xl text-3xl 2xl:-ml-24 -ml-2 mt-10">
      &lt;/projects&gt;
    </p>

    <p class="brackets 2xl:text-5xl text-3xl 2xl:-ml-24 -ml-2 xl:mt-12 mt-8" ref="about-me">
      &lt;about-me&gt;
    </p>
    <aboutMe />
    <p class="brackets 2xl:text-5xl text-3xl 2xl:-ml-24 -ml-2 mt-10">
      &lt;/about-me&gt;
    </p>

    <p class="brackets 2xl:text-5xl text-3xl 2xl:-ml-24 -ml-2 xl:mt-12 mt-8" ref="contact">
      &lt;contact&gt;
    </p>
    <contact />
    <p class="brackets 2xl:text-5xl text-3xl 2xl:-ml-24 -ml-2 mt-10">
      &lt;/contact&gt;
    </p>
  </div>
</template>

<script>
import MainPart from "./components/MainPart.vue";
import Projects from "./components/Projects.vue";
import aboutMe from "./components/aboutMe.vue";
import contact from "./components/contact.vue";
import AOS from "aos";

export default {
  name: "App",
  components: {
    MainPart,
    Projects,
    aboutMe,
    contact,
  },
  methods :{
     goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top);
    }
  },
  mounted() {
    AOS.init();
  },
};
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #001E22;
  margin-top: 60px;
}
.brackets {
  color: #00838f;
  font-family: "MaisonNeueMedium";
}
html {
  scroll-behavior: smooth;
}
</style>
