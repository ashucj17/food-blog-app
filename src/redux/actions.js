export const FETCH_FOODS_REQUEST = 'FETCH_FOODS_REQUEST';
export const FETCH_FOODS_SUCCESS = 'FETCH_FOODS_SUCCESS';
export const FETCH_FOODS_FAILURE = 'FETCH_FOODS_FAILURE';

export const FETCH_FOOD_DETAILS_REQUEST = 'FETCH_FOOD_DETAILS_REQUEST';
export const FETCH_FOOD_DETAILS_SUCCESS = 'FETCH_FOOD_DETAILS_SUCCESS';
export const FETCH_FOOD_DETAILS_FAILURE = 'FETCH_FOOD_DETAILS_FAILURE';

export const fetchFoodsRequest = () => ({
  type: FETCH_FOODS_REQUEST
});

export const fetchFoodsSuccess = (foods) => ({
  type: FETCH_FOODS_SUCCESS,
  payload: foods
});

export const fetchFoodsFailure = (error) => ({
  type: FETCH_FOODS_FAILURE,
  payload: error
});

export const fetchFoodDetailsRequest = (id) => ({
  type: FETCH_FOOD_DETAILS_REQUEST,
  payload: id
});

export const fetchFoodDetailsSuccess = (food) => ({
  type: FETCH_FOOD_DETAILS_SUCCESS,
  payload: food
});

export const fetchFoodDetailsFailure = (error) => ({
  type: FETCH_FOOD_DETAILS_FAILURE,
  payload: error
});