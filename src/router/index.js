import { createRouter, createWebHistory } from 'vue-router'
import Sala from '../views/Sala.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sala',
      component: Sala
    },
    {
      path: "/detalle/:id",
      name: "detalle",
      props: true,
      component: () => import("../views/Detalle.vue")
    },
    {
      path: '/formulario',
      name: 'formulario',
      component: () => import('../views/Formulario.vue')
    },
  ]
})

export default router
