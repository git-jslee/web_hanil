import Main from './pages/Main';
import Company from './pages/Company';
import Product from './pages/Product';
import Notice from './pages/Notice';
import Error from './pages/Error';

export default [
  {
    path: '/',
    issub: false,
    component: Main,
  },
  {
    path: '/company',
    issub: true,
    component: Company,
  },
  {
    path: '/product',
    issub: true,
    component: Product,
  },
  {
    path: '/news',
    issub: true,
    component: Product,
  },
  {
    path: '/notice',
    issub: true,
    component: Notice,
  },
  {
    path: '/',
    issub: true,
    exact: false,
    component: Error,
  },
];
