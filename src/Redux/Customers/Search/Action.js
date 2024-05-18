// actions.js
import axios from "axios";
import {
  SEARCH_PRODUCTS_REQUEST,
  SEARCH_PRODUCTS_SUCCESS,
  SEARCH_PRODUCTS_FAILURE,
} from "./ActionType";
import api, { API_BASE_URL } from "../../../config/api";

export const searchProducts = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_PRODUCTS_REQUEST });

    const { data } = await api.get(`/api/products/search?q=${searchQuery}`);

    dispatch({
      type: SEARCH_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};
