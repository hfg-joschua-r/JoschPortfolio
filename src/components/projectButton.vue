<template>
<div class="flex lg:justify-end justify-center">
<button :href="link" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  {{ title }}
</button>
</div>
</template>

<script>
export default {
 props: {
    title: String,
    link: String,
  },
}
</script>

<style>

</style>