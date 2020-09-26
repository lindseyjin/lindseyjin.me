import Vue from 'vue'
import Router from 'vue-router'
import AboutMe from '@/components/about-me'
import Projects from '@/components/projects'
import ContactMe from '@/components/contact-me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/contact-me',
      name: 'ContactMe',
      component: ContactMe
    }
  ]
})
