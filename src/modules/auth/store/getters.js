// export const myGetter = ( /*state*/ ) => (term = '') => {
//   return state.mys_state
// }

export const getStatus = ( state ) => {
  return state.status
}

export const getUserName = ( state ) => {
  return state.user?.name || ''
}