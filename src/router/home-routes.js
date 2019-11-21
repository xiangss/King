export default {
  path: '/home',
  component: ()=>import('../pages/home/root/Home'),
  children: [
    {
      name:'onlineService',
      path: 'onlineService',
      component: ()=>import('../pages/home/children/onlineService/onlineService'),
      children:[
        {
          name:'onlineChat',
          path: 'onlineChat',
          component: ()=>import('../pages/home/children/onlineChat/onlineChat'),
        },
      ]
      
    },
    {
      name: 'quota',
      path: 'quota',
      component: () => import('../pages/home/children/quota/quota'),
      children: [
        {
          name: 'lend',
          path: 'lend',
          component: () => import('../pages/home/children/lend/lend'),
        },
      ]
    },
    {
      name: 'check',
      path: 'check',
      component: () => import('../pages/home/children/check/check'),
    },
    {
      name:'application',
      path: 'application/:id',
      component: ()=>import('../pages/common/application/application'),
    }
  ]
}