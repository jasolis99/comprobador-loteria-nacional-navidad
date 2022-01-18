<template>
  <img alt="Vue logo" src="./assets/lettering-navidad.png">
  <Form />
</template>

<script>

import Form from './components/Form.vue'

export default {
  name: 'App',
  components:{Form}
}
</script>

<style>
#app {
  background-color: #373f65;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
}
</style>
