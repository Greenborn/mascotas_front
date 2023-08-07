import { ref } from 'vue'

export const perfil_mascota_seleccionado:any = ref()
export const ruta_actual:any = ref()
export const user_data:any = ref()

export const APP_alert_modal    = ref(false)
export const APP_text_alert     = ref('¿Confirma eliminar fotografía?')
export const APP_alert_ejecutar = ref(()=>{ return null; })
export const APP_alertButtons   = ref([
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
    },
]);