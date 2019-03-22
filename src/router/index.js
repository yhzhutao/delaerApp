import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Home from '@/components/home/home'
import Order from '@/components/order/order'
import Mime from '@/components/mime/mime'
import CreateApplication from '@/components/createApplication/createApplication'
import ApplicationInfo from '@/components/applicationInfo/applicationInfo'
import PhoneNumberVerification from '@/components/phoneNumberVerification/phoneNumberVerification'
import ApplicationInfoEntering from '@/components/applicationInfoEntering/applicationInfoEntering'
import Commit from '@/components/commit/commit'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/login',component: Login},
    {path:'/home',component:Home},
    {path:'/order',component:Order},
    {path:'/mime',component:Mime},
    {path:'/createApplication',component:CreateApplication},
    {path:'/applicationInfo',component:ApplicationInfo},
    {path:'/phoneNumberVerification',component:PhoneNumberVerification},
    {path:'/applicationInfoEntering',component:ApplicationInfoEntering},
    {path:'/commit',component:Commit},
    {path:'*',redirect:'/login'}
  ]
})
