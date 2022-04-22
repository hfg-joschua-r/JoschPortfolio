<template>
<div class="flex">
<a :href="link">
<button  class="buttonClass hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded">
  {{ title }}
</button>
</a>

<a :href="link2">
<button class="mx-4 buttonClass hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded" v-if="title2 != ''">
  {{ title2 }}
</button>
</a>
</div>
</template>

<script>
export default {
 props: {
    title: String,
    link: String,
    title2: String,
    link2: String,
  },
}
</script>

<style>
.buttonClass {
  background-color: transparent;
  border: 2px #D9B5A0 solid;
  color: #D9B5A0
}
.buttonClass:hover {
  background-color: #D9B5A0;
}
</style>