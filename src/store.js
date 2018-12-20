import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default () => {
  const store = new Vuex.Store({
    state: {
      // user: sessionStorage.getItem('ms_username') ? sessionStorage.getItem('ms_username') : undefined,
      user: undefined,
      a: 111
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

