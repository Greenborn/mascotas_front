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
                                    <h2>{{ perfil_mascota_seleccionado.nombre }}</h2>
                                </ion-col>
                            </ion-row>
                        </ion-card-header>

                        <ion-card-content>
                            <ion-grid>
                                <ion-row class="ion-justify-content-center ion-align-items-center">
                                    <ion-col size="auto"><ion-button @click="descargar_qr"><ion-icon slot="icon-only" :icon="cloudDownloadOutline"></ion-icon>&nbsp; Descargar</ion-button></ion-col>
                                </ion-row>
                            </ion-grid>
                        </ion-card-content>
                    </ion-card>

                </ion-col>

                <ion-row>
                    <ion-col size-xs="12">
                        <ion-card>
                            
                            <ion-card-content>
                                <ion-grid>
                                    <ion-row class="ion-justify-content-center ion-align-items-center">
                                        <ion-col  size="auto">
                                            <qrcode-vue id="qr_svg" :value="'https://petappqr.com/#/qr?i='+perfil_mascota_seleccionado.id" :size="400" level="L" />
                                        </ion-col>
                                    </ion-row>
                                    <ion-row class="ion-justify-content-center ion-align-items-center">
                                        <ion-col  size="auto">
                                            Código: <b>{{ perfil_mascota_seleccionado.id }}</b>
                                        </ion-col>
                                    </ion-row>
                                </ion-grid>
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
import QrcodeVue from 'qrcode.vue'
import { ref } from 'vue'
import { cloudDownloadOutline } from 'ionicons/icons';
import { IonCol, IonGrid, IonPage, IonRow, IonCard, IonIcon, IonCardContent, IonCardHeader, IonButton, IonButtons } from '@ionic/vue';

import { perfil_mascota_seleccionado } from '../../store/app'

const canvas = ref()

function descargar_qr(){
    canvas.value   = document.querySelector("#qr_svg")
    const contexto = canvas.value.getContext("2d")

    const enlace = document.createElement('a')
    enlace.download = "QR_"+perfil_mascota_seleccionado.value.nombre+'.png'
    enlace.href = canvas.value.toDataURL("image/png", 1)
    enlace.click()
}

</script>