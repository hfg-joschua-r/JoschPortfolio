<template>
  <div class="grid 2xl:gap-x-8 2xl:gap-y-4 gap-8 2xl:grid-cols-3 lg:grid-cols-4 grid-cols-2 grid-flow-row-dense" data-aos="fade-right">

    <div class="2xl:col-span-2 2xl:row-span-2 col-span-2 transform transition duration-500 hover:scale-105 opacity-70 hover:opacity-100" v-on:click="showText1 = !showText1" >
        <img class="w-full rounded-lg" src=" .\images\wiwa.png" alt="WiWa thumbnail">
        <div class="absolute top-0 left-0 px-6 py-4 container h-full" v-if="showText1">
          <h4 class="mb-1 lg:text-2xl sm:text-xl text-md tracking-tight text-white font-normal">WiWa - a wildlife crossing warning system</h4>
          <h5 class="primeHeader mb-1 sm:mb-3 lg:text-lg text-sm font-semibold tracking-tight">Prototyping * RaspberryPi * ReDesign </h5>
          <p class="leading-normal sm:text-lg text-sm text-gray-100 descriptionText 2xl:w-3/5">WiWa is a sensor system attached to the delineator, which warns the driver locally at danger spots and collects & analyses it externally.</p>
        <projectButton link="https://ausstellung.hfg-gmuend.de/w-2122/projekte/wiwa-ein-wildwechsel-warnsystem/studiengang:iot" title="Documentation & More" link2="https://youtu.be/rXBEbwPFTkE" title2="Video" class="lg:my-8 my-2"></projectButton>
  </div>
    </div>
    <div class="2xl:col-span-1 2xl:row-span-1 col-span-2 transform transition duration-500 hover:scale-105 opacity-70 hover:opacity-100" v-on:click="showText2 = !showText2">
      <img class="w-full rounded-lg" src=" .\images\remotegardening.png" alt="remoteGardening Thumbnail" />
      
      <div class="absolute top-0 left-0 px-6 py-4 container h-full" v-if="showText2">
          <h4 class="mb-1 lg:text-2xl sm:text-xl text-lg tracking-tight text-white font-normal">Remote Gardening</h4>
          <h5 class="primeHeader mb-1 sm:mb-3 lg:text-lg text-sm font-semibold tracking-tight">Arduino * RFID * full-stack</h5>
          <p class="leading-normal sm:text-lg text-sm text-gray-100 descriptionText">The Remote Gardening project was developed to ensure that your plants are always healthy and optimally watered, even while not being at home.</p>
        <projectButton link="https://portfolio.hfg-gmuend.de/s-2121/projekte/remote-gardening" title="Documentation & More" link2="https://vimeo.com/705445082" title2="Video" class="lg:my-6 my-2"></projectButton>
      </div>
    </div>
    <div class="2xl:col-span-1 2xl:row-span-1 col-span-2 transform transition duration-500 hover:scale-105 opacity-70 hover:opacity-100" v-on:click="showText3 = !showText3">
      <img class="w-full rounded-lg" src=" .\images\burgpilz.png" />
      <div class="absolute top-0 left-0 px-6 py-4 container h-full" v-if="showText3">
          <h4 class="mb-1 lg:text-2xl sm:text-xl text-lg tracking-tight text-white font-normal">Burgpilz - Ventilation control system</h4>
          <h5 class="primeHeader mb-1 sm:mb-3 lg:text-lg text-sm font-semibold tracking-tight">MQTT * Arduino * IoT</h5>
          <p class="leading-normal sm:text-lg text-sm text-gray-100 descriptionText">A ventilation control system to generate optimal climatic conditions for professionally  mushroom cultivation in organic quality.</p>
        <projectButton link="https://www.widerstandundsoehne.de/projekte/burgpilz-lueftungssteuerung" title="Learn more" link2="https://www.burgpilz.de/" title2="Burgpilz" class="lg:my-6 my-2"></projectButton>
      </div>
    </div>

    <div class="2xl:col-span-1 2xl:row-span-1 col-span-2 transform transition duration-500 hover:scale-105 opacity-70 hover:opacity-100" v-on:click="showText4 = !showText4">
      <img class="w-full rounded-lg" src=" .\images\etage.png" />
      <div class="absolute top-0 left-0 px-6 py-4 container h-full" v-if="showText4">
          <h4 class="mb-1 lg:text-2xl sm:text-xl text-lg tracking-tight text-white font-normal">Workshop instructor - e.tage</h4>
          <h5 class="primeHeader mb-1 sm:mb-3 lg:text-lg text-sm font-semibold tracking-tight">Arduino * Teaching * Media education</h5>
          <p class="leading-normal sm:text-lg text-sm text-gray-100 descriptionText">In the school holidays I run workshops teaching Arduino to 9-12 year olds. </p>
        <projectButton link="https://www.etage-ulm.de/digitalgestalten/digitales-feuerwerk" title="Last Workshop" link2="https://www.etage-ulm.de/home" title2="e.tage" class="lg:my-6 my-2"></projectButton>
      </div>
    </div>

    <div class="2xl:row-span-1 col-span-2 transform transition duration-500 hover:scale-105 opacity-70 hover:opacity-100 overflow-hidden" v-on:click="showText5 = !showText5">
      <img class="w-full rounded-lg object-cover" src=" .\images\fishing2.png" style="height:276px" />
      <div class="absolute top-0 left-0 px-6 py-4 container h-full" v-if="showText5">
          <h4 class="mb-1 lg:text-2xl sm:text-xl text-lg tracking-tight text-white font-normal">Data Visualisation: Fishing & Fish consumption</h4>
          <h5 class="primeHeader mb-1 sm:mb-3 lg:text-lg text-sm font-semibold tracking-tight">p5.js * data * design principles</h5>
          <p class="leading-normal sm:text-lg text-sm text-gray-100 descriptionText">In the course of the data visualisation course @HfG, we developed an interactive representation of the global fish catch and related it to fish consumption.</p>
        <projectButton link="https://portfolio.hfg-gmuend.de/s-2121/projekte/fischfang-fischkonsum" title="More info" link2="https://hfg-joschua-r.github.io/DarstellenSimulationFishing/" title2="Demo" class="lg:my-6 my-2"></projectButton>
      </div>
    </div> 
  </div>
</template>
<script>
import projectButton from "./projectButton.vue"

export default {
  components: {
    projectButton
  },
  data: () => ({
    showText1: false,
    showText2: false,
    showText3: false,
    showText4: false,
    showText5: false,
})
}
</script>
<style scoped>
.container {
  background-color: rgba(0,30,34, .9);
}
.descriptionText {
  font-family: "MaisonNeueLight";
}
</style>