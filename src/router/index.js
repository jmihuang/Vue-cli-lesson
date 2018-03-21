import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Todos from '@/components/Todos'
import Products from '@/components/Products'
import About from '@/components/About'
import AboutHome from '@/components/AboutHome'
import AboutYou from '@/components/AboutYou'
import AboutMe from '@/components/AboutMe'
import Info from '@/components/Info'
import InfoHome from '@/components/InfoHome'
import InfoAddress from '@/components/InfoAddress'
import InfoTel from '@/components/InfoTel'
import InfoMember from '@/components/InfoMember'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: HelloWorld,
      children: [
        {
          path: 'todos',
          component: Todos
        },
        {
          path: 'products/:id',
          component: Products
        },
        {
          path: 'about',
          component: About,
          children: [
            { path: '', component: AboutHome },
            { path: 'you', component: AboutYou },
            { path: 'me', component: AboutMe }
          ]
        },
        {
          path: 'info',
          component: Info,
          children: [
            { path: '', name: 'home', component: InfoHome },
            { path: 'tel', name: 'tel', component: InfoTel },
            { path: 'address', name: 'address', component: InfoAddress },
            { path: 'member/:id', name: 'member', component: InfoMember },
            {
              path: 'all', components: {
                a: InfoTel,
                b: InfoAddress,
                c: InfoMember
              }
            }
          ]
        }
      ]
    },

  ]
})
