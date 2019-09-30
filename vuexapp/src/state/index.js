import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    num:88,
  },
  mutations:{
    increase(state){
      state.num++
    },
    decrease(state){
      state.num=state.num-20
    }
  },
  actions:{
    decreaseAction(context){
      context.commit('decrease')
    }
  },
  getters:{
    getNum(state){
      if (state.num>=0) {
        return state.num
      }else{
        state.num=0
        return state.num
      }
    
    }
  }

})
