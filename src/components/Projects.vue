<template>
  <div>
    <project class="lg:mt-10 mt-14" title="WiWa - a wildlife crossing warning system" tags="Prototyping * RaspberryPi * ReDesign" imgSrc="./images/wiwa.png"
      link1="https://hfg-gmuend.de" buttonTitle="Documentation & More" link2="https://youtube.de" buttonTitle2="Video" description="WiWa is a sensor system attached to the delineator, which warns the driver both locally at danger spots and collects and analyses the data externally."/>
        <!-- Project component with img attribute, text, tags & links -->
    <project-right-align class="lg:mt-24 mt-14" title="Burgpilz - Ventilation control system" tags="MQTT * Arduino * IoT" imgSrc="./images/wiwa.png"
    link1="https://hfg-gmuend.de" buttonTitle="Documentation & More" link2="https://youtube.de" buttonTitle2="Video" description="A ventilation control system to generate optimal climatic conditions for professionally  mushroom cultivation in organic quality."/>
  </div>
</template>
<script>
import project from "./Project.vue"
import projectRightAlign from "./ProjectRightAlign.vue"

export default {
  components: {
    project,
    projectRightAlign,
  }
}
</script>
<style scoped>
</style>
