<template>
  <div>
    <project class="lg:mt-10 mt-14" title="WiWa - a wildlife crossing warning system" tags="Prototyping * RaspberryPi * ReDesign" imgSrc="./images/wiwa.png"
      link1="https://ausstellung.hfg-gmuend.de/w-2122/projekte/wiwa-ein-wildwechsel-warnsystem/studiengang:iot" buttonTitle="Documentation & More" link2="https://youtu.be/rXBEbwPFTkE" buttonTitle2="Video" description="WiWa is a sensor system attached to the delineator, which warns the driver both locally at danger spots and collects and analyses the data externally."/>
        <!-- Project component with img attribute, text, tags & links -->
    <project-right-align class="lg:mt-24 mt-14" title="Burgpilz - Ventilation control system" tags="MQTT * Arduino * IoT" imgSrc="./images/burgpilz.png"
    link1="https://www.widerstandundsoehne.de/projekte/burgpilz-lueftungssteuerung" buttonTitle="Learn more" link2="https://www.burgpilz.de/" buttonTitle2="Burgpilz" description="A ventilation control system to generate optimal climatic conditions for professionally  mushroom cultivation in organic quality."/>
    <project class="lg:mt-24 mt-14" imgSrc="./images/remotegardening.png" title="Remote Gardening" tags="Arduino * RFID * Full-Stack" link1="https://portfolio.hfg-gmuend.de/s-2121/projekte/remote-gardening" buttonTitle="Documentation & More" link2="https://vimeo.com/705445082" buttonTitle2="Video" description="Who takes care of my plants when I am not at home or on holiday? The Remote Gardening project was developed to ensure that your plants are always healthy and optimally watered: The smart bed can be controlled from anywhere and networked with friends."/>
  
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
