<template>
  <div class="my-8 flex flex-col md:justify-center">
    <div>
      <h3 class="text-secondary-main text-lg font-bold">
        ➔ Hey There , I&rsquo;m 👨‍💻
      </h3>
      <h1 class="text-primary-main font-bold sm:text-5xl text-2xl my-1 sm:my-2">
        {{ profile.name }} {{ profile.surname }}.
      </h1>
      <div
        class="bg-primary-main text-background shadow-lg text-center rounded-md py-1"
      >
        <h1
          class="font-bold md:text-3xl sm:text-2xl text-background-default text-sm"
        >
          { I translate great ideas into code }
        </h1>
      </div>
    </div>
    <scene></scene>
    <div class="w-full my-2">
      <div class="text-label-info text-xl">
        I&rsquo;m a {{ age }} years old Full Stack developer based in
        Morocco,<br />
        specialized in Webapp development! <br />
        I also enjoy contributing to open source projects .
      </div>

      <button
        class="text-primary-main rounded-lg text-lg p-4 border-2 transition duration-500 ease-in-out hover:bg-transparent-primary my-4"
        onclick="location.href='mailto:tal7aouy@gmail.com'"
      >
        Get In Touch
      </button>
      <a href="resume.pdf" download>
        <button
          class="sm:ml-5 ml-2 text-primary-main rounded-lg text-lg p-4 border-2 transition duration-500 ease-in-out hover:bg-transparent-primary my-4"
        >
          Get Resume
        </button>
      </a>
    </div>
  </div>
</template>

<script>
import Scene from '@/components/Scene.vue'
import { mapGetters } from 'vuex'
export default {
  components: { Scene },
  computed: { ...mapGetters(['profile', 'projects', 'age']) },
}
</script>
<style></style>
