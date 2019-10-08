import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Company from '@/components/Company'
import UseNow from '@/components/UseNow'
import ProdtPrice from '@/components/ProdtPrice'
import News from '@/components/News'
import ShiKu from '@/components/ShiKu'
import KuXin from '@/components/KuXin'
import Action from '@/components/Action'
import Compare from '@/components/Compare'
import Download from '@/components/Download'
import Interface from '@/components/Interface'
import Introduce from '@/components/Introduce'
import CompanyInfo from '@/components/CompanyInfo'
import CompanyCondition from '@/components/CompanyCondition'
import CompanyMap from '@/components/CompanyMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      'path': '/',
      redirect: '/home' 
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/Company',
      name: 'Company',
      component: Company 
    },
    {
      path: '/UseNow',
      name: 'UseNow',
      component: UseNow 
    },
    {
      path: '/ProdtPrice',
      name: 'ProdtPrice',
      component: ProdtPrice 
    },{
      path:'/ShiKu',
      name:'ShiKu',
      component:ShiKu
    },{
      path:'/KuXin',
      name:'KuXin',
      component:KuXin
    },{
      path:'/Action',
      name:'Action',
      component:Action
    },{
      path:'/Download',
      name:'Download',
      component:Download
    },{
      path:'/Interface',
      name:'Interface',
      component:Interface
    },{
      path:'/Introduce',
      name:'Introduce',
      component:Introduce
    },
    {
      path:'/Compare',
      name:'Compare',
      component:Compare
    },{
      path:'/CompanyInfo',
      name:'CompanyInfo',
      component:CompanyInfo
    },{
      path:'/CompanyCondition',
      name:'CompanyCondition',
      component:CompanyCondition
    },{
      path:'/CompanyMap',
      name:'CompanyMap',
      component:CompanyMap
    }
  ]
})
