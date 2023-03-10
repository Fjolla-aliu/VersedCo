/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { auth } from '../firebase'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        requiresAuth: true
      }

    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/ShopView.vue'),
      meta: {
        requiresAuth: true
      }

    },
    {
      path: '/product',
      name: '/product',
      component: () => import('../views/ProductView.vue'),
      meta: {
        requiresAuth: true
      }

    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')

    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Register.vue')

    }
  ]

})
//   router.beforeEach((to, from, next) => {
//     if (to.path === '/login' && auth.currentUser) {
//       next('/')
//       return;
//     }
   
//     if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
//       next('/login')
//       return;
//     }
//     next();
// })

export default router
