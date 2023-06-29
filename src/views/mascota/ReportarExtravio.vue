<template>
<ion-page id="main-content" class="def-fondo">
    <ion-grid>
        <ion-row class="ion-justify-content-center ion-align-items-center">
            <ion-col size-xs="12" size-sm="12" size-md="10" size-lg="8">
                <ion-col size-xs="12">
                    <ion-card>
                        <ion-card-header>
                            <ion-row>
                                <ion-col>
                                    <h2>Reportar extravío de: {{ perfil_mascota_seleccionado?.nombre }}</h2>
                                </ion-col>
                            </ion-row>
                        </ion-card-header>

                        <ion-card-content>
                            <ion-grid>
                                <ion-row class="ion-justify-content-center ion-align-items-center">
                                   
                                </ion-row>
                            </ion-grid>
                        </ion-card-content>
                    </ion-card>

                </ion-col>

                <ion-col size-xs="12">
                    <ion-card>
                        
                        <ion-card-content>
                            <ion-grid>
                                <ion-row class="ion-justify-content-center ion-align-items-center">
                                    <ion-col size="auto"><ion-button @click="volver_a_perfil"><ion-icon slot="icon-only" :icon="alertCircleOutline"></ion-icon>&nbsp; Cancelar</ion-button></ion-col>
                                    <ion-col size="auto"><ion-button @click="perdi_mi_mascota"><ion-icon slot="icon-only" :icon="alertCircleOutline"></ion-icon>&nbsp; Reportar Extravío</ion-button></ion-col>
                                </ion-row>
                            </ion-grid>
                        </ion-card-content>
                    </ion-card>

                </ion-col>

                <ion-row>
                    <ion-col size-xs="12">

                    </ion-col>
                </ion-row>
                
            </ion-col>
        </ion-row>
    </ion-grid>
</ion-page>
</template>

<script setup>
import { ref } from 'vue'
import { IonCol, IonPage, IonGrid, IonRow, IonCard, IonIcon, IonCardContent, IonCardHeader, IonButton, IonButtons } from '@ionic/vue';
import { perfil_mascota_seleccionado } from '../../store/app'
import { alertCircleOutline } from 'ionicons/icons';
import { get_one } from '../../api/mascotas'

import { useRouter } from 'vue-router'

const router = useRouter()

const perfil_obtenido = ref()

function perdi_mi_mascota(){
    alert('Funcionalidad no implementada')
}

async function volver_a_perfil(){
    if (perfil_mascota_seleccionado.value?.id == undefined){
        router.replace('/home')
        return false
    }
        

    perfil_obtenido.value = await get_one( perfil_mascota_seleccionado.value.id )
    if (perfil_obtenido.value.stat) {
        perfil_mascota_seleccionado.value = perfil_obtenido.value.data
        router.replace('/perfilMascota')
    }
}
</script>