import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/pages/Projects.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/pages/Blog.vue')
  },
  {
    path: '/blog/:id',
    name: 'BlogPost',
    component: () => import('@/pages/BlogPost.vue')
  },
  {
    path: '/reading',
    name: 'Reading',
    component: () => import('@/pages/Reading.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/pages/Contact.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue')
  }
]

export const router = createRouter({
  history: createWebHistory('/'),  // Changed to root path
  routes
}) 
