import ProductContainer from './containers/ProductContainer';

const routes = [
  {
    path: '/product/:id',
    exact: true,
    component: ProductContainer,
  },
];

export default routes;
