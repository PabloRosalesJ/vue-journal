// export const myAction = ( state, data ) => {

// }

export const loginUser = ( state, { user, idToken, refreshToken } ) => {

  if ( idToken ) {
    localStorage.setItem( 'idToken', idToken )
    state.idToken = idToken
  }

  if ( refreshToken ) {
    localStorage.setItem( 'refreshToken', refreshToken )
    state.refreshToken = refreshToken
  }

  state.user = user
  state.status = 'authenticated'

}

export const logout = ( state ) => {

  state.status= 'no-authenticated'
  state.user= null
  state.idToken= null
  state.refreshToken= null

}