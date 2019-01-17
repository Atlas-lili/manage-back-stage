import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default () => {
  const store = new Vuex.Store({
    state: {
      user: undefined
    },
    mutations: {

    },
    actions: {
      updateUser (store) {
        store.state.user = sessionStorage.getItem('ms_username')
      }
    }
  })
  return store
}

