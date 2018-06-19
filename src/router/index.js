
const root = {
  path: '/',
  redirect: '/main'
}

  const routes = [
    root,
    {
      path: '/main',
      name: 'main',
      component: resolve => { require(['../views/main'], resolve); }
    },
    {
      path: '/rank',
      name: 'rank',
      component: resolve => { require(['../views/components/rank'], resolve); }
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: resolve => { require(['../views/components/recommend'], resolve); }
    },
    {
      path: '/songDetail',
      name: 'songDetail',
      component: resolve => { require(['../views/components/songDetail'], resolve); }
    },
    {
      path: '/search',
      name: 'search',
      component: resolve => { require(['../views/components/search'], resolve); }
    },
    {
      path: '/singer',
      name: 'singer',
      component: resolve => { require(['../views/components/singer'], resolve); }
    }
  ]
module.exports = routes