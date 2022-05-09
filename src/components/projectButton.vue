<template>
  <div class="flex">
    <a :href="link" target="_blank">
      <button
        class="
          buttonClass
          font-semibold
          sm:text-base
          text-sm
          hover:text-white
          py-2
          px-4
          hover:border-transparent
          rounded
        "
      >
        {{ title }}
      </button>
    </a>

    <a :href="link2" target="_blank">
      <button
        class="
          mx-4
          buttonClass
          font-semibold
          sm:text-base
          text-sm
          hover:text-white
          py-2
          px-4
          hover:border-transparent
          rounded
        "
        v-if="title2 != ''"
      >
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
};
</script>

<style>
.buttonClass {
  background-color: transparent;
  border: 2px #d9b5a0 solid;
  color: #d9b5a0;
}
.buttonClass:hover {
  background-color: #d9b5a0;
}
</style>