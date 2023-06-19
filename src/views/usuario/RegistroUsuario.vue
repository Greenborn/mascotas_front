<template>
    <ion-page id="main-content" class="def-fondo">
        <ion-grid>
            <ion-row class="ion-justify-content-center ion-align-items-center vh-100">
                <ion-col size="auto">
                    
                    <ion-card>
                        <ion-card-header>
                            <ion-row>
                                <ion-col>
                                    <h2>Solicitud de registro</h2>
                                </ion-col>
                            </ion-row>
                        </ion-card-header>
                       
                        <ion-card-content>
                            <ion-grid>                       
                                <ion-list>
                                    <ion-item>
                                        <ion-input label="Nombre" placeholder="Nombre"></ion-input>
                                    </ion-item>
                                    <ion-item>
                                        <ion-input label="E-Mail" placeholder="E-Mail"></ion-input>
                                    </ion-item>
                                    <ion-item>
                                        <ion-textarea label="Descripción" placeholder="Descripción"></ion-textarea>
                                    </ion-item>
                                    <ion-item>
                                        <ion-datetime label="Fecha de Nacimiento" placeholder="Fecha de Nacimiento"></ion-datetime>
                                    </ion-item>
                                    <ion-item>
                                        <ion-input label="Contraseña" type="password" value="password"></ion-input>
                                    </ion-item>
                                    <ion-item>
                                        <ion-input label="Repetir Contraseña" type="password" value="password"></ion-input>
                                    </ion-item>
                                </ion-list>
                                  
                                <ion-row>
                                    <ion-col><ion-button @click="registro_p2" expand="full">Continuar</ion-button></ion-col>
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
import { ref } from 'vue'
import { IonItem, IonList } from '@ionic/vue' 
import { IonCol, IonPage, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader  } from '@ionic/vue';
import { IonButton, IonInput } from '@ionic/vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const modelo = ref()

function registro_p2(){
    router.replace('registro_2')
}
</script>