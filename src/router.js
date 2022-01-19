import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import ModeloDez from './views/ModeloDez.vue'
import ModeloDois from './views/ModeloDois.vue'
import ListaModeloDez from './views/ListaModeloDez.vue'
import ListaModeloDois from './views/ListaModeloDois.vue'
import auth from './auth'


Vue.use(Router)

function requireAuth (to, from, next) {
  if (!auth.isAuthenticated()) {
    this.$router.replace('/login')
  } else {
    next()
  }
}

const router = new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    {
      path: '/',
      name: 'ModeloDois',
      component: ModeloDois
    },
    {
      path: '/lista-modelo-2',
      name: 'ListaModeloDois',
      component: ListaModeloDois
    },
    {
      path: '/detalhe-modelo-2/:id',
      name: 'DetalheModelo2',
      props:true,
      component: () => import(/* webpackChunkName: "DetalheModelo2" */ './views/DetalheModeloDois.vue')
    },
    {
      path: '/alterar-modelo-2/:id',
      name: 'AlterarModelo2',
      props:true,
      component: () => import(/* webpackChunkName: "DetalheModelo2" */ './views/AlterarModelo2.vue')
    },
    {
      path: '/modelo-10',
      name: 'ModeloDez',
      component: ModeloDez
    },
    {
      path: '/lista-modelo-10',
      name: 'ListaModeloDez',
      component: ListaModeloDez
    },
    {
      path: '/detalhe-modelo-10/:id',
      name: 'DetalheModelo10',
      props:true,
      component: () => import(/* webpackChunkName: "DetalheModelo2" */ './views/DetalheModeloDez.vue')
    },
    {
      path: '/alterar-modelo-10/:id',
      name: 'AlterarModelo10',
      props:true,
      component: () => import(/* webpackChunkName: "DetalheModelo2" */ './views/AlterarModelo10.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

export default router
