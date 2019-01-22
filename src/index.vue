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
      navigator.push('http://192.168.15.152:8081/dist/views/test.js')
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
