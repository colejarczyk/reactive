import HomeContainer from './modules/Home/containers/HomeContainer';
import NoMatch from './containers/NoMatch';
import catalog from './modules/Catalog';
import product from './modules/Product';

let routes;

// default route
routes = [
  {
    path: '/',
    exact: true,
    component: HomeContainer,
  },
];

// module routes unpacking
routes = [
  ...catalog,
  ...product,
  ...routes
];

// final routes
const finalRoutes = [
  ...routes,
  {
    component: NoMatch,
  },
];

export default finalRoutes;
