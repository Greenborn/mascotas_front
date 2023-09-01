<template>
        <ion-page id="main-content" class="def-fondo">
        <ion-grid>
            <ion-row class="ion-justify-content-center ion-align-items-center vh-100" >
                <ion-col size-xs="12" size-sm="12" size-md="10" size-lg="8">
                    <ion-row>
                        <ion-col>
                            
                            <ion-card>
                                <ion-card-header>
                                   <h2>¡Gracias!</h2>
                                </ion-card-header>

                                <ion-card-content>
                                    <ion-grid>
                                        <ion-row>
                                            <ion-col>
                                                <p>Registramos tu reporte de aparición</p>
                                                <p>Al dueño de la mascota le llegará una notificación.</p>
                                                <p>¡Gracias por ayudar en la búsqueda!</p>
                                            </ion-col>
                                        </ion-row>

                                        <ion-row>
                                            <ion-col>
                                                <ion-button @click="home">Inicio</ion-button>
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
import { IonCol, IonPage, IonGrid, IonRow } from '@ionic/vue';
import { IonCard, IonCardContent, IonCardHeader } from '@ionic/vue';
import { useRouter } from 'vue-router'

const router = useRouter()

function home(){
    router.replace('/home')
}
</script>