<template>
  <div class="grid lg:gap-y-2 grid-cols-5 xl:grid-rows-5" data-aos="zoom-in">
    <div class="md:col-span-5 col-span-5 xl:row-span-1">
      <h1 class="title font-normal lg:text-5xl text-3xl text-left">
        {{ title }}
      </h1>
      <h1 class="primeHeader xl:mt-2 lg:text-xl text-lg text-left">
        {{ tags }}
      </h1>
    </div>

    <img
      :src="imgSrc"
      class="lg:w-full lg:col-span-3 col-span-5 xl:row-span-4 shadow-lg"
    />
    <div
      class="
        descriptionContainer
        lg:col-span-2
        col-span-5
        xl:row-span-4
        2xl:my-12
      "
    >
      <p
        class="
          mx-4
          lg:my-8
          my-4
          md:my-20 md:text-xl
          text-md text-white
          descriptionText
        "
      >
        {{ description }}
      </p>
      <project-button :link="link1" :title="buttonTitle" :link2="link2" :title2="buttonTitle2" class="mx-4 lg:my-auto my-2" />
    </div>
    
  </div>
</template>

<script >
import projectButton from "././projectButton.vue";
import AOS from "aos";

export default {
  props: {
    title: String,
    tags: String,
    imgSrc: String,
    description: String,
    buttonTitle: String,
    link1: String,
    link2: String,
    buttonTitle2: String

  },
  components: {
    projectButton,
  },
  mounted() {
    AOS.init({
      duration: 1000,
      offset: 200
    });
  },
};
</script>

<style>
.title {
  color: white;
}
.descriptionContainer {
  background-color: #00838f;
}
.descriptionText {
  font-family: "MaisonNeueLight";
}
</style>