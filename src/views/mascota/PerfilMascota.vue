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
                                        <ion-col size="auto" v-if="(modelo.perdida) && modelo.id !== null"><ion-button @click="set_encontrada" color="success"><ion-icon slot="icon-only" :icon="alertCircleOutline"></ion-icon>&nbsp; ¡Fue Encontrada!</ion-button></ion-col>
                                        <ion-col size="auto" v-if="(!modelo.perdida) && modelo.id !== null"><ion-button @click="perdi_mi_mascota" color="danger"><ion-icon slot="icon-only" :icon="alertCircleOutline"></ion-icon>&nbsp; Reportar Extravío</ion-button></ion-col>
                                        <ion-col size="auto"><ion-button @click="descargar_qr"><ion-icon slot="icon-only" :icon="qrCodeOutline"></ion-icon>&nbsp; Descargar QR</ion-button></ion-col>
                                        <ion-col size="auto" v-if="perfil_mascota_seleccionado?.id != undefined">
                                            <ion-list>
                                                <ion-item>
                                                    <ion-toggle :checked="edicion_habilitada" @ionChange="editar_click" labelPlacement="start" ></ion-toggle>
                                                    Editar
                                                </ion-item>
                                            </ion-list>
                                        </ion-col>
                                        <ion-col size="auto"><ion-button @click="quitar_mascota" color="danger"><ion-icon slot="icon-only" :icon="alertCircleOutline"></ion-icon>&nbsp;Quitar del Listado</ion-button></ion-col>
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
                                        <VistaImagenes :listado_imagenes="modelo?.imagenes" @buttons_events="vista_img_buttons_events" />
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
                                    
                                    <SelectorFecha :disabled="!edicion_habilitada" v-model="modelo.fecha_nacimiento" />
                                                                       
                                    <ion-button @click="guardar" v-if="edicion_habilitada">
                                        <ion-icon slot="icon-only" :icon="alertCircleOutline"></ion-icon>&nbsp; Guardar</ion-button>
                                    
                                </ion-list>

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
import { ref, onMounted } from 'vue'
import { createOutline, alertCircleOutline, qrCodeOutline, addCircleOutline } from 'ionicons/icons';
import { perfil_mascota_seleccionado, mostrar_alerta, mostrar_cargando, ocultar_cargando } from '../../store/app'
import { agregar, editar, quitar, def_foto_principal, fue_encontrada  } from '../../api/mascotas'

import VistaImagenes from '../../components/VistaImagenes'
import SelectorFecha from '../../components/SelectorFecha'
import { BtnUploadConfig } from '../../components/ElementoUIGenerico'
import { FORMATOS_IMAGEN, MAX_IMAGE_SIZE } from '../../const'
import { useAuth } from '../../helpers/authComposable'

const authCompo = useAuth()
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
        nombre: '', descripcion: '', raza: '', sexo: 1, tipo: 1, fecha_nacimiento: new Date(), imagenes: [], perdida: false, id: null
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

onMounted(async ()=>{
    setTimeout(()=>{
        if (perfil_mascota_seleccionado.value?.id == undefined)
            edicion_habilitada.value = true
    }, 200)
})

async function set_encontrada(){
    mostrar_cargando()
    let res = undefined
    res = await fue_encontrada( { id: perfil_mascota_seleccionado.value?.id} )
    if (res.stat){
        mostrar_alerta(res.text)
        modelo.value.perdida = false
        ocultar_cargando()
    } else {
        mostrar_alerta(res.text)
        ocultar_cargando()
    }
}

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
                mostrar_alerta('Tamaño de imagen excedido, el máximo es: '+ Math.round(MAX_IMAGE_SIZE/(1024*1024)) + ' MB')
                return false
            }

            for (let j=0; j < FORMATOS_IMAGEN.length; j++)
                if (files[i].type == FORMATOS_IMAGEN[j].type) {
                    encontrado = true
                    break
                }
            
            if (!encontrado) {
                mostrar_alerta('Formato de imagen no soportado!')
                return false
            }

            const filereader = new FileReader();
            filereader.readAsDataURL(files[i]);
            filereader.onload = function (evt) {
                modelo.value.imagenes.push( { 'name': files[i].name, 'type':files[i].type, 'base64': evt.target.result, 'url': URL.createObjectURL(files[i]), 'prev':true } )
            }
            
        }
}

async function quitar_mascota(){
    
    let res = null
    res = await quitar({ 'id': perfil_mascota_seleccionado.value.id })
    if (res.stat){
        mostrar_alerta(res.text)
        router.replace('/MisMascotas')
    } else {
        mostrar_alerta("Ocurrió un error, reintente más tarde.")
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
        mostrar_alerta('Es necesario completar el nombre')
        return false
    }

    if (modelo.value.descripcion == ''){
        mostrar_alerta('Es necesario completar la descripción')
        return false
    }

    if (modelo.value.fecha_nacimiento == ''){
        mostrar_alerta('Es necesario completar la fecha de nacimiento')
        return false
    }

    return true
}

async function vista_img_buttons_events( evnt ){
    let res_deffoto = null

    switch( evnt.key ){
        case 'confirm_def_perfil':
            res_deffoto = await def_foto_principal({ 'id_mascota': evnt?.imagen?.id_mascota, 'id_imagen': evnt?.imagen?.id })
            if (res_deffoto.stat){
                console.log(res_deffoto)
            } else {
                mostrar_alerta('Ocurrio un error')
            }
        break;
        default:
            mostrar_alerta('funcionalidad aun no implementada')
        break;
    }
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
        mostrar_alerta(respuesta_.text)
        router.replace('/home')
    } else {
        mostrar_alerta('Ocurrio un error')
    }
}
</script>