<!-- 组件说明 -->
<template>
  <div>
    <span>我是父组件</span>------{{fromSonMsg}} <br> 
    我是我是父组件中拿到的全局状态-------{{getPaNum}}
    <br>
    <button @click="pAdd">父组件--改变状态的按钮</button>
    <hr>


    <son :msg="toSonMsg" @handle= "getMsgFromSon"></son>
  </div>
</template>

<script>
import son from "./son"

  export default {
    name:'parent',
    components: {
      son
    },
    data () {
      return {
        toSonMsg:'我是你的父亲',
        fromSonMsg:''
      };
    },
    methods: {
      getMsgFromSon(value){
        this.fromSonMsg=value
      },
      pAdd(){
        this.$store.commit('increase')
      }
    },
    computed:{
      getPaNum(){
        return this.$store.state.num
      }
    }
  }
</script>

<style scoped>
/*@import url()*/

</style>