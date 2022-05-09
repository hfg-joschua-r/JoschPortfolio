<template>
<div class="grid gap-y-2 grid-cols-5">
<form class="w-full col-span-5 sm:col-span-3 max-w-lg container mt-8 form rounded-sm" ref="form" @submit.prevent="sendEmail" data-aos="fade-right">
  <div class="flex flex-wrap mx-2 mb-4 mt-2">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-4">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-1" for="grid-first-name">
        name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name="user_name">
    </div>
   
  </div>
  <div class="flex flex-wrap mx-2 mb-4">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-1" for="grid-password">
        E-mail
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" name="user_email">
     
    </div>
  </div>
  <div class="flex flex-wrap mx-2 mb-2">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-1" for="grid-password">
        Message
      </label>
      <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" name="message"></textarea>
    </div>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3">
      <button class="buttonClass font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded mx-5 mb-4" type="submit">
        Send
      </button>
    </div>
  </div>
</form>
<div class="sm:col-span-2 col-span-5 mx-auto">
<modelMail></modelMail>
</div>
</div>
</template>

<script>
import emailjs from 'emailjs-com';
import AOS from 'aos';
import modelMail from '././modelMail.vue';
export default {

  components: {
    modelMail
  },
  methods: {
    sendEmail() {
      emailjs.sendForm('service_0a713kq', 'template_bspifha', this.$refs.form, 'uG116hX7bIdu95w95')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  },
  mounted() {
    AOS.init({
    });
  }
}
</script>

<style>
.container {
  background-color: rgb(0,131,134, .1);
}
.buttonClass {
  background-color: transparent;
  border: 2px #D9B5A0 solid;
  color: #D9B5A0
}
.buttonClass:hover {
  background-color: #D9B5A0;
}
</style>