<template>
  <div class="hello">
    <h3>我是axiosapp，用来发送请求拦截响应</h3>
    <button @click="getData">发送请求</button>
    <ul>
      <li  v-for="item in items"> {{item}} </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$http=axios

export default {
  name: 'HelloWorld',
  data () {
    return {
      items:[]
    }
  },
  methods:{
    getData(){
      console.log(this)
      this.$http.get('https://cnodejs.org/api/v1/topics')
        .then((res)=> {
          //次数的this只向的不是当前vue实例,可以用箭头函数也可以用self
          console.log(res.data.data)
          this.items=res.data.data
        })
        .catch((err)=> {
          console.log(err)
        })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
