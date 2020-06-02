
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../components/about.vue'
import Home from '../components/home.vue'
import News from '../components/news.vue'
import Message from '../components/message.vue'
import MessageDetail from '../components/messageDetail.vue'

Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'/home/news',
          component:News
        },
        {
          path:'/home/message',
          component:Message,
          children:[
            {
              path:'/home/message/Detail/:id',
              component:MessageDetail
            }
          ]
        },
        {
          path:'/',
          redirect:'/home/news'
        }
      ]
    },
    {
      path:'/',
      redirect:'/About'
    }
  ]
})
