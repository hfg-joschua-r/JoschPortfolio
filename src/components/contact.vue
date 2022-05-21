<template>
  <div class="grid gap-y-2 grid-cols-5">
    <form
      class="
        w-full
        col-span-5
        sm:col-span-3
        lg:col-span-2
        max-w-lg
        container
        mt-8
        form
        rounded-sm
      "
      ref="form"
      @submit.prevent="sendEmail"
      data-aos="fade-right"
      
    >
      <div class="flex flex-wrap mx-2 mb-4 mt-2">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-4">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-white text-xs
              font-bold
              mb-1
            "
            for="grid-first-name"
          >
            name
          </label>
          <input
            class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-700
              border
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none focus:bg-white
            "
            id="grid-first-name"
            type="text"
            name="user_name"
          />
        </div>
      </div>
      <div class="flex flex-wrap mx-2 mb-4">
        <div class="w-full px-3">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-white text-xs
              font-bold
              mb-1
            "
            for="grid-password"
          >
            E-mail
          </label>
          <input
            class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-700
              border border-gray-200
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500
            "
            id="email"
            type="email"
            name="user_email"
          />
        </div>
      </div>
      <div class="flex flex-wrap mx-2 mb-2">
        <div class="w-full px-3">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-white text-xs
              font-bold
              mb-1
            "
            for="grid-password"
          >
            Message
          </label>
          <textarea
            class="
              no-resize
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-700
              border border-gray-200
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500
              h-48
              resize-none
            "
            id="message"
            name="message"
          ></textarea>
        </div>
      </div>
      <div class="md:flex md:items-center grid grid-cols-5">
        <div class="md:w-1/5 grid-cols-4">
          <button
            class="
              buttonClass
              font-semibold
              hover:text-white
              py-2
              px-4
              hover:border-transparent
              rounded
              mx-5
              mb-4
            "
            type="submit"
          >
            Send
          </button>
        </div>
      </div>
    </form>

    <div class="sm:col-span-2 lg:col-span-3 col-span-5 mx-auto">
      <modelMail></modelMail>
    </div>
    
    <div class="sm:col-span-2 lg:col-span-2 col-span-5 xl:ml-4 mx-auto flex justify-center" data-aos="fade-right">
      <!-- Buttons to linkedIn and Github -->
     <a href="https://www.linkedin.com/in/joschua-rothenbacher-431448200/" target="_blank" title="LinkedIn">
       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="60" height="60"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#d9b5a0"><path d="M86,6.88c-43.62608,0 -79.12,35.49048 -79.12,79.12c0,43.62952 35.49392,79.12 79.12,79.12c43.62608,0 79.12,-35.49048 79.12,-79.12c0,-43.62952 -35.49392,-79.12 -79.12,-79.12zM61.92,120.4h-13.76v-51.6h13.76zM55.04,58.48c-3.8012,0 -6.88,-3.0788 -6.88,-6.88c0,-3.8012 3.0788,-6.88 6.88,-6.88c3.8012,0 6.88,3.0788 6.88,6.88c0,3.8012 -3.0788,6.88 -6.88,6.88zM127.28,120.4h-13.76v-17.2v-8.6c0,-6.622 -5.418,-12.04 -12.04,-12.04c-6.622,0 -12.04,5.418 -12.04,12.04v25.8h-13.76v-51.6h13.76v6.24704c4.01792,-3.85968 9.46688,-6.24704 15.48,-6.24704c12.3496,0 22.36,10.0104 22.36,22.36z"></path></g></g></svg>
    </a>
      
     <a href="https://github.com/hfg-joschua-r" target="_blank" title="GitHub">
       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="60" height="60"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#d9b5a0"><path d="M86,17.2c-37.9948,0 -68.8,30.8052 -68.8,68.8c0,32.23853 22.19947,59.21387 52.12747,66.67867c-0.32107,-0.9288 -0.52747,-2.00667 -0.52747,-3.34253v-11.75907c-2.79213,0 -7.47053,0 -8.64587,0c-4.70707,0 -8.8924,-2.02387 -10.922,-5.78493c-2.2532,-4.1796 -2.64307,-10.57227 -8.22733,-14.4824c-1.65693,-1.30147 -0.3956,-2.7864 1.5136,-2.58573c3.526,0.9976 6.45,3.41707 9.202,7.00613c2.74053,3.5948 4.03053,4.40893 9.1504,4.40893c2.48253,0 6.19773,-0.14333 9.69507,-0.69373c1.88053,-4.77587 5.13133,-9.17333 9.10453,-11.2488c-22.9104,-2.3564 -33.84387,-13.75427 -33.84387,-29.22853c0,-6.66213 2.838,-13.1064 7.65973,-18.53587c-1.5824,-5.38933 -3.57187,-16.38013 0.60773,-20.56547c10.30853,0 16.54067,6.68507 18.03707,8.49107c5.13707,-1.76013 10.77867,-2.75773 16.70693,-2.75773c5.93973,0 11.60427,0.9976 16.7528,2.7692c1.4792,-1.79453 7.71707,-8.50253 18.04853,-8.50253c4.1968,4.19107 2.1844,15.22773 0.5848,20.6056c4.79307,5.418 7.61387,11.84507 7.61387,18.49573c0,15.4628 -10.91627,26.85493 -33.79227,29.2228c6.2952,3.2852 10.8876,12.51587 10.8876,19.4704v15.67493c0,0.59627 -0.13187,1.02627 -0.20067,1.53653c26.80907,-9.39693 46.06733,-34.85293 46.06733,-64.87267c0,-37.9948 -30.8052,-68.8 -68.8,-68.8z"></path></g></g></svg>
      
    </a>
  </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import AOS from "aos";
import modelMail from "././modelMail.vue";
export default {
  components: {
    modelMail,
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_0a713kq",
          "template_bspifha",
          this.$refs.form,
          "uG116hX7bIdu95w95"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            this.$refs.form.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
  mounted() {
    AOS.init({});
  },
};
</script>

<style >
.container {
  background-color: rgb(0, 131, 134, 0.1);
}
.buttonClass {
  background-color: transparent;
  border: 2px #d9b5a0 solid;
  color: #d9b5a0;
}
.buttonClass:hover {
  background-color: #d9b5a0;
}
svg {
  pointer-events: none;
}

</style>