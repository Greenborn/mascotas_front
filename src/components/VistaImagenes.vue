<template>
    <ion-grid>
        <ion-row>
            <ion-col v-for="imagen in listado_imagenes" :key="imagen" size-xs="12" size-md="6">
                
                <div class="w-100 cont-img-mascota" :style="{ 'height': def_size }">
                    <img  :src="getUrlImagen( imagen )" class="img-mascota" alt="Imagen Mascota"  />
                </div>

                <ion-row>
                    <ion-col>
                        <ion-button expand="full" @click="eliminar_foto( imagen )">
                            <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
                        </ion-button>
                    </ion-col>

                    <ion-col>
                        <ion-button expand="full" @click="definir_perfil( imagen )">
                            <ion-icon slot="icon-only" :icon="starOutline"></ion-icon>
                        </ion-button>
                    </ion-col>
                </ion-row>
                
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { IonCol, IonGrid, IonRow, IonIcon, IonButton } from '@ionic/vue';
import { trashOutline, starOutline } from 'ionicons/icons';
import { IonAlert } from '@ionic/vue' 
import { APP_alert_modal, APP_alert_ejecutar, APP_text_alert, APP_alertButtons } from '../store/app'

const props = defineProps(['listado_imagenes'])
const emit  = defineEmits(['buttons_events'])

const def_size = ref('0px')

const imagen_selected = ref()
const FUNCIONES = {
    'confirm_eliminar': () => {
        emit('buttons_events', { key: 'confirm_eliminar', imagen: imagen_selected.value })
    },
    'confirm_def_perfil': () => {
        emit('buttons_events', { key: 'confirm_def_perfil', imagen: imagen_selected.value })
    },
}

function getMaxHeigth(){
    const cont_img = document.getElementsByClassName('cont-img-mascota')[0]
    if (cont_img) return cont_img.scrollWidth + 'px'
}

function getUrlImagen( img ){ 
    if (img?.prev) return img.url
    return process.env.VUE_APP_BACKEND_URL+img.url 
}

function eliminar_foto( imagen ){
    APP_text_alert.value  = '¿Confirma eliminar fotografía?'
    imagen_selected.value = imagen
    APP_alert_ejecutar.value = FUNCIONES['confirm_eliminar']
    APP_alert_modal.value = true
}

function definir_perfil( imagen ){
    APP_text_alert.value  = 'La foto seleccionada se mostrará como Foto Principal en el perfil de la mascota'
    imagen_selected.value = imagen
    APP_alert_ejecutar.value = FUNCIONES['confirm_def_perfil']
    APP_alert_modal.value = true
}

onMounted(async ()=>{
    setTimeout(() => { //Se espera un momento a que se actualize la vista esto sera bugero si la vista tarda mas de 200 ms en actualizarse
        def_size.value = getMaxHeigth()
    }, 200);
})
</script>