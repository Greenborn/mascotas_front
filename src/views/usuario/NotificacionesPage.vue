<template>
    <ion-page id="main-content" class="def-fondo">
        <ion-grid>
            <ion-row class="ion-justify-content-center ion-align-items-center vh-100" >
                <ion-col size-xs="12" size-sm="12" size-md="10" size-lg="8">
                    <ion-accordion-group>
                        <ion-accordion :value="notif.id" v-for="(notif, index) in listado_notificaciones" :key="notif">
                            <ion-item slot="header" color="light">
                                <ion-label>{{ notif.titulo }} - {{ date2string(notif.fecha_creado)  }} - leida: {{ notif.leida }}</ion-label>
                            </ion-item>
                            <div class="ion-padding" slot="content">
                                <ion-grid>
                                    <ion-row>
                                        <ion-col>
                                            {{ notif.contenido }}
                                        </ion-col>
                                    </ion-row>

                                    <ion-row>
                                        <ion-col>
                                            <ion-button @click="ir_a_perfil(index)" v-if="notif.meta_data?.pet" >Ir a perfil Mascota</ion-button>
                                        </ion-col>
                                    </ion-row>

                                    <ion-row>
                                        <ion-col>
                                            <ion-button @click="set_noleido" >Marcar como No Leido</ion-button>
                                            <ion-button @click="archivar" >Archivar</ion-button>
                                        </ion-col>
                                    </ion-row>
                                </ion-grid>
                            </div>
                        </ion-accordion>
                    </ion-accordion-group>
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { IonItem, IonList } from '@ionic/vue' 
import { IonCol, IonPage, IonGrid, IonRow  } from '@ionic/vue';
import { IonAccordion, IonAccordionGroup, IonLabel } from '@ionic/vue';
import { IonButton } from '@ionic/vue';

import { mostrar_cargando, ocultar_cargando, perfil_mascota_seleccionado } from '../../store/app'
import { get_notificaciones, notificacion_leida } from '../../api/usuario'
import { get_one } from '../../api/mascotas'
import { date2string } from '../../utils/fechas'

const router = useRouter()

const listado_notificaciones = ref([])

const perfil_obtenido = ref()
async function ir_a_perfil(i){
    perfil_obtenido.value = await get_one( listado_notificaciones.value[i].meta_data?.pet?.id )
    if (perfil_obtenido.value.stat) {
        perfil_mascota_seleccionado.value = perfil_obtenido.value.data
        router.replace('/perfilMascota')
    }
}

function set_noleido(){
    alert('Funcion aun no implementada')
}

function archivar(){
    alert('Funcion aun no implementada')
}

onMounted(async ()=>{
    let res = undefined
    mostrar_cargando('Consultando Notificaciones')
    res = await get_notificaciones()
    if (res?.stat){
        listado_notificaciones.value = res.data
        for (let i=0; i < listado_notificaciones.value.length; i++)
            listado_notificaciones.value[i].meta_data = JSON.parse(listado_notificaciones.value[i].meta_data)
        ocultar_cargando()
    } else {
        ocultar_cargando()
    }
})
</script>