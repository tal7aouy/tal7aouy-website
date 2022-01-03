<template>
  <div class=" flex-col justify-center text-center">
    <h1 class="font-bold text-transparent-secondary sm:text-5xl text-4xl">
      Contact
    </h1>
    <br />
    <div class="my-8">
      <h1 class="text-primary-dark font-bold sm:text-3xl text-2xl ">
        Get in touch
      </h1>
      <span class="text-label-info text-xl my-8">
        I&rsquo;m not currently looking for a fulltime job but my inbox is
        always open. Whether for a potential project or idea, I&rsquo;ll try my
        best to answer your email! </span
      ><br />
      <button
        class=" my-8 rounded-sm text-lg p-4 border-2 text-primary-light hover:text-primary-main hover:bg-transparent-primary "
        onclick="location.href='mailto:tal7aouy@gmail.com'"
      >
        Say Hello
      </button>
    </div>
    <div class="my-8">
      <span class="text-label-info text-xl my-8">
        where else you can find me
      </span>
      <br />
      <div class="flex flex-wrap justify-center mt-4">
        <div
          v-for="item in socials"
          v-bind:key="item.name"
          class="flex-grow m-2 sm:mx-0 sm:my-4 sm:w-auto md:mx-2 bg-background-light rounded-sm"
        >
          <a
            target="_blank"
            :href="item.link"
            class="p-4 text-center rounded-sm text-xl text-label-info hover:text-secondary-main transition-all duration-200 ease-linear hover:scale-105 block"
          >
            <i :class="item.icon"></i>
            <br />
            <span>{{ item.name }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['socials']),
  },
}
</script>

<style scoped></style>
