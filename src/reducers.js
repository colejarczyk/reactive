import {combineReducers} from 'redux';

function categories(state = [], action) {
  return state;
}

function products(state = [], action) {
  return state;
}

export default function createReducer(asyncReducers) {
  return combineReducers({
    categories: categories,
    products: products,
    ...asyncReducers
  });
};
