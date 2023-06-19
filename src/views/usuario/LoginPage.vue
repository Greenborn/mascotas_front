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
                                    <ion-col>
                                        <ion-list>
                                            <ion-item><ion-input label="Usuario (E-Mail)" placeholder="Usuario (E-Mail)" v-model="modelo.u"></ion-input></ion-item>
                                            <ion-item><ion-input label="Contraseña" placeholder="Contraseña" type="password" v-model="modelo.p"></ion-input></ion-item>
                                        </ion-list>
                                    </ion-col>
                                </ion-row>

                                <ion-row>
                                    <ion-col><a>Recuperar contraseña</a></ion-col>
                                </ion-row>

                                <ion-row>
                                    <ion-col><ion-button expand="full" @click="registro">Registrarse</ion-button></ion-col>
                                    <ion-col><ion-button expand="full" @click="do_login">Ingresar</ion-button></ion-col>
                                </ion-row>
                            </ion-grid>
                        </ion-card-content>
                    </ion-card>
                </ion-col>
            </ion-row>
        </ion-grid>
        <ion-loading v-if="present_loading" :message="loading_msg"> </ion-loading>
    </ion-page>
</template>

<script setup>
import { ref } from 'vue'
import { IonItem, IonList } from '@ionic/vue' 
import { IonCol, IonPage, IonGrid, IonRow, IonImg, IonCard, IonCardContent, IonCardHeader  } from '@ionic/vue';
import { IonButton, IonInput } from '@ionic/vue';
import { IonLoading } from '@ionic/vue';
import { useRouter } from 'vue-router'

import { login } from '../../api/usuario'

const router = useRouter()

const modelo = ref({
    u: '',  p: ''
})
const loading_msg = ref('')
const present_loading = ref(false)
const res_login = ref()

async function do_login(){
    if (modelo.value.u == undefined || modelo.value.u == ''){
        alert('Es necesario especificar un nombre de usuario.')
        return
    }

    if (modelo.value.p == undefined || modelo.value.p == '') {       
        alert('Es necesario especificar una contraseña.')
        return
    }

    loading_msg.value = 'Iniciando Sesión...'
    present_loading.value = true

    res_login.value = await login(modelo.value)
    if (res_login.value?.stat) {
        present_loading.value = false
        router.replace('home')
    } else {
        present_loading.value = false
        alert(res_login.value.text)
    }
}

function registro(){
    router.replace('registro')
}
</script>