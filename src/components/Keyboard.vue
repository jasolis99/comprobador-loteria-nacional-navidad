<template>
    <div class="keyboard">
        <button @click="addNumber" value="1">1</button>
        <button @click="addNumber" value="2">2</button>
        <button @click="addNumber" value="3">3</button>
        <button @click="addNumber" value="4">4</button>
        <button @click="addNumber" value="5">5</button>
        <button @click="addNumber" value="6">6</button>
        <button @click="addNumber" value="7">7</button>
        <button @click="addNumber" value="8">8</button>
        <button @click="addNumber" value="9">9</button>
        <button @click="removeNumber">{{arrow}}</button>
        <button @click="addNumber" value="0">0</button>
        <button @click="checkNumber">{{ok}}</button>
    </div>
</template>

<script>
export default {
    name: 'Keyboard',
    data(){
        return{
            arrow: '🔙',
            ok: '✔️'
        }
    },
    methods:{
        addNumber(e){
            this.$emit('addDigit',e.target.value)
        },
        removeNumber(){
            this.$emit('removeDigit')
        },
        checkNumber(){
            this.$emit('checkNumber')
        }
    }

}
</script>

<style lang="css" scoped>

.keyboard{
    display: grid;
    grid-template-rows: 80px 80px 80px 80px;
    grid-template-columns: 80px 80px 80px;
}

</style>