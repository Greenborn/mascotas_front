import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import ('../views/usuario/LoginPage.vue')
  },
  {
    path: '/home',
    component: () => import ('../views/dashboard/HomePage.vue')
  },
  {
    path: '/Cuenta',
    component: () => import ('../views/usuario/PerfilUsuario.vue')
  },
  {
    path: '/MisMascotas',
    component: () => import ('../views/dashboard/HomePage.vue')
  },
  {
    path: '/Recomendaciones',
    component: () => import ('../views/mascota/RecomendacionesPage.vue')
  },
  {
    path: '/PerdiMiMascota',
    component: () => import ('../views/mascota/ReportarExtravio.vue')
  },
  {
    path: '/ReportarAparicion',
    component: () => import ('../views/mascota/ReportarAvistamiento.vue')
  },
  {
    path: '/PedidosyNotificaciones',
    component: () => import ('../views/usuario/NotificacionesPage.vue')
  },
  {
    path: '/faq',
    component: () => import ('../views/dashboard/PreguntasFrecuentes.vue')
  },
  {
    path: '/TerminosYCondiciones',
    component: () => import ('../views/dashboard/TerminosCondiciones.vue')
  },
  {
    path: '/Salir',
    component: () => import ('../views/usuario/LogOut.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
