import { ref } from 'vue'

export const perfil_mascota_seleccionado:any = ref()
export const mascota_no_selec_evnt:any = { call_:()=>{ return null; } }
export const mascota_seleccionada_evnt:any = { call_:()=>{ return null; } }
export const ruta_actual:any = ref()
export const user_data:any = ref()

export const APP_BTNS_ALERT = [
    {
        text: 'Aceptar',
        role: 'confirm',
        handler: () => {
            APP_alert_modal.value = false
            APP_alert_ejecutar.value()
        },
    }
]

export const APP_BTNS_DIALOG = [
    {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
            APP_alert_modal.value = false
        },
    },
    {
        text: 'Aceptar',
        role: 'confirm',
        handler: () => {
            APP_alert_modal.value = false
            APP_alert_ejecutar.value()
        },
    }
]

export const APP_alert_modal:any    = ref(false)
export const APP_text_alert:any     = ref('¿Confirma eliminar fotografía?')
export const APP_alert_ejecutar:any = ref(()=>{ return null; })
export const APP_alertButtons:any   = ref( APP_BTNS_DIALOG );

export function mostrar_alerta( texto:string ){
    APP_text_alert.value = texto
    APP_alertButtons.value = APP_BTNS_ALERT
    APP_alert_ejecutar.value = () => {
        APP_alert_modal.value = false
    }
    APP_alert_modal.value = true
}

export function mostrar_confirmacion( texto:string, funcion_ok:any ){
    APP_text_alert.value     = texto
    APP_alertButtons.value   = APP_BTNS_DIALOG
    APP_alert_ejecutar.value = funcion_ok
    APP_alert_modal.value    = true
}

export const loading_msg = ref('Cargando...')
export const present_loading = ref(false)
export function mostrar_cargando( texto = ''){
    loading_msg.value = texto
    present_loading.value = true
    console.log(texto)
}

export function ocultar_cargando(){
    present_loading.value = false
}