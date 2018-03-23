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
import GetParams from '@/components/GetParams'
import Spa from '@/components/Spa'
import SpaCourses from '@/components/SpaCourses'
import SpaAbout from '@/components/SpaAbout'
import SpaReservation from '@/components/SpaReservation'
import CourseList from '@/components/CourseList'
import CourseDetail from '@/components/CourseDetail'



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
          path: 'products/:id?',
          component: Products
        },
        {
          path: 'about',
          alias: 'asloabout',
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
        },
        {
          path: 'getParams',
          component: GetParams,
          props: (route) => {
            return {
              id: 30
            }
          }
        },
        {
          path: 'spa',
          component: Spa,
          children: [
            { path: '', component: SpaAbout },
            { path: 'about', component: SpaAbout },
            {
              path: 'courses', component: SpaCourses,
              children: [
                { path: '', component: CourseList },
                { path: ':id', component: CourseDetail },
              ]
            },
            { path: 'reservation', component: SpaReservation }
          ]
        },
        {
          path: 'redirect',
          redirect: '/Info/tel'
        },
        {
          path: '/admin',
          redirect: (from) => {
            return { name: 'address' };
          }
        },
        {
          path: '*',
          redirect: { name: 'home' }
        }
      ]
    },

  ]
})
