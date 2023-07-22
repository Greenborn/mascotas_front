<template>
    <ion-grid>
        <ion-row>
            <ion-col v-for="imagen in listado_imagenes" :key="imagen" size-xs="12" size-md="6">
                <div class="w-100 cont-img-mascota" :style="{ 'max-height': def_size }">
                    <img  :src="getUrlImagen( imagen )" class="img-mascota" alt="Imagen Mascota"  />
                </div>

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
import { ref, onMounted } from 'vue'
import { IonCol, IonGrid, IonRow, IonIcon, IonButton } from '@ionic/vue';
import { trashOutline } from 'ionicons/icons';
import { IonAlert } from '@ionic/vue' 

const props = defineProps(['listado_imagenes'])

const def_size = ref('0px')

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

function getMaxHeigth(){
    const cont_img = document.getElementsByClassName('cont-img-mascota')[0]
    if (cont_img) return cont_img.scrollWidth + 'px'
}

function getUrlImagen( img ){ 
    if (img?.prev) return img.url
    return process.env.VUE_APP_BACKEND_URL+img.url 
}

function eliminar_foto(){
    alert_modal.value = true
}

onMounted(async ()=>{
    setTimeout(() => { //Se espera un momento a que se actualize la vista esto sera bugero si la vista tarda mas de 200 ms en actualizarse
        def_size.value = getMaxHeigth()
    }, 200);
})
</script>