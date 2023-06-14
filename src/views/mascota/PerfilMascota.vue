<template>
    <ion-grid>
        <ion-row class="ion-justify-content-center ion-align-items-center">
            <ion-col size-xs="12" size-sm="12" size-md="10" size-lg="8">

                <ion-row>
                    <ion-col size-xs="12" size-md="6">
                        <ion-card>
                            <ion-card-header>
                                <ion-row class="ion-justify-content-center ion-align-items-center">
                                    <ion-col  size="auto">
                                        <img :src="informacion_perfil.imagen" class="img-mascota" alt="Imagen Mascota" />
                                    </ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col><ion-button expand="full">Agregar / Quitar Foto</ion-button></ion-col>
                                </ion-row>
                            </ion-card-header>

                            <ion-card-content>
                                <ion-grid>
                                    <ion-row>
                                        <ion-col><h2><b>{{ informacion_perfil.nombre }}</b></h2></ion-col>
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
                                <ion-grid>
                                    
                                    <ion-row>
                                        <ion-col><ion-input label="Nombre" placeholder="Nombre"></ion-input></ion-col>
                                    </ion-row>

                                    <ion-row>
                                        <ion-col><ion-textarea label="Descripción" placeholder="Descripción"></ion-textarea></ion-col>
                                    </ion-row>

                                    <ion-row>
                                        <ion-col><ion-input label="Raza" placeholder="Raza"></ion-input></ion-col>
                                    </ion-row>

                                    <ion-row>
                                        <ion-col><ion-input label="Sexo" placeholder="Sexo"></ion-input></ion-col>
                                    </ion-row>

                                    <ion-row>
                                        <ion-col><ion-datetime label="Fecha de Nacimiento" placeholder="Fecha de Nacimiento"></ion-datetime></ion-col>
                                    </ion-row>

                                    <ion-row>
                                        <ion-col><ion-button expand="full" @click="perdi_mi_mascota">Perdí mi mascota</ion-button></ion-col>
                                        <ion-col><ion-button expand="full" @click="descargar_qr">Descargar QR</ion-button></ion-col>
                                        <ion-col><ion-button expand="full" @click="editar">Editar</ion-button></ion-col>
                                    </ion-row>
                                </ion-grid>
                            </ion-card-content>
                        </ion-card>

                    </ion-col>
                </ion-row>
                

            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script setup>
import { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonButton, IonInput, IonTextarea, IonDatetime, IonButtons } from '@ionic/vue';
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { perfil_mascota_seleccionado } from '../../store/app'

const informacion_perfil = ref( perfil_mascota_seleccionado.value )
const router = useRouter()

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