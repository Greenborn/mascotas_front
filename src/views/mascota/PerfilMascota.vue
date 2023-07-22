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
                                        <ion-input 
                                            :disabled="!edicion_habilitada" v-model="modelo.nombre"
                                            label="Nombre" placeholder="Nombre" />
                                    </ion-item>
                                    <ion-item>
                                        <ion-textarea 
                                            :disabled="!edicion_habilitada"  v-model="modelo.descripcion"
                                            label="Descripción" placeholder="Descripción" />
                                    </ion-item>
                                    <ion-item>
                                        <ion-select 
                                            :disabled="!edicion_habilitada" v-model="modelo.tipo"
                                            label="Es un" placeholder="Es un">
                                            <ion-select-option v-for="tipo in tipos_animales" :key="tipo" :value="tipo.v">{{tipo.t}}</ion-select-option>
                                        </ion-select>
                                    </ion-item>
                                    <ion-item>
                                        <ion-input 
                                            :disabled="!edicion_habilitada" v-model="modelo.raza"
                                            label="Raza" placeholder="Raza" />
                                    </ion-item>
                                    <ion-item>
                                        <ion-select 
                                            :disabled="!edicion_habilitada" v-model="modelo.sexo"
                                            label="Sexo" placeholder="Sexo">
                                            <ion-select-option v-for="sex in sexo_animal" :key="sex" :value="sex.v">{{sex.t}}</ion-select-option>
                                        </ion-select>
                                    </ion-item>
                                </ion-list>

                                <SelectorFecha :disabled="!edicion_habilitada" v-model="modelo.fecha_nacimiento" />
                            </ion-card-content>
                        </ion-card>

                    </ion-col>
                </ion-row>

                <ion-row v-if="edicion_habilitada">
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
    IonTextarea, IonSelect, IonSelectOption, IonButtons, IonToggle } from '@ionic/vue';
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { createOutline, alertCircleOutline, qrCodeOutline, addCircleOutline } from 'ionicons/icons';
import { perfil_mascota_seleccionado } from '../../store/app'
import { agregar, editar, agregar_foto, eliminar_foto } from '../../api/mascotas'

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
    perfil_mascota_seleccionado.value ? adecuar_formato_entrada(perfil_mascota_seleccionado.value) :
    {
        nombre: '', descripcion: '', raza: '', sexo: 1, tipo: 1, fecha_nacimiento: new Date(), imagenes: []
    }
)
const tipos_animales = ref([
    { v: 1, t: 'Perro' },
    { v: 2, t: 'Gato' },
])

const sexo_animal = ref([
    { v: 1, t: 'Hembra' },
    { v: 2, t: 'Macho' },
])

const edicion_habilitada = ref(false)

function adecuar_formato_entrada( modelo ){
    modelo.tipo             = Number(modelo.tipo)
    modelo.sexo             = Number(modelo.sexo)
    return modelo
}

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

function editar_click(){
    edicion_habilitada.value = !edicion_habilitada.value
}

function validar(){
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

    return true
}

function adecuar_formato_salida( modelo ){
    modelo = JSON.parse(JSON.stringify(modelo))

    //se quitan del envio las fotos que no se subieron actualmente
    for (let c=0; c < modelo.imagenes.length; c++) {
        if (!modelo.imagenes[c]?.prev)
            modelo.imagenes.splice( c, 1 )
    }
    
    return modelo
}

async function guardar(){
    if (!validar()) return false

    let respuesta_ = undefined
    if (!perfil_mascota_seleccionado.value?.id)
        respuesta_ = await agregar( adecuar_formato_salida( modelo.value ) )
    else
        respuesta_ = await editar( adecuar_formato_salida( modelo.value ) )

    if (respuesta_.stat) {
        alert(respuesta_.text)
    } else {
        alert('Ocurrio un error')
    }
}
</script>