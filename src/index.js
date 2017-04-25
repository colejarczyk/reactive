import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores';
import AppContainer from './containers/AppContainer';
import './index.css';
import routes from './routes';

const initialState = {
  categories: [
    {name: 'Tops', url: 'tops'},
    {name: 'Shoes', url: 'shoes'},
    {name: 'Jeans', url: 'jeans'},
    {name: 'Snowboard', url: 'snowboard'},
    {name: 'Sale', url: 'sale'},
  ],
  products: [
    {
      id: 12,
      name: 'Shoe Nike',
      price: 10,
      img: 'images/slider/slider_1.jpg',
    },
  ],
};
const store = configureStore(initialState);

ReactDOM.render(
    <AppContainer store={store} routes={routes}/>,
    document.getElementById('root'),
);
