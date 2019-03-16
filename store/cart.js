// const cart = {
//   // 我將 module 內設定 namespaced: true，這樣就能呼叫其他 module 的 actions 及 mutations
//   namespaced: true,
//   state: {
//       cartList: []
//   },
//   actions: {
//       // 我要使用其他 module 裡面的 mutation 及 actions 呢？
//     //  module 裡面加上 namespaced 囉，使用 namespaced 也能夠提高 module 的封裝度和複用性，所有 getter 、 action 及 mutation 都會自動根據 module 註冊的路徑調整命名。
//       getList({commit, dispath, state, getters, rootState, rootGetters}) {
//           commit('product/setList', payload, {root: true})
//           //commit 及 dispath 沒有提供像 rootstate 及 rootGetters 的方法
//           //所以使用 namespaced 時在最後面加上 root: true
//           //來讓這個 actions 可以呼叫其他的 mutations 及 actions
//       }
//   }
// }



// const product = {
//   namespaced: true,
//   state: {
//       productList: []
//   },
//   mutations: {
//       setList(state, payload) {
//           state.productList.push(...payload)
//       },
//       getList({commit, dispath, state, getters, rootState, rootGetters}) {
//         xxxxxxxx
//     }

//   }
// }


// // 運用
// // this.$store.dispath('cart/getList');
// // this.$store.dispath('product/getList');
