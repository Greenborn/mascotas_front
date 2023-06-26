<template>
    <ion-page id="main-content" class="def-fondo">
        <ion-grid>
            <ion-row class="ion-justify-content-center ion-align-items-center vh-100" >
                <ion-col size="auto">
                    {{ listado_preguntas }}
                </ion-col>
            </ion-row>
        </ion-grid>
        <ion-loading v-if="present_loading" :message="loading_msg"> </ion-loading>
    </ion-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { IonItem, IonList } from '@ionic/vue' 
import { IonCol, IonPage, IonGrid, IonRow, IonImg, IonCard, IonCardContent, IonCardHeader  } from '@ionic/vue';
import { IonLoading } from '@ionic/vue';

import { preguntas_frecuentes } from '../../api/general'

const loading_msg = ref('')
const present_loading = ref(false)

const listado_preguntas = ref([])
onMounted(async ()=>{
    let res = undefined
    res = await preguntas_frecuentes()
    if (res?.stat){
        listado_preguntas.value = res.data
        console.log(res)
    } 
})
</script>