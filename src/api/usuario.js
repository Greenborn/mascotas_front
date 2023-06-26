import create from '@/helpers/request'

const service = create(process.env.VUE_APP_BACKEND_URL)

export function login( data ) { return service({  url: "/usuario/login",    method: 'post', data  }) }
actualizar_datos
export function registro( data ) { return service({  url: "/usuario/registro", method: 'post', data  }) }
export function actualizar_datos( data ) { return service({  url: "/usuario/actualizar_datos", method: 'put', data  }) }

export function verifica_email( data ) { return service({  url: "/usuario/verifica_email", method: 'post', data  }) }

export function logout() { return service({  url: "/usuario/logout", method: 'put'  }) }