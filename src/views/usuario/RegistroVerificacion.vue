<template>
    <ion-page id="main-content" class="def-fondo">
        <ion-grid>
            <ion-row class="ion-justify-content-center ion-align-items-center vh-100">
                <ion-col size="auto">
                    
                    <ion-card>
                        <ion-card-header>
                            <ion-row>
                                <ion-col>
                                    <h2>Verificación de Cuenta</h2>
                                    <p>Para finalizar el proceso de verificación ingrese el código que se ha enviado a la dirección de E-Mail registrada.</p>
                                </ion-col>
                            </ion-row>
                        </ion-card-header>

                        <ion-card-content>
                            <ion-grid>
                                
                                <ion-row>
                                    <ion-col><ion-input label="Codigo de Verificación" placeholder="Codigo de Verificación"></ion-input></ion-col>
                                </ion-row>
                                
                                <ion-row>
                                    <ion-col><ion-button @click="registro_p3" expand="full">Continuar</ion-button></ion-col>
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


function registro_p3(){
    router.replace('home')
}
</script>