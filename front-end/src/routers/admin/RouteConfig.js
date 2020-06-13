import {asyncComponent} from 'common/AsyncFunction';

export default [
  {
    path: "/admin",
    component: asyncComponent(() => import('containers/admin/UserManagement')),
    exact: true
  }
];
