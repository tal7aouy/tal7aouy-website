<template>
  <div>
    <Event
      v-for="(item, index) in events"
      :key="index"
      :index="index"
      :parentData="item"
    />
  </div>
</template>

<script>
import Event from './Event.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'timeline',
  components: { Event },
  computed: { ...mapGetters(['events']) },
  created: function() {},
  methods: {},
}
</script>
<style></style>
