

const routes = [
    {
        path: '/home',
        name: 'home',
        component: resolve => { require(['@/pages/home/Home.vue'], resolve) },
        meta: {
            title:'首页'
        }
    }
];


export default routes;