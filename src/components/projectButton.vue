<template>
<div class="flex">
<button :href="link" class="buttonClass hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded">
  {{ title }}
</button>
<button :href="link2" class="mx-4 buttonClass hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded">
  {{ title2 }}
</button>
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