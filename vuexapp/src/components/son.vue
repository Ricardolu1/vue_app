<!-- 组件说明 -->
<template>
  <div>
    <span>我是子组件</span>----{{msg}} <br>
    我是子组件中拿到的全局状态：{{getNum}} <br>
    <button @click="sendMsgToFa">向父组件传递数据</button> <br>
    <button @click="sAdd">子组件--改变状态的按钮</button>
  </div>
</template>

<script>
  //import x from ''
  export default {
    name:'son',
    props:['msg'],
    components: {

    },
    data () {
      return {
        toFatherMsg:'我是你的son'
      };
    },
    methods: {
      sendMsgToFa(){
        this.$emit('handle',this.toFatherMsg)
      },
      sAdd(){
        this.$store.commit('increase')
      }

    },
    computed:{
      getNum(){
        return this.$store.state.num
      },

    }
  }
</script>

<style scoped>
/*@import url()*/

</style>  