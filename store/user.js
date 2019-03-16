const user = {
  state: {
    userInfo: '',
    userList: []
  },
  getters: {
    XXXX(state, getters, rootState, rootGetters) {
      // rootState 及 rootGetters 指的是 store 裡面的 state 及 getters，也就是全域的。
      // 如果我要取得其他 module(例如：product) 的 state 就用以下方式：
      // 我要去取得其他 module 的 state 及 getters 我們要使用 rootState 及 rootGetters
      return rootState.product.productList
    }
  },
  mutations: {

  },
  actions: {
  
    XXXX({
      commit,
      dispath,
      state,
      getters,
      rootState,
      rootGetters
    }) {}
  }
}
