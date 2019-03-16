import Vuex from 'vuex'
import user from './user'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      result: '尚未查詢'
    }),
    mutations: {
      setResult(state, {
        result
      }) {
        state.resultr = result
      }
    },
    modules: {
      user: user,
    }
  })
}


export default createStore
