<template>
  <div class="grid grid-cols-3 sm:grid-rows-2 grid-rows-5">
    <h1 class="lg:text-7xl text-4xl primeHeader font-normal sm:mt-20 mt-10 col-span-2 sm:row-span-2 row-span-4">
      Hi, my name is Josch.
      <VueWriter :array="arr" :eraseSpeed="50" :typeSpeed="100" />
    </h1>
    <div class="sm:col-span-1 row-span-2 2xl:w-max w-auto mx-auto my-auto">
      <!-- <img src="../assets/img/pixelMe.png" class="mt-auto scale-125" /> -->
     <model/>      
    </div>
    <div class=" row-span-1 col-span-3 lg:text-2xl text-lg  text-white" data-aos="fade-right">
      <h4 >currently I’m studying<br>
      <b class="secondaryColor font-normal"
          >Digital product design & development </b
        >@HfG Schwäbisch Gmünd
        </h4>
    </div>
  </div>
</template>

<script>
import model from "./model.vue";
import AOS from "aos";
export default {
  components: {
     model
  },
  data() {
    return {
      arr: [
        "I'm a developer.",
        "I'm a designer.",
        "I do prototyping.",
        "I speak javaScript, C# and python.",
        "I'm a coder.",
      ],
    };
  },
  mounted() {
    AOS.init();
  },
};
</script>

<style>
.primeHeader {
  color: #4fb3bf;
}
</style>