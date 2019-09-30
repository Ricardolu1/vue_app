<!-- 组件说明 -->
<template>
  <div>
    <hr>
    我是outter组件中拿到的全局状态{{getOutterNum}}
    <br>
    <button @click="oAdd">outter组件--改变状态的按钮</button>
     <button @click="oAddaction">outter组件--改变状态的按钮--action</button>
  </div>
</template>

<script>
  export default {
    name:'outter',
    components: {

    },
    data () {
      return {

      };
    },
    methods: {
      oAdd(){
        this.$store.commit('increase')
      },
      oAddaction(){
        this.$store.dispatch('decreaseAction')

      }
    },
    computed: {
      getOutterNum(){
        return this.$store.state.num
      },
      getCount(){
        return this.$store.getters.getNum
      }
    },
  }
</script>

<style scoped>
/*@import url()*/

</style>