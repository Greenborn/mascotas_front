<template>
    <ion-page id="main-content" class="def-fondo">
        <ion-grid>
            <ion-row class="ion-justify-content-center ion-align-items-center vh-100" >
                <ion-col size="auto">
                    {{ perfil_mascota_seleccionado }}
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