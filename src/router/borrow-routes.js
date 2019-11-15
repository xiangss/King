export default {
  path: '/borrow',
  component: ()=>import('../pages/borrow/root/borrow'),
  children:[
    {
      name:'application',
      path:'application/:id',
      props:true,
      component:()=>import('../pages/common/application/application')
    }
  ]
}