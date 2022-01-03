<template>
  <div class=" flex-col justify-center my-8">
    <h1 class="font-bold text-transparent-secondary sm:text-5xl text-4xl ">
      Projects
    </h1>
    <br />
    <h3 class="text-label-info text-xl">
      ➔ A list of my more relevant projects. I like to learn new technologies
      while doing side projects afterwork.
    </h3>
    <div class="projects my-8">
      <Project
        v-for="(item, index) in projects"
        :key="index"
        :index="index"
        :parentData="item"
      />
    </div>
  </div>
</template>

<script>
import Project from '@/components/Project.vue'
import { mapGetters } from 'vuex'
export default {
  components: { Project },
  created: function() {},
  computed: {
    ...mapGetters(['profile', 'projects', 'age']),
  },
  methods: {},
}
</script>

<style>
#container {
  padding-top: 4em;
}

.projects {
  display: grid;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  grid-template-columns: repeat(3, 1fr);
}

@media only screen and (max-width: 1200px) {
  .projects {
    display: grid;
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 768px) {
  .projects {
    display: grid;
    grid-row-gap: 1em;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
