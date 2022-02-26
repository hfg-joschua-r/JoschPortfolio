<template>
  <div class="grid grid-cols-3 grid-rows-2">
    <h1 class="2xl:text-8xl primeHeader font-normal mt-20 col-span-2">
      Hi, my name is Josch.
    </h1>
    <div class="col-span-1 row-span-2 w-max mt-auto">
      <img src="../assets/img/pixelMe.png" class="mt-auto scale-125" />
    </div>
    <h1 class="2xl:text-8xl primeHeader mt-4 col-span-2">
      <VueWriter :array="arr" :eraseSpeed="50" :typeSpeed="100"/></h1>
    <div class="col-span-3">
      <h4 class="text-2xl text-white">currently I’m studying</h4>
    </div>
    <div class="text-2xl text- col-span-2">
      <p class="text-white">
        <b class="secondaryColor font-normal">Digital product design & development </b>@HfG Schwäbisch Gmünd</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["I'm a developer.", "I'm a designer.", "I do prototyping."]
    }
  }
};
</script>

<style>
.primeHeader {
  color: #4fb3bf;
}
</style>