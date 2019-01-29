import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    //strictモードはProduction環境で絶対に使用しないこと!
    strict: false,
    state: {
      visited: false,
      isWelcomeCompleted: false
    },
    getters: {},
    mutations: {
      setVisitedState(state) {
        state.visited = true
      },
      setIsWelcomeCompleted(state) {
        state.isWelcomeCompleted = true
      }
    },
    actions: {}
  })
}

export default createStore
