export default {
  path: '/mine',
  component: ()=>import('../pages/mine/root/Mine'),
  children: [
    // {
    //   name:'browse',
    //   path: 'browse',
    //   component: ()=>import('../pages/mine/children/browse/browse'),
    // },
    {
      name:'collect',
      path: 'collect',
      component: ()=>import('../pages/mine/children/collect/collect'),
    },
    {
      name:'order',
      path: 'order',
      component: ()=>import('../pages/mine/children/order/order'),
    },
    {
      name:'repayment',
      path: 'repayment',
      component: ()=>import('../pages/mine/children/repayment/repayment'),
    },
    {
      name:'assess',
      path:'assess',
      component:()=>import('../pages/mine/children/assess/assess'),
      children:[
        {
          name:'write',
          path:'write',
          component:()=>import('../pages/mine/children/write/write'),
          children:[
            {
              name:'assessSuccess',
              path:'assessSuccess',
              component:()=>import('../pages/mine/children/assessSuccess/assessSuccess'),
            }
          ]
        }
      ]
    },
    {
      name:'feedback',
      path: 'feedback',
      component: ()=>import('../pages/mine/children/feedback/feedback'),
    },
    {
      name:'askfor',
      path: 'askfor',
      component: ()=>import('../pages/mine/children/askfor/askfor'),
    },
    {
      name:'onlineServer',
      path: 'onlineServer',
      component: ()=>import('../pages/mine/children/onlineServer/onlineServer'),
    },
    {
      name:'foryou',
      path: 'foryou',
      component: ()=>import('../pages/mine/children/foryou/foryou'),
    },
  ]
}