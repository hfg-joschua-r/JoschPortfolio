<template>
  <div class="grid grid-cols-5 sm:grid-rows-5">
    <div class="sm:col-span-3 col-span-5 row-span-1">
      <h1 class="title font-normal xl:text-5xl text-xl">{{ title }}</h1>
      <h1 class="primeHeader xl:mt-2 xl:text-xl text-md">{{ tags }}</h1>
    </div>
    <img :src="imgSrc" class="lg:w-full  sm:col-span-3 col-span-5 sm:row-span-4 row-span-1 shadow-lg"/>
    <div class="descriptionContainer sm:col-span-2 col-span-5 sm:row-span-4 row-span-1 sm:my-20 ">
        <p class="mx-4 my-8 sm:my-20 sm:text-xl text-md text-white descriptionText">
            {{ description }}
        </p>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    title: String,
    tags: String,
    imgSrc: String,
    description: String,
    link1: String,
  },
};
</script>

<style>
.title {
  color: white;
}
.descriptionContainer {
    background-color: #00838F;
}
.descriptionText {
    font-family: 'MaisonNeueLight';
}
</style>