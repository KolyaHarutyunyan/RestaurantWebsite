import { combineReducers } from "redux";
import { authReducer } from "../auth";
import { restaurantsReducer } from "../restaurants";

const initialState = {
  isLoading: false,
  error: false,
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const appReducer = combineReducers({
  global: globalReducer,
  auth: authReducer,
  restaurants: restaurantsReducer,
});
