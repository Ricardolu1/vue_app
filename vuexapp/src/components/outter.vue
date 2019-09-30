<!-- 组件说明 -->
<template>
  <div>
    <hr>
    我是outter组件中拿到的全局状态{{getOutterNum}}
    <br>
    <button @click="oAdd">outter组件--改变状态的按钮</button>
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
      }
    },
    computed: {
      getOutterNum(){
        return this.$store.state.num
      },
    },
  }
</script>

<style scoped>
/*@import url()*/

</style>