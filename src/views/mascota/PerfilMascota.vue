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
                                        <ion-col size="auto"><ion-button @click="perdi_mi_mascota"><ion-icon slot="icon-only" :icon="alertCircleOutline"></ion-icon>&nbsp; Reportar Extravío</ion-button></ion-col>
                                        <ion-col size="auto"><ion-button @click="descargar_qr"><ion-icon slot="icon-only" :icon="qrCodeOutline"></ion-icon>&nbsp; Descargar QR</ion-button></ion-col>
                                        <ion-col size="auto"><ion-button @click="editar"><ion-icon slot="icon-only" :icon="createOutline"></ion-icon>&nbsp; Editar</ion-button></ion-col>
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
                                        <VistaImagenes :listado_imagenes="modelo?.imagenes"></VistaImagenes>
                                    </ion-col>
                                </ion-row>

                                <ion-row class="ion-justify-content-center ion-align-items-center">
                                    <ion-col size="auto">
                                        <component 
                                            :is="btn_subir_foto.componente"
                                            v-if="btn_subir_foto.__visible()"
                                            :icon="btn_subir_foto.icon" iconPos="right" 
                                            :label="btn_subir_foto._label()"
                                            :disabled="btn_subir_foto._disabled()"
                                            :class="btn_subir_foto.class"
                                            :control_params = "btn_subir_foto.control_params"
                                            @click="btn_subir_foto._click"></component>                          
                                    </ion-col>
                                </ion-row>
                            </ion-card-header>

                            <ion-card-content>
                                <ion-grid>
                                    <ion-row>
                                        <ion-col><h2><b>{{ modelo?.nombre }}</b></h2></ion-col>
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
                                <ion-list>
                                    <ion-item>
                                        <ion-input label="Nombre" placeholder="Nombre" v-model="modelo.nombre"></ion-input>
                                    </ion-item>
                                    <ion-item>
                                        <ion-textarea label="Descripción" placeholder="Descripción" v-model="modelo.descripcion"></ion-textarea>
                                    </ion-item>
                                    <ion-item>
                                        <ion-input label="Raza" placeholder="Raza" v-model="modelo.raza"></ion-input>
                                    </ion-item>
                                    <ion-item>
                                        <ion-input label="Sexo" placeholder="Sexo" v-model="modelo.sexo"></ion-input>
                                    </ion-item>
                                </ion-list>

                                <SelectorFecha v-model="modelo.fecha_nacimiento" />
                            </ion-card-content>
                        </ion-card>

                    </ion-col>
                </ion-row>

                <ion-row>
                    <ion-col>
                        <ion-card>
                            <ion-card-content>
                                <ion-grid>
                                    <ion-row class="ion-justify-content-center ion-align-items-center">
                                        <ion-col size="auto"><ion-button @click="guardar">
                                            <ion-icon slot="icon-only" :icon="alertCircleOutline"></ion-icon>&nbsp; Guardar</ion-button>
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
import { IonItem, IonList } from '@ionic/vue' 
import { IonCol, IonGrid, IonRow, IonPage, IonCard, IonIcon, IonCardContent, IonCardHeader, IonButton, IonInput, 
    IonTextarea, IonSelect, IonSelectOption, IonButtons } from '@ionic/vue';
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { createOutline, alertCircleOutline, qrCodeOutline, addCircleOutline } from 'ionicons/icons';
import { perfil_mascota_seleccionado } from '../../store/app'
import { agregar, agregar_foto, eliminar_foto } from '../../api/mascotas'

import VistaImagenes from '../dashboard/VistaImagenes'
import SelectorFecha from '../../components/SelectorFecha'
import { BtnUploadConfig } from '../../components/ElementoUIGenerico'
import { FORMATOS_IMAGEN, MAX_IMAGE_SIZE } from '../../const'

const btn_subir_foto = ref(new BtnUploadConfig({ 
            class:'ml-1 mr-1',  label: 'Subir Foto', 
            _disabled: () => { return false },
            permisos: [], 
            control_params: { id: "subir_foto", _change: subir_foto_change }
        }))

const router = useRouter()

const modelo = ref(
    perfil_mascota_seleccionado.value ? perfil_mascota_seleccionado.value :
    {
        nombre: '', descripcion: '', raza: '', sexo: '', fecha_nacimiento: { anio:'', mes:'', dia:'' }, imagenes: []
    }
)

function descargar_qr(){
    router.replace('/descargarQR')
}

function subir_foto_change( evnt ){
    const files = evnt?.target?.files

    if (files != undefined)
        for (let i=0; i < files.length; i++){
            let encontrado = false
            
            if (files[i].size > MAX_IMAGE_SIZE){
                alert('Tamaño de imagen excedido, el máximo es: '+ Math.round(MAX_IMAGE_SIZE/(1024*1024)) + ' MB')
                return false
            }

            for (let j=0; j < FORMATOS_IMAGEN.length; j++)
                if (files[i].type == FORMATOS_IMAGEN[j].type) {
                    encontrado = true
                    break
                }
            
            if (!encontrado) {
                alert('Formato de imagen no soportado!')
                return false
            }

            const filereader = new FileReader();
            filereader.readAsDataURL(files[i]);
            filereader.onload = function (evt) {
                modelo.value.imagenes.push( { 'name': files[i].name, 'type':files[i].type, 'base64': evt.target.result, 'url': URL.createObjectURL(files[i]), 'prev':true } )
            }
            
        }
}

function perdi_mi_mascota(){
    router.replace('/PerdiMiMascota')
}

function editar(){
    alert('Funcionalidad no Implementada')
}

async function guardar(){
    if (modelo.value.nombre == ''){
        alert('Es necesario completar el nombre')
        return false
    }

    if (modelo.value.descripcion == ''){
        alert('Es necesario completar la descripción')
        return false
    }

    if (modelo.value.fecha_nacimiento == ''){
        alert('Es necesario completar la fecha de nacimiento')
        return false
    }

    let respuesta_agregar = undefined
    respuesta_agregar = await agregar( modelo.value )
    if (respuesta_agregar.stat) {
        alert(respuesta_agregar.text)
    } else {
        alert('Ocurrio un error')
    }
}
</script>