<template>
  <div>
    <project class="lg:mt-20 mt-10" title="WiWa - a wildlife crossing warning system" tags="Prototyping * RaspberryPi * ReDesign" imgSrc="./images/wiwa.png"
      description="WiWa is a sensor system attached to the delineator, which warns the driver both locally at danger spots and collects and analyses the data externally."/>
        <!-- Project component with img attribute, text, tags & links -->
  </div>
</template>
<script>
import project from "./Project.vue"

export default {
  components: {
    project,
  }
}
</script>
<style scoped>
</style>
