<template>
    <ion-page id="main-content" class="def-fondo">
        <ion-grid>
            <ion-row class="ion-justify-content-center ion-align-items-center vh-100" >
                <ion-col size-xs="12" size-sm="12" size-md="10" size-lg="8">
                    <ion-row>

                        <ion-col>
                            <ion-card>
                                <ion-card-header>
                                    <ion-grid>
                                        <ion-row class="ion-justify-content-center ion-align-items-center">
                                            <ion-col size="auto">
                                                <h1><b>Reportando avistamiento de: {{ perfil_mascota_seleccionado?.nombre }}</b></h1>
                                            </ion-col>
                                        </ion-row>
                                    </ion-grid>
                                </ion-card-header>

                                <ion-card-content>

                                    <ion-grid>
                                        <ion-row>
                                            <ion-col>
                                                Reportado el: {{ date2string(perfil_mascota_seleccionado?.reporte?.fecha_registro) }}
                                            </ion-col>
                                        </ion-row>

                                        <ion-row>
                                            <ion-col>
                                                {{ perfil_mascota_seleccionado?.reporte?.comentario }}
                                            </ion-col>
                                        </ion-row>

                                        <ion-row>
                                            <ion-col>

                                                <ion-list>
                                                    <ion-item>
                                                        <ion-textarea 
                                                            v-model="modelo.descripcion"
                                                            label="Descripción" placeholder="Descripción" />
                                                    </ion-item>

                                                    <ion-item>
                                                        <ion-button @click="agrega_ubicacion">
                                                            <ion-icon slot="icon-only" :icon="alertCircleOutline"></ion-icon>&nbsp; Adjuntar Ubicación</ion-button>
                                                    </ion-item>

                                                    <ion-item>
                                                        <ion-button @click="agrega_ubicacion">
                                                            <ion-icon slot="icon-only" :icon="alertCircleOutline"></ion-icon>&nbsp; Adjuntar Imágenes</ion-button>
                                                    </ion-item>
                                                </ion-list>
                                   
                                            </ion-col>
                                        </ion-row>

                                        <ion-row>
                                            <ion-col>
                                                <ion-button @click="reportar">
                                                    <ion-icon slot="icon-only" :icon="alertCircleOutline"></ion-icon>&nbsp; Reportar</ion-button>
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
import { ref } from 'vue'
import { IonCol, IonPage, IonGrid, IonRow, IonCard, IonIcon, IonCardContent, IonCardHeader, IonButton, IonList, IonItem, IonTextarea } from '@ionic/vue';
import { perfil_mascota_seleccionado, mostrar_cargando, ocultar_cargando } from '../../../store/app'
import { alertCircleOutline } from 'ionicons/icons';
import { reportar_avistamiento } from '../../../api/mascotas'
import { date2string } from '../../../utils/fechas'
import { useRouter } from 'vue-router'

const router = useRouter()

const modelo = ref({ descripcion: '', id: '' })
async function reportar(){
    let respuesta_ = undefined
    mostrar_cargando('Enviando reporte...')
    modelo.value.id = perfil_mascota_seleccionado.value?.reporte?.id
    respuesta_= await reportar_avistamiento(modelo.value)
    if (respuesta_?.stat) {
        ocultar_cargando()
        router.replace('/ReportarAparicionOK')
    } else {
        ocultar_cargando()
        alert(respuesta_.text)
    }
}

function agrega_ubicacion(){
    alert('Funcionalidad no implementada')
}
</script>