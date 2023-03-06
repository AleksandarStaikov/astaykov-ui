import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Education from '../views/Education.vue'
import Experience from '../views/Experience.vue'
import Web3 from '../views/LatestPosts/Web3.vue';
import AlarmClock from '../views/LatestPosts/AlarmClock.vue';

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
    path: '/latest/web3',
    name: 'Web3',
    component: Web3
  },
  {
    path: '/latest/alarm-clock',
    name: 'AlarmClock',
    component: AlarmClock
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
