<template>
    <ion-page id="main-content" class="def-fondo">
        <ion-grid>
            <ion-row class="ion-justify-content-center ion-align-items-center vh-100" >
                <ion-col size-xs="12" size-md="6" size-lg="3" size-sm="12">
                    
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
                                            <ion-item><ion-input class="text-right" label="Usuario (E-Mail)" placeholder="Usuario (E-Mail)" v-model="modelo.u"></ion-input></ion-item>
                                            <ion-item><ion-input class="text-right" label="Contraseña" placeholder="Contraseña" type="password" v-model="modelo.p"></ion-input></ion-item>
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
    </ion-page>
</template>

<script setup>
import { ref } from 'vue'
import { IonItem, IonList } from '@ionic/vue' 
import { IonCol, IonPage, IonGrid, IonRow, IonImg, IonCard, IonCardContent, IonCardHeader  } from '@ionic/vue';
import { IonButton, IonInput } from '@ionic/vue';
import { useRouter } from 'vue-router'
import { user_data, mostrar_cargando, ocultar_cargando } from '../../store/app'

import { login } from '../../api/usuario'

const router = useRouter()

const modelo = ref({
    u: '',  p: ''
})

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

    mostrar_cargando( 'Iniciando Sesión...' )

    res_login.value = await login(modelo.value)
    if (res_login.value?.stat) {
        ocultar_cargando()
        user_data.value = res_login.value?.data
        router.replace('home')
    } else {
        ocultar_cargando()
        alert(res_login.value.text)
    }
}

function registro(){
    router.replace('registro')
}
</script>