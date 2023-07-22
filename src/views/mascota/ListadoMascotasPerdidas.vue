<template>
    <ion-grid>
        <ion-row>
            <ion-col>

                <ion-row>
                    <ion-col size-xs="12" size-sm="12" size-md="10" size-lg="6" size-xl="4" v-for="(p, index) in listado" :key="p">

                        <ion-card>
                            <ion-card-header>
                                <ion-row class="ion-justify-content-center ion-align-items-center">
                                    <ion-col  size="auto">
                                        <img :src="getUrlImagen(p.imagen)" class="img-mascota" alt="Imagen Mascota" />
                                    </ion-col>
                                </ion-row>
                                
                            </ion-card-header>

                            <ion-card-content>
                                <ion-grid>
                                    <ion-row>
                                        <ion-col><h2><b>{{ p.nombre }}</b></h2></ion-col>
                                    </ion-row>

                                    <ion-row>
                                        <ion-col><ion-button expand="full" @click="ir_a_perfil(index)">Perfil</ion-button></ion-col>
                                    </ion-row>
                                </ion-grid>
                            </ion-card-content>
                        </ion-card>

                    </ion-col>
                </ion-row>
                

            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script setup>
import { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { get_all, get_one } from '../../api/mascotas'
import { perfil_mascota_seleccionado } from '../../store/app'

const perfil_obtenido = ref()
const router = useRouter()

const listado = ref()

async function ir_a_perfil(i){
    perfil_obtenido.value = await get_one( listado.value[i].id )
    if (perfil_obtenido.value.stat) {
        perfil_mascota_seleccionado.value = perfil_obtenido.value.data
        router.replace('/perfilMascota')
    }
}

function getUrlImagen( img ){ return process.env.VUE_APP_BACKEND_URL+img }

onMounted(async ()=>{
    let res = undefined
    res = await get_all()
    if (res?.stat){
        listado.value = res.data
        console.log(res)
    } 
})
</script>