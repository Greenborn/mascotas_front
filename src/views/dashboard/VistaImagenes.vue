<template>
    <ion-grid>
        <ion-row>
            <ion-col v-for="imagen in listado_imagenes" :key="imagen">
                <img  :src="getUrlImagen( imagen )" class="img-mascota" alt="Imagen Mascotar" />

                <ion-button expand="full" @click="eliminar_foto">
                    <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
                </ion-button>
                
            </ion-col>
        </ion-row>
    </ion-grid>
    <ion-alert
        :is-open="alert_modal"
        header="¿Confirma eliminar fotografía?"
        :buttons="alertButtons"></ion-alert>
</template>

<script setup>
import { ref } from 'vue'
import { IonCol, IonGrid, IonRow, IonIcon, IonButton } from '@ionic/vue';
import { trashOutline } from 'ionicons/icons';
import { IonAlert } from '@ionic/vue' 

const props = defineProps(['listado_imagenes'])

const alert_modal = ref(false)
const alertButtons = ref([
    {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
            alert_modal.value = false
        },
    },
    {
        text: 'Aceptar',
        role: 'confirm',
        handler: () => {
            alert_modal.value = false
            alert('funcionalidad aun no implementada')
        },
    },
]);

function getUrlImagen( img ){ return process.env.VUE_APP_BACKEND_URL+img.url }

function eliminar_foto(){
    alert_modal.value = true
}
</script>