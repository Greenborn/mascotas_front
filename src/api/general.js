import create from '@/helpers/request'

const service = create(process.env.VUE_APP_BACKEND_URL)

export function preguntas_frecuentes() {  return service({ url: "/general/preguntas_frecuentes",  method: 'get'  }) }
export function legal() {  return service({ url: "/general/legal",  method: 'get'  }) }