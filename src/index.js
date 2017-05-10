import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './stores';
import AppContainer from './containers/AppContainer';
import './index.css';
import routes from './routes';

injectTapEventPlugin();

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
    <MuiThemeProvider>
      <AppContainer store={store} routes={routes}/>
    </MuiThemeProvider>,
    document.getElementById('root'),
);
