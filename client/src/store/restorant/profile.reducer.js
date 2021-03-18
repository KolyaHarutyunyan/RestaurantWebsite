import {
  UPDATE_AVATAR_ERROR,
  UPDATE_AVATAR_SUCCESS,
  EDIT_PROFILE_ERROR,
  EDIT_PROFILE_SUCCESS,
  SET_USER
} from './profile.types';

const initialState = {

  restaurantName: '',
  email: '',
  address: "",
  hours: {},
  activeMenu:0,
  menus:[
    {
      id:0,
      name:"",

    }
  ]

};

export const profileReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case UPDATE_AVATAR_SUCCESS:
      return {
        ...state,
        avatarUrl: action.payload.avatarUrl,
        error: false,
      };
    case UPDATE_AVATAR_ERROR:
      return {...state, error: action.payload.message};
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        fullName: action.payload.user.fullName,
        phoneNumber: action.payload.user.phoneNumber,
        email: action.payload.user.email,
        error: false,
      };
    case EDIT_PROFILE_ERROR:
      return {...state, error: action.payload.message};
    case SET_USER:
      return {
        ...state,
        fullName: action.payload.user.fullName,
        phoneNumber: action.payload.user.phoneNumber,
        email: action.payload.user.email,
        id: action.payload.user.id,
        avatarUrl: action.payload.user.avatarUrl,
        password: action.payload.user.password,
        newPassword: action.payload.user.newPassword,
        confirmation: action.payload.user.confirmation,
      };

    default:
      return state;
  }
};
