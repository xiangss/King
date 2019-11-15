export default {
    name:'credit',
    path: '/credit',
    component: ()=>import('../pages/credit/root/credit'),
    children:[
     {
       name:'edituserInfo',
       path:'edituserInfo',
       redirect:'edituserInfo/identification',
       component:()=>import('../pages/credit/children/edituserInfo/edituserInfo'),
       children:[
        {
          name:'identification',
          path:'identification',
          component:()=>import('../pages/credit/children/edituserInfo/children/identification')
        },
        {
          name:'infomation',
          path:'infomation',
          component:()=>import('../pages/credit/children/edituserInfo/children/infomation')
        },
        {
          name:'firendsinfon',
          path:'firendsinfon',
          component:()=>import('../pages/credit/children/edituserInfo/children/firendsinfon')
        },
        {
          name:'saveuserinfo',
          path:'userInfo',
          component:()=>import('../pages/credit/children/edituserInfo/children/saveuserinfo')
        }
       ]
     },
     {
      name:'userInfo',
      path:'userInfo',
      component:()=>import('../pages/credit/children/userinfo/userinfo')
    }
    ]
  }