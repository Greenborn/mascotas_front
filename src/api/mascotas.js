import create from '@/helpers/request'

const service = create(process.env.VUE_APP_BACKEND_URL)

export function get_all() {  return service({ url: "/mascotas/get_all",  method: 'get'  }) }
export function get_one( id ) {  return service({ url: "/mascotas/get?id="+id,  method: 'get'  }) }
export function agregar( data ) { return service({  url: "/mascotas/agregar",    method: 'post', data  }) }
export function quitar( data ) { return service({  url: "/mascotas/quitar",    method: 'delete', data  }) }
export function editar( data ) { return service({  url: "/mascotas/editar",    method: 'put', data  }) }
export function def_foto_principal( data ) { return service({  url: "/mascotas/def_foto_principal",    method: 'put', data  }) }

export function perdidas_get_all() {  return service({ url: "/mascotas/perdidas_get_all",  method: 'get'  }) }
export function reportar_extravio( data ){ return service({  url: "/mascotas/reportar_extravio",    method: 'post', data  }) }
export function reportar_avistamiento( data ){ return service({  url: "/mascotas/reportar_avistamiento",  method: 'post', data  }) }