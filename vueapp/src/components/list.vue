<!-- 组件说明 -->
<template>
  <ul>
    <li>
      <router-link :to="{name:'helloearth',params:{worldmsg:'你好世界'}}">Hello World</router-link>
    </li>
    <li>
      <router-link :to="{name:'helloworld',params:{earthmsg:'你好地球'}}">Hello Earth</router-link>
    </li>
  </ul>
</template>

<script>
  //import x from ''
  export default {
    name:"list",
    components: {

    },
    data () {
      return {

      }
    },
    computed: {

    },
    methods: {

    },
  }
</script>

<style scoped>
/* @import url() */
  li{
    margin:10px 0px;
  }

</style>