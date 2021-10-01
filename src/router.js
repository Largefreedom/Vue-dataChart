import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// const mainRouters = [
//     {
//         path:'hello-word',
//         name:'Home',
//         component: () => import('@/components/HelloWorld.vue'),
//     },
//     {
//         name: '404',
//         path: '/404',
//         component: () => import('@/views/exception/404.vue'),
//       },
// ]

export default new Router({
    routes: [
        {
            path:'/hello-word',
            name:'Home',
            component: () => import('@/components/HelloWorld.vue'),
        },
        {
            path:'/simple-charts',
            name:'Simple-charts',
            component: () => import('@/views/Charts/chartsDemo.vue'),
        },
        {
            name: '404',
            path: '/404',
            component: () => import('@/views/exception/404.vue'),
          },
       {
           path: '*',
           redirect: {
               name: '404',
           }
       }
    ]
    
})