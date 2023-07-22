import create from '@/helpers/request'

const service = create(process.env.VUE_APP_BACKEND_URL)

export function get_all() {  return service({ url: "/mascotas/get_all",  method: 'get'  }) }
export function get_one( id ) {  return service({ url: "/mascotas/get?id="+id,  method: 'get'  }) }
export function agregar( data ) { return service({  url: "/mascotas/agregar",    method: 'post', data  }) }
export function editar( data ) { return service({  url: "/mascotas/editar",    method: 'put', data  }) }
export function agregar_foto( data ) { return service({  url: "/mascotas/agregar_foto", method: 'post', data  }) }
export function eliminar_foto( data ) { return service({  url: "/mascotas/eliminar_foto", method: 'post', data  }) }

export function perdidas_get_all() {  return service({ url: "/mascotas/perdidas_get_all",  method: 'get'  }) }