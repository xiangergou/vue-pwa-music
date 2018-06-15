import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import main from '@/views/main';

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/imgUpload',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'main',
      component: main
    }
  ]
});
// 'use strict';

// const root = {
//   path: '/',
//   redirect: '../views/main'
// };

// const main = {
//   path: '/main',
//   name: 'main',
//   component: resolve => { require(['../views/main'], resolve); }
// };

// const detail = {
//   path: '/detail',
//   name: 'detail',
//   component: resolve => { require(['../views/detail'], resolve); }
// };

// const routes = [
//   root,
//   main,
//   detail
//   // require('./main'),
//   // {
//   //   path: '*',
//   //   redirect: '/start'
//   // }
// ];

// module.exports = routes;
