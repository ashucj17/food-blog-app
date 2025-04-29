import {
    FETCH_FOODS_REQUEST,
    FETCH_FOODS_SUCCESS,
    FETCH_FOODS_FAILURE,
    FETCH_FOOD_DETAILS_REQUEST,
    FETCH_FOOD_DETAILS_SUCCESS,
    FETCH_FOOD_DETAILS_FAILURE
  } from './actions';
  
  const initialState = {
    foods: [],
    currentFood: null,
    loading: false,
    error: null
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_FOODS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_FOODS_SUCCESS:
        return {
          ...state,
          loading: false,
          foods: action.payload
        };
      case FETCH_FOODS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case FETCH_FOOD_DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_FOOD_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          currentFood: action.payload
        };
      case FETCH_FOOD_DETAILS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;