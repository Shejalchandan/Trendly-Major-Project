// reducer.js
import {
    SEARCH_PRODUCTS_REQUEST,
    SEARCH_PRODUCTS_SUCCESS,
    SEARCH_PRODUCTS_FAILURE,
  } from "./ActionType";
  
  const initialState = {
    searchResults: [],
    loading: false,
    error: null,
  };
  
  const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case SEARCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          searchResults: action.payload,
          loading: false,
          error: null,
        };
      case SEARCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default searchReducer;
  