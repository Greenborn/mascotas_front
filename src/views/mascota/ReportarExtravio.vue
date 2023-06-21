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
                                    <ion-col size="auto"><ion-button @click="perdi_mi_mascota"><ion-icon slot="icon-only" :icon="alertCircleOutline"></ion-icon>&nbsp; Cancelar</ion-button></ion-col>
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
import { IonCol, IonPage, IonGrid, IonRow, IonCard, IonIcon, IonCardContent, IonCardHeader, IonButton, IonButtons } from '@ionic/vue';
import { perfil_mascota_seleccionado } from '../../store/app'
import { alertCircleOutline } from 'ionicons/icons';

function perdi_mi_mascota(){
    alert('Funcionalidad no implementada')
}
</script>