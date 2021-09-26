import { useStore } from "vuex"
import { computed } from 'vue'

const useAuth = () => {

  const store = useStore()
  
  const createUser = user => {
    return store.dispatch('auth/createUser', user)
  }

  const login = user => {
    return store.dispatch('auth/login', user)
  }

  const checkAuth = user => {
    return store.dispatch('auth/checkAuth', user)
  }

  const logout = () => {
    store.commit('auth/logout')
    store.commit('journal/clearEntries')
  }

  return {
    checkAuth,
    createUser,
    login,
    logout,

    getStatus: computed( () =>  store.getters['auth/getStatus'] ),
    getUserName: computed( () =>  store.getters['auth/getUserName'] ),
  }

}

export default useAuth