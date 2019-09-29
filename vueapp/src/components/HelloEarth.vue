<template>
  <div class="hello">
    <h1>Hello Earth</h1>
    <h2>Essential Links</h2>
    我是传递过来的参数-----<h3> {{$route.params.earthmsg}} </h3>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'HelloEarth',//类似于id一样的东西，全局的一个唯一标识
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="" scoped>
*{
  color:red
}
  
</style>
