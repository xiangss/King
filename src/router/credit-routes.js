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
          component:()=>import('../pages/credit/components/identification')
        },
        {
          name:'infomation',
          path:'infomation',
          component:()=>import('../pages/credit/components/infomation')
        },
        {
          name:'firendsinfon',
          path:'firendsinfon',
          component:()=>import('../pages/credit/components/firendsinfon')
        }
       ]
     }
    ]
  }