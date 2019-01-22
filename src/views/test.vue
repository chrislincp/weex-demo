<template>
  <div class="header">
    <text @click="goBack()">返回</text>
  </div>
</template>

<script>
import navigator from '../navigator/navigator.js'
export default {
  data () {
    return {}
  },
  methods: {
    goBack () {
      navigator.pop()
    }
  }
}
</script>

<style scoped>
  .header {
    height: 60px;
    padding-top: 88px;
    border-bottom: 1px;
  }
</style>
