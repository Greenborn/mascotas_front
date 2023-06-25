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
                                        <img :src="p.imagen" class="img-mascota" alt="Imagen Mascota" />
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
import { get_all } from '../../api/mascotas'
import { perfil_mascota_seleccionado } from '../../store/app'

const router = useRouter()

const listado = ref()

function ir_a_perfil(i){
    perfil_mascota_seleccionado.value = listado.value[i]
    router.replace('/perfilMascota')
}

onMounted(async ()=>{
    let res = undefined
    res = await get_all()
    if (res?.stat){
        listado.value = res.data
        console.log(res)
    } 
})
</script>