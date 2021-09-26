import store from '@/store'

const isAuthenticated = async (from, to, next) => {
  
  const { ok } = await store.dispatch('auth/checkAuth')

  if ( ok ) next()
  else next({ name: 'login' })

}

export default isAuthenticated