import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import { ruta_actual } from '../store/app'

export const ROUTES_CONFIG:any = {
  '/login': { 
    fullscreen: true,
    titulo: "Ingresar"
  },
  '/registro': {
    fullscreen: true,
    titulo: "Registrarse"
  },
  '/registro_1': {
    fullscreen: true,
    titulo: "Aceptación de Terminos y Condiciones"
  },
  '/registro_2': {
    fullscreen: true,
    titulo: "Verificacar Cuenta"
  },
  '/home': {
    fullscreen: false,
    titulo: "Home"
  },
  '/Cuenta': {
    fullscreen: false,
    titulo: "Cuenta"
  },
  '/MisMascotas': {
    fullscreen: false,
    titulo: "Mis Mascotas"
  },
  '/Catalogo': {
    fullscreen: false,
    titulo: "Catálogo"
  },
  /*'/Recomendaciones': {
    fullscreen: false,
    titulo: "Recomendaciones"
  },*/
  '/PerdiMiMascota': {
    fullscreen: false,
    titulo: "Reportar Extravío"
  },
  '/ElegirMascota': {
    fullscreen: false,
    titulo: "Elegir Mascota"
  },
  '/ReportarAparicion': {
    fullscreen: false,
    titulo: "Reportar Aparición"
  },
  '/MascotasPerdidas': {
    fullscreen: false,
    titulo: "Mascotas Perdidas"
  },
  '/ReportarAparicionOK': {
    fullscreen: false,
    titulo: "Reporte Recibido"
  },
  '/PedidosyNotificaciones': {
    fullscreen: false,
    titulo: "Pedidos y Notificaciones"
  },
  '/faq': {
    fullscreen: false,
    titulo: "Preguntas Frecuentes"
  },
  '/TerminosYCondiciones': {
    fullscreen: false,
    titulo: "Términos y Condiciones"
  },
  '/perfilMascota': {
    fullscreen: false,
    titulo: "Perfil de Mascota"
  },
  '/descargarQR': {
    fullscreen: false,
    titulo: "Ver QR"
  },
  '/qr': {
    fullscreen: true,
    titulo: "Perfil Mascota"
  },
  '/Salir': {
    fullscreen: false,
    titulo: "Salir"
  },
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
    path: '/qr', 
    component: () => import ('../views/mascota/QrPublico.vue')
  },
  {
    path: '/registro',
    component: () => import ('../views/usuario/RegistroUsuario.vue')
  },
  {
    path: '/registro_1',
    component: () => import ('../views/usuario/RegistroTyC.vue')
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
    path: '/ElegirMascota',
    component: () => import ('../views/mascota/ElegirMascota.vue')
  },
  { 
    path: '/MisMascotas',
    component: () => import ('../views/dashboard/HomePage.vue')
  },
  {
    path: '/Catalogo',
    component: () => import ('../views/mercado/CatalogoView.vue')
  },
  /*{
    path: '/Recomendaciones',
    component: () => import ('../views/mascota/RecomendacionesPage.vue')
  },*/
  {
    path: '/PerdiMiMascota',
    component: () => import ('../views/mascota/reportes/ReportarExtravio.vue')
  },
  {
    path: '/ReportarAparicion',
    component: () => import ('../views/mascota/reportes/ReportarAvistamiento.vue')
  },
  {
    path: '/ReportarAparicionOK',
    component: () => import ('../views/mascota/reportes/ReporteExito.vue')
  },
  {
    path: '/MascotasPerdidas',
    component: () => import ('../views/mascota/MascotasPerdidas.vue')
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
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

await routerBeforeEach(router)

export async function routerBeforeEach( router:any ){
  router.beforeEach(async (to:any, from:any, next:any) => {
    ruta_actual.value = { router: to, cfg: ROUTES_CONFIG[to.path] }
    next()
  })
}