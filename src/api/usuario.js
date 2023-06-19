import create from '@/helpers/request'

const service = create(process.env.VUE_APP_BACKEND_URL)

export function login( data ) {
  return service({  url: "/usuario/login",    method: 'post', data  })
}