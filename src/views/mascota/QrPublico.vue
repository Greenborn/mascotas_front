<template>
<ion-page id="main-content" class="def-fondo">
    <ion-grid>
        <ion-row class="ion-justify-content-center ion-align-items-center">
            
            <ion-col size-xs="12" size-sm="12" size-md="10" size-lg="8">
                <ion-row>
                    <ion-col size-xs="12" v-if="perfil_obtenido != null">
                        <ion-card>
                            <ion-card-content>
                                <ion-grid>
                                    <ion-row class="ion-justify-content-center ion-align-items-center">
                                        <ion-col size="auto"><ion-button @click="encontre_mascota"><ion-icon slot="icon-only" :icon="alertCircleOutline"></ion-icon>&nbsp; Reportar Allazgo</ion-button></ion-col>
                                    </ion-row>
                                </ion-grid>
                            </ion-card-content>
                        </ion-card>

                    </ion-col>
                </ion-row>
                
                <ion-row>
                    <ion-col size-xs="12" size-md="6">
                        <ion-card>
                            <ion-card-header>
                                <ion-row class="ion-justify-content-center ion-align-items-center">
                                    <ion-col  size="auto">
                                        <VistaImagenes :listado_imagenes="perfil_obtenido?.imagenes"></VistaImagenes>
                                    </ion-col>
                                </ion-row>
                            </ion-card-header>

                            <ion-card-content>
                                <ion-grid>
                                    <ion-row>
                                        <ion-col><h2><b>{{ perfil_obtenido?.nombre }}</b></h2></ion-col>
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
                                    <ion-item>{{perfil_obtenido?.nombre}}</ion-item>
                                    <ion-item>{{perfil_obtenido?.descripcion}}</ion-item>
                                    <ion-item>{{perfil_obtenido?.raza}}</ion-item>
                                    <ion-item>{{perfil_obtenido?.sexo}}</ion-item>
                                    <ion-item>{{perfil_obtenido?.fecha_nacimiento}}</ion-item>
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
import { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, 
    IonButton, IonPage, IonInput, IonTextarea, IonDatetime, IonIcon, IonItem, IonList } from '@ionic/vue';
import { onMounted, ref } from 'vue'
import { get_qr } from '../../api/mascotas'
import { createOutline, alertCircleOutline, qrCodeOutline, addCircleOutline } from 'ionicons/icons';

import VistaImagenes from '../../components/VistaImagenes'

const perfil_obtenido = ref( null )

function encontre_mascota(){
    alert ('aun no implementada')
}

onMounted(async ()=>{
    let id_perfil = undefined
    let res       = undefined

    id_perfil = location.href.split('/#/qr?i=')[1]
    if (id_perfil != ''){
        res = await get_qr( id_perfil )
        if (res?.stat) {
            perfil_obtenido.value = res.data
        }
    }
})
</script>