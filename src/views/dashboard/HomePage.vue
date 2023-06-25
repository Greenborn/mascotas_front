<template>
<ion-page id="main-content" class="def-fondo">
    <ion-grid>
        <ion-row class="ion-justify-content-center ion-align-items-center">
            <ion-col size-xs="12" size-sm="12" size-md="10" size-lg="8">
                <ion-button @click="agregar_mascota"><ion-icon slot="icon-only" :icon="alertCircleOutline"></ion-icon>&nbsp; Agregar Mascota</ion-button>
            </ion-col>
        </ion-row>

        <ion-row class="ion-justify-content-center ion-align-items-center">
            <ion-col size-xs="12" size-sm="12" size-md="10" size-lg="8">
                <ListadoMascotas />
            </ion-col>
        </ion-row>
    </ion-grid>
</ion-page>
</template>

<script setup>
import { ref } from  'vue';
import { IonCol, IonGrid, IonPage, IonRow, IonButton, IonIcon } from '@ionic/vue';
import { alertCircleOutline } from 'ionicons/icons';
import ListadoMascotas from '../mascota/ListadoMascotas.vue'
import { perfil_mascota_seleccionado } from '../../store/app'

import { useRouter } from 'vue-router'
const router = useRouter()

function agregar_mascota(){
    perfil_mascota_seleccionado.value = null
    router.replace('/perfilMascota')
}
</script>