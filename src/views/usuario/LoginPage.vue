<template>
    <ion-page id="main-content" class="def-fondo">
        <ion-grid>
            <ion-row class="ion-justify-content-center ion-align-items-center vh-100">
                <ion-col size="auto">
                    
                    <ion-card>
                        <ion-card-header>
                            <ion-img src="assets/icon/icon.png" alt="Logo APP PET QR"></ion-img>
                        </ion-card-header>

                        <ion-card-content>
                            <ion-grid>
                                <ion-row>
                                    <ion-col>Pet Land Tdl</ion-col>
                                </ion-row>

                                <ion-row>
                                    <ion-col><ion-input label="Usuario" placeholder="Usuario"></ion-input></ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col><ion-input label="Contraseña" type="password" value="password"></ion-input></ion-col>
                                </ion-row>

                                <ion-row>
                                    <ion-col><a>Recuperar contraseña</a></ion-col>
                                </ion-row>

                                <ion-row>
                                    <ion-col><ion-button expand="full">Registrarse</ion-button></ion-col>
                                    <ion-col><ion-button expand="full" @click="login">Ingresar</ion-button></ion-col>
                                </ion-row>
                            </ion-grid>
                        </ion-card-content>
                    </ion-card>
                    
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-page>
</template>

<script setup>
import { IonCol, IonPage, IonGrid, IonRow, IonImg, IonCard, IonCardContent, IonCardHeader  } from '@ionic/vue';
import { IonButton, IonInput } from '@ionic/vue';
import { useRouter } from 'vue-router'

const router = useRouter()

function login(){
    router.replace('home')
}
</script>