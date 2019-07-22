import Loadable from 'react-loadable';
import { RouteConfig } from 'react-router-config';

import Loading from './components/Loading/Loading';

export const routeConfig: RouteConfig[] = [
  {
    component: Loadable({
      loader: () => import('./pages/Home/Home'),
      loading: Loading
    }),
    path: '/',
    exact: true
  },
  {
    component: Loadable({
      loader: () => import('./pages/NotFound/NotFound'),
      loading: Loading
    })
  }
];
