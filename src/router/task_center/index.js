const routes = [
    {
        path: '/task',
        name: 'task',
        component: resolve => { require(['@/pages/task_center/index.vue'], resolve) },
        meta: {
            title:'任务中心'
        }
    }
];


export default routes;