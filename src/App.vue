<template>
  <div id="app">
    <TheHeader></TheHeader>
    <TheMain></TheMain>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue"
import TheMain from "./components/TheMain.vue"
export default {
  name: 'App',
  components: {
    TheHeader,TheMain
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
}
</style>
