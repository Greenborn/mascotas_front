<template>
<ion-page id="main-content" class="def-fondo">
    <ion-grid>
        <ion-row class="ion-justify-content-center ion-align-items-center">
            <ion-col size-xs="12" size-sm="12" size-md="10" size-lg="8">
{{ informacion_perfil }}
                <ion-row>
                    <ion-col size-xs="12">
                        <ion-card>
                            
                            <ion-card-content>
                                <ion-grid>
                                    <ion-row class="ion-justify-content-center ion-align-items-center">
                                        <ion-col size="auto"><ion-button @click="perdi_mi_mascota"><ion-icon slot="icon-only" :icon="alertCircleOutline"></ion-icon>&nbsp; Reportar Extravío</ion-button></ion-col>
                                        <ion-col size="auto"><ion-button @click="descargar_qr"><ion-icon slot="icon-only" :icon="qrCodeOutline"></ion-icon>&nbsp; Descargar QR</ion-button></ion-col>
                                        <ion-col size="auto"><ion-button @click="editar"><ion-icon slot="icon-only" :icon="createOutline"></ion-icon>&nbsp; Editar</ion-button></ion-col>
                                    </ion-row>
                                </ion-grid>
                            </ion-card-content>
                        </ion-card>

                    </ion-col>

                    <ion-col size-xs="12" size-md="6">
                        <ion-card>
                            <ion-card-header>
                                <ion-row class="ion-justify-content-center ion-align-items-center">
                                    <ion-col  size="auto">
                                        <VistaImagenes :listado_imagenes="informacion_perfil?.imagenes"></VistaImagenes>
                                    </ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col><ion-button expand="full">Agregar / Quitar Foto</ion-button></ion-col>
                                </ion-row>
                            </ion-card-header>

                            <ion-card-content>
                                <ion-grid>
                                    <ion-row>
                                        <ion-col><h2><b>{{ informacion_perfil?.nombre }}</b></h2></ion-col>
                                    </ion-row>

                                </ion-grid>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>

                    <ion-col size-xs="12" size-md="6">
                        <ion-card>
                            <ion-card-header>
                                <ion-row>
                                    <ion-col>
                                        <h2>Información General</h2>
                                    </ion-col>
                                </ion-row>
                            </ion-card-header>

                            <ion-card-content>
                                <ion-list>
                                    <ion-item><ion-input label="Nombre" placeholder="Nombre" v-model="modelo.nombre"></ion-input></ion-item>
                                    <ion-item><ion-textarea label="Descripción" placeholder="Descripción" v-model="modelo.descripcion"></ion-textarea></ion-item>
                                    <ion-item><ion-input label="Raza" placeholder="Raza" v-model="modelo.raza"></ion-input></ion-item>
                                    <ion-item><ion-input label="Sexo" placeholder="Sexo" v-model="modelo.sexo"></ion-input></ion-item>
                                    <ion-item><ion-datetime label="Fecha de Nacimiento" placeholder="Fecha de Nacimiento" v-model="modelo.fecha_nacimiento"></ion-datetime></ion-item>
                                </ion-list>
                            </ion-card-content>
                        </ion-card>

                    </ion-col>
                </ion-row>
                

            </ion-col>
        </ion-row>
    </ion-grid>
</ion-page>
</template>
<script setup>
import { IonItem, IonList } from '@ionic/vue' 
import { IonCol, IonGrid, IonRow, IonPage, IonCard, IonIcon, IonCardContent, IonCardHeader, IonButton, IonInput, IonTextarea, IonDatetime, IonButtons } from '@ionic/vue';
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { createOutline, alertCircleOutline, qrCodeOutline } from 'ionicons/icons';
import { perfil_mascota_seleccionado } from '../../store/app'

import VistaImagenes from '../dashboard/VistaImagenes'

const informacion_perfil = ref( perfil_mascota_seleccionado.value )
const router = useRouter()

const modelo = ref({
    nombre: '', descripcion: '', raza: '', sexo: '', fecha_nacimiento: ''
})

function descargar_qr(){
    router.replace('/descargarQR')
}

function perdi_mi_mascota(){
    router.replace('/PerdiMiMascota')
}

function editar(){
    alert('Funcionalidad no Implementada')
}
</script>