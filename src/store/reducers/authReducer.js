const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch( action.type ){
    case 'LOGIN_ERROR':
      console.log('LOGIN ERROR')
      return {
        ...state,
        authError: 'LOGIN FAILED, CHECK USERNAME AND PASSWORD'
      }
    case 'LOGIN_SUCCESS':
      console.log('LOGIN SUCCESS')
      return {
        authError: null
      }
    case 'SIGNOUT_SUCCESS':
      console.log('SIGNOUT SUCCESS')
      return state
    case 'SIGNUP_SUCCESS':
      console.log('SIGNUP SUCCESS')
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      console.log('SIGNUP ERROR')
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state
  }  
}

export default authReducer