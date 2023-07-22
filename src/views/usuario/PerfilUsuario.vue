<template>
<ion-page id="main-content" class="def-fondo">
    <ion-grid>
        <ion-row class="ion-justify-content-center ion-align-items-center">
            <ion-col size-xs="12" size-sm="12" size-md="10" size-lg="8">

                <ion-row>
                    <ion-col size-xs="12" v-if="modelo != null">
                        <ion-card>
                            <ion-card-content>
                                <ion-grid>
                                    <ion-row class="ion-justify-content-center ion-align-items-center">
                                        <ion-col size="auto">
                                            <ion-list>
                                                <ion-item>
                                                    <ion-toggle :checked="edicion_habilitada" @ionChange="editar_click" labelPlacement="start" ></ion-toggle>
                                                    Editar
                                                </ion-item>
                                            </ion-list>
                                        </ion-col>
                                    </ion-row>
                                </ion-grid>
                            </ion-card-content>
                        </ion-card>

                    </ion-col>
                </ion-row>

                <ion-row>
                    <ion-col size-xs="12" size-md="6">
                        <ion-card>
                            <ion-card-header>
                                <ion-row class="ion-justify-content-center ion-align-items-center">
                                    <ion-col  size="auto">
                                        <img :src="p.imagen" class="img-mascota" alt="Imagen Mascota" />
                                    </ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col><ion-button expand="full">Agregar / Quitar Foto</ion-button></ion-col>
                                </ion-row>
                            </ion-card-header>

                        </ion-card>
                    </ion-col>

                    <ion-col size-xs="12" size-md="6">
                        <ion-card>
                            <ion-card-header>
                                <ion-row>
                                    <ion-col>
                                        <h2>Información General - {{ modelo.nombre }}</h2>
                                    </ion-col>
                                </ion-row>
                            </ion-card-header>

                            <ion-card-content>
                                <ion-grid>
                                    
                                    <ion-row>
                                        <ion-col>
                                            <ion-list>
                                                <ion-item>
                                                    <ion-input :disabled="!edicion_habilitada" v-model="modelo.nombre" label="Nombre" placeholder="Nombre"></ion-input></ion-item>
                                                <ion-item>
                                                    <ion-textarea :disabled="!edicion_habilitada" v-model="modelo.descripcion" label="Descripción" placeholder="Descripción"></ion-textarea></ion-item>
                                                <ion-item>
                                                    <ion-input  :disabled="!edicion_habilitada" v-model="modelo.email" label="E-Mail" placeholder="E-Mail"></ion-input></ion-item>
                                                <ion-item>
                                                    <ion-input :disabled="!edicion_habilitada" v-model="modelo.pass"  label="Contraseña" type="password" value="password"></ion-input></ion-item>
                                                <ion-item>
                                                    <ion-input :disabled="!edicion_habilitada" v-model="modelo.rep_pass"  label="Repetir Contraseña" type="password" value="password"></ion-input></ion-item>
                                            </ion-list>    
                                        </ion-col>
                                    </ion-row>
                                    
                                    <SelectorFecha :disabled="!edicion_habilitada" v-model="modelo.fecha_nacimiento" />
                                    <ion-row v-if="edicion_habilitada">
                                        <ion-col><ion-button expand="full" @click="editar">Guardar</ion-button></ion-col>
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
import { ref } from 'vue'
import { IonItem, IonList, IonToggle } from '@ionic/vue';
import { IonCol, IonPage, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonButton, IonInput, IonTextarea, IonDatetime } from '@ionic/vue';
import { user_data } from '../../store/app'
import { actualizar_datos } from '../../api/usuario'

import SelectorFecha from '../../components/SelectorFecha'

const p = { nombre: 'Flia. Tonnini', imagen: 'assets/test/person.jpeg' }

const modelo = ref(inicializa_modelo())

const edicion_habilitada = ref(false)
function editar_click(){
    edicion_habilitada.value = !edicion_habilitada.value
}

function inicializa_modelo(){
    return {...user_data.value, pass: '********', rep_pass: ''
    }
}

async function editar(){
    if (modelo.value.nombre == ''){
        alert('Se espera nombre de usuario')
        return false
    }

    if (modelo.value.email == ''){
        alert('Se espera e-mail')
        return false
    }

    if (modelo.value.fecha_nacimiento == ''){
        alert('Se espera fecha de nacimiento')
        return false
    }

    let res_actualiza = undefined
    res_actualiza = await actualizar_datos( modelo.value )
    if (res_actualiza.stat){
        alert('Funcionalidad no Implementada')
    } else {
        alert('Ocurrio un error')
    }
    
}
</script>