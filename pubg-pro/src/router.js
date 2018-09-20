import Vue from 'vue';
import Router from 'vue-router';
import MySection from './views/main/MySection';

import Detail from './views/details/Detail';

import NotFound from './views/NotFound';

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/main'},
    {path:'/main',component:MySection,children:[
      {path:'',redirect:'section1'},
      {path:'section1',component: ()=>import('./views/main/SectionOne')},
      {path:'section2',component: ()=> import('./views/main/SectionTwo')},
      {path:'section3',component: ()=> import('./views/main/SectionThree')},
      {path:'section4',component: ()=> import('./views/main/SectionFour')},
      {path:'section5',component: ()=> import('./views/main/SectionFive')},
      ]
    },
    {path:'/detail',component:Detail,children:[
      {path:'',redirect:'morearmor'},
      {path:'morearmor',component: ()=> import('./views/details/MoreArmor')},
      {path:'moregun',component: ()=> import('./views/details/MoreGun')},
      {path:'morecar',component: ()=> import('./views/details/MoreCar')},
    ]},
    {path:'/pubgapp',component: ()=> import('./views/pubgapp/PubgApp')},
    {path:'/*',component:NotFound}
    // {
    //   path: '/about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
