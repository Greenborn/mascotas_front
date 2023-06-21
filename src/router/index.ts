import { createRouter, createWebHistory } from '@ionic/vue-router';
import { ruta_actual } from '../store/app'

export const ROUTES_CONFIG:any = {
  '/login': { 
    fullscreen: true,
  }
}

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
    path: '/registro',
    component: () => import ('../views/usuario/RegistroUsuario.vue')
  },
  {
    path: '/registro_2',
    component: () => import ('../views/usuario/RegistroVerificacion.vue')
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
    path: '/perfilMascota',
    component: () => import ('../views/mascota/PerfilMascota.vue')
  },
  {
    path: '/descargarQR',
    component: () => import ('../views/mascota/DescargarQR.vue')
  },

  {
    path: '/Salir',
    component: () => import ('../views/usuario/LogOut.vue')
  },
]

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

await routerBeforeEach(router)

export async function routerBeforeEach( router:any ){
  router.beforeEach(async (to:any, from:any, next:any) => {
    
    console.log(ROUTES_CONFIG[to.path], from, next)
    ruta_actual.value = { router: to, cfg: ROUTES_CONFIG[to.path] }
    next()
  })
}