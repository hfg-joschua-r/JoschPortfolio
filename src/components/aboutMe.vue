<template>
  <div class="grid gap-y-2 grid-cols-5 mt-8" data-aos="flip-right" data-aos-offset="400">
    <div class="lg:col-span-3 col-span-5 container">
      <p class="text-xl text-white mx-4 my-6 text-light">
        <i>Hello! My name is Joschua and I enjoy creating things that simultaneouly
        live on the internet and in the real world.</i> <br><br> I got into programming
        during a year-round internship in 2016. During this time I first learned 
        how to program <b>Arduino and C++,</b> later on I focused on <b>Unity and VR development.</b><br>
        After I finished my A-levels in 2019, I completed an internship as a software
        developer at Widerstand und Söhne in Ulm, where I got deeper into <a>C#, Unity and Nodejs.</a><br>
        I am currently studying <a href="https://www.hfg-gmuend.de/studium/internet-der-dinge">digital product design and development</a> at the HfG in Schwäbisch Gmünd.        
      </p>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
export default {
  mounted() {
    AOS.init({
      duration: 1000,
    });
  },
};
</script>

<style>
.container {
  background-color: #00838f;
  
}
</style>