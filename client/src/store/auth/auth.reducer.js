import { authReducerTypes } from '.'


const initialState = {
  error: false,
  isAuthenticated: false,
  key: false,

};


export const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case authReducerTypes.changeKeyType:
      return {...state, key: action.payload.key}
    case authReducerTypes.cleanError:
      return {...state, error: false}
    case authReducerTypes.cleanIsAuthed:
      return (initialState)
    case authReducerTypes.setError:
      return ({...state, error: action.payload.error})
    case authReducerTypes.setIsAuthed:
      return ({...state, isAuthenticated: true,})



    default:
      return state
  }

}

