// Action.js
import axios from 'axios'; // Correct import
import {
  FIND_USERS_REQUEST,
  FIND_USERS_SUCCESS,
  FIND_USERS_FAILURE,
} from './ActionType';
import api, { API_BASE_URL } from '../../../config/api';

export const getUsers = () => async (dispatch) => {

  // dispatch({ type: FIND_USERS_REQUEST });

  try {
     dispatch({ type: FIND_USERS_REQUEST });
    
    const {data:item}  = await api.get(`${API_BASE_URL}/api/admin/customers/`);
console.log(item);
    dispatch({
      type: FIND_USERS_SUCCESS,
      payload: item,
    });
  } catch (error) {
    dispatch({
      type: FIND_USERS_FAILURE,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

