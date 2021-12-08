import Main from './pages/Main';
import Company from './pages/Company';
import Product from './pages/Product';
import Prcenter from './pages/Prcenter';
import Notice from './pages/Notice';
import Error from './pages/Error';

export default [
  {
    path: '/',
    issub: false,
    snbindex: '-1',
    component: Main,
  },
  {
    path: '/company',
    issub: true,
    snbindex: '0',
    component: Company,
  },
  {
    path: '/product',
    issub: true,
    snbindex: '1',
    component: Product,
  },
  {
    path: '/facilities',
    issub: true,
    snbindex: '1',
    component: Product,
  },
  {
    path: '/news',
    issub: true,
    snbindex: '2',
    component: Product,
  },
  {
    path: '/board',
    issub: true,
    snbindex: '3',
    component: Prcenter,
  },
  {
    path: '/notice',
    issub: true,
    snbindex: '4',
    component: Notice,
  },
  {
    path: '/',
    issub: true,

    snbindex: '4',
    component: Error,
  },
];
