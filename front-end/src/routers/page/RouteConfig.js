import {asyncComponent} from 'common/AsyncFunction';

export default [
  {
    path: "/home",
    component: asyncComponent(() => import('containers/page/Counter')),
    exact: true
  }
];
