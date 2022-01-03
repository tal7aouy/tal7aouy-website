<template class="overflow-hidden">
  <div class="w-full h-full min-w-screen min-h-screen bg-background-default">
    <Navbar />

    <div id="pages" class="sm:w-10/12 lg:w-3/5 sm:m-auto mx-6">
      <home id="Home" class="md:min-h-screen" />
      <about id="About" class="md:min-h-screen" />
      <projects id="Projects" class="md:min-h-screen" />
      <contact id="Contact" class="md:min-h-screen" />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Projects from '@/views/Projects.vue'
import Contact from '@/views/Contact.vue'

export default {
  name: 'app',
  components: { Navbar, Home, About, Projects, Contact },
  data() {
    return {
      prevHeight: 0,
    }
  },
  mounted: function () {
    // From testing, without a brief timeout, it won't work.
    setTimeout(() => this.scrollFix(this.$route.hash), 1)
  },
  methods: {
    scrollFix: function (hashbang) {
      location.hash = hashbang
    },

    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height
    },
    enter(element) {
      const { height } = getComputedStyle(element)
      element.style.height = this.prevHeight
      setTimeout(() => {
        element.style.height = height
      })
    },
    afterEnter(element) {
      element.style.height = 'auto'
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:500&display=swap');
html {
  scroll-behavior: smooth;
} /* todo used to animate scroll on nav click */
#app {
  overflow: hidden;
}
#pages {
  overflow: hidden;
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  translate: scale(1);
}
</style>
