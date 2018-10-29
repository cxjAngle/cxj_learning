const routes = [
    {
        path: '/course',
        name: 'course',
        component: resolve => {require(['@/pages/online_course/OnlineCourse.vue'], resolve)},
        meta: {
            title:'线上课程' //title显示
        }
    },
    {
      path: '/course/courseLearning/:id',
      name: '/courseLearning',
      component: resolve => {require(['@/pages/online_course/courseLearning.vue'], resolve)},
      meta: {
        title:'课程详情' //title显示
      }
    }
];


export default routes;
