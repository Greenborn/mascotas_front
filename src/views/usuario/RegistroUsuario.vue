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
                                        <ion-input class="text-right" label="Nombre" placeholder="Nombre" v-model="modelo.nombre"></ion-input>
                                    </ion-item>
                                    <ion-item>
                                        <ion-input class="text-right" label="E-Mail" placeholder="E-Mail"  v-model="modelo.email"></ion-input>
                                    </ion-item>
                                    <ion-item>
                                        <ion-textarea class="text-right" label="Descripción" placeholder="Descripción"  v-model="modelo.descripcion"></ion-textarea>
                                    </ion-item>
                                    <SelectorFecha label="Fecha de Nacimiento" v-model="modelo.fecha_nacimiento" />
                                    <ion-item>
                                        <ion-input class="text-right" label="Contraseña" type="password" value="password" v-model="modelo.pass"></ion-input>
                                    </ion-item>
                                    <ion-item>
                                        <ion-input class="text-right" label="Repetir Contraseña" type="password" value="password" v-model="modelo.repetir_pass"></ion-input>
                                    </ion-item>
                                </ion-list>
                                  
                                <ion-row>
                                    <ion-col><ion-button @click="registro_p1" expand="full">Continuar</ion-button></ion-col>
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
import { IonCol, IonPage, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonTextarea } from '@ionic/vue';
import { IonButton, IonInput } from '@ionic/vue';
import { useRouter } from 'vue-router'
import { user_data } from '../../store/app'

import SelectorFecha from '../../components/SelectorFecha'

const router = useRouter()

const modelo = ref({
    nombre: '', email: '', descripcion: '', fecha_nacimiento: { anio: undefined, mes: undefined, dia: undefined }, pass: '', repetir_pass: ''
})

async function registro_p1(){

    if (modelo.value.nombre == '') {
        alert('Es necesario especificar un Nombre.')
        return false;
    }

    if (modelo.value.email == '') {
        alert('Es necesario especificar un E-Mail.')
        return false;
    }

    if (modelo.value.descripcion == '') {
        alert('Es necesario especificar una Descripcion.')
        return false;
    }

    if (modelo.value.fecha_nacimiento == '') {
        alert('Es necesario especificar una Fecha de Nacimiento.')
        return false;
    }

    if (modelo.value.password == '') {
        alert('Es necesario especificar una Contraseña.')
        return false;
    }

    if (modelo.value.repetir_pass == '') {
        alert('Es necesario especificar la repetición de la Contraseña.')
        return false;
    }

    if (modelo.value.repetir_pass !== modelo.value.pass ) {
        alert('La Contraseña definida no coincide con la Repetición de Contraseña.')
        return false;
    }

    user_data.value = modelo.value
    router.replace('registro_1')
}
</script>