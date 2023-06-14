import create from '@/helpers/request'

const service = create(process.env.VUE_APP_BACKEND_URL)

export function get_all() {
  return service({
    url: "/mascotas/get_all",
    method: 'get'
  })
}