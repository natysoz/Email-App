import Vue from 'vue'
import Router from 'vue-router'

import landing    from './views/LandingPage'
import dashboard  from './views/AppDashboard'
import mailApp    from './components/MailApp'
import mailViewer from './components/mail/MailViewer'
import settings   from './components/Settings'
import todoApp    from './components/TodoApp'



Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: landing,
    },
    {
      path: '/dashboard',
      component: dashboard,
      children:[
          {path:'mail',components:{default:mailApp},
          children:[
            {path:':inbox'},
            {path:'inbox/:id',component:mailViewer},
            {path:':important'},
            {path:'important/:id',component:mailViewer},
            {path:':sent'},
            {path:'sent/:id',component:mailViewer},
            {path:':deleted'},
            {path:'deleted/:id',component:mailViewer},
          ],
          },
          {path:'todo',component:todoApp},
          {path:'settings',component:settings},
      ],
    },
  ]
})
