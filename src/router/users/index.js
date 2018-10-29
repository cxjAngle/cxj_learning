const routes = [
  {
    path: '/users',
    name: 'users',
    component: resolve => {require(['@/pages/users/users.vue'], resolve)},
    meta: {
      title:'用户中心' //title显示
    }
  }
];


export default routes;
