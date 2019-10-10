import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  		lists: []
  },
  mutations: {
  		addList(state, obj){
  			state.lists.push(obj);
  		}
  },
  actions: {

  }
})
