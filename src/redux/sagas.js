import { call, put, takeLatest, all } from 'redux-saga/effects';
import api from '../api';
import {
  FETCH_FOODS_REQUEST,
  FETCH_FOOD_DETAILS_REQUEST,
  fetchFoodsSuccess,
  fetchFoodsFailure,
  fetchFoodDetailsSuccess,
  fetchFoodDetailsFailure
} from './actions';

function* fetchFoodsSaga() {
  try {
    const response = yield call(api.getAllFoods);
    yield put(fetchFoodsSuccess(response.data));
  } catch (error) {
    yield put(fetchFoodsFailure(error.message));
  }
}

function* fetchFoodDetailsSaga(action) {
  try {
    const response = yield call(api.getFoodById, action.payload);
    yield put(fetchFoodDetailsSuccess(response.data));
  } catch (error) {
    yield put(fetchFoodDetailsFailure(error.message));
  }
}

function* watchFetchFoods() {
  yield takeLatest(FETCH_FOODS_REQUEST, fetchFoodsSaga);
}

function* watchFetchFoodDetails() {
  yield takeLatest(FETCH_FOOD_DETAILS_REQUEST, fetchFoodDetailsSaga);
}

export default function* rootSaga() {
  yield all([
    watchFetchFoods(),
    watchFetchFoodDetails()
  ]);
}