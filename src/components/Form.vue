<template>
  <div class="content">
    <div class="numbers">
      <p v-for="(value, key, index) in numbers" :key="`${ key }-${ index }`">
        {{value}}
      </p>
    </div>
    <img src="../assets/decimo.jpeg" alt="decimo" />
  </div>
  <div v-if="Object.keys(result).length > 0" class="contentMessage">
    <p v-if="result.premio > 0">El numero {{result.numero}} ha sido premiado con {{result.premio}}€</p>
    <p v-else> Lo sentimos. El numero {{result.numero}} no ha sido premiado</p>
  </div>
  <Keyboard @addDigit="addNumber" @removeDigit="removeNumber" @checkNumber="checkNumber" />
</template>

<script>

import Keyboard from './Keyboard.vue'
import fetchResult from '../services/fetchResult'

export default {
  name: 'Form',
  components:{Keyboard},
  data(){
    return{
      numbers: [0,0,0,0,0],
      result: {}
    }
  },
  methods:{
    addNumber(value){
      this.numbers.shift()
      this.numbers.push(value)
      console.log(this.numbers)
    },
    removeNumber(){
      this.numbers.unshift(0)
      this.numbers.pop()
    },
    async checkNumber(){
     this.result = await fetchResult(+this.numbers.join(''))
    }
  }
}
</script>

<style scoped>
  .content{
      position: relative;
  }

  .numbers{
      display: flex;
      position: absolute;
      top: 19%;
      right: 45%;
      transform: translate(50%,-50%);
  }

  .numbers p{
      color: black;
      margin-left: 20px;
      font-size: 48px;
      font-weight: 800;
  }
</style>
