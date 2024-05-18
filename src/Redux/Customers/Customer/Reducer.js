// src/reducers/customersReducer.js
import {
  FIND_USERS_REQUEST,
  FIND_USERS_SUCCESS,
  FIND_USERS_FAILURE,
} from "./ActionType";

const initialState = {
  customers: [],
  loading: false,
  error: null,
};

const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        customers: action.payload, // Corrected from 'products' to 'customers'
      };
    case FIND_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default customersReducer;
