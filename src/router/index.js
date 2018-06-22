import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Article',
      component: Article
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
