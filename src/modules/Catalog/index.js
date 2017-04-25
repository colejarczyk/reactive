import CatalogContainer from './containers/CatalogContainer';

const routes = [
  {
    path: '/category/:categoryName',
    exact: true,
    component: CatalogContainer,
  },
];

export default routes;
