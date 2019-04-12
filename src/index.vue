<template>
  <div class="wrapper">
    <text @click="jump()">navigator</text>
  </div>
</template>

<script>
import navigator from './navigator/navigator.js'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
    jump () {
      navigator.push('views/test.vue')
    }
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
</style>
