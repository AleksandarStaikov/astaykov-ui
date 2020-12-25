import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Education from '../views/Education.vue'
import Experience from '../views/Experience.vue'
import MyProjects from '../views/MyProjects.vue'
import GetToKnowMe from '../views/GetToKnowMe.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/my-projects',
    name: 'MyProjects',
    component: MyProjects
  },
  {
    path: '/get-to-know-me',
    name: 'GetToKnowMe',
    component: GetToKnowMe
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
