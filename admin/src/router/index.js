import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children:[
        {path:'/categorise/create',component:()=>import('@/views/CategoryEdit')},
        {path:'/categories/list',component:()=>import('@/views/CategoryList')}
      ]
    },

  ]
})
