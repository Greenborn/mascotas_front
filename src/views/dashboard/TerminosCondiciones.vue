<template>
    <ion-page id="main-content" class="def-fondo">
        <ion-grid>
            <ion-row class="ion-justify-content-center ion-align-items-center vh-100" >
                <ion-col size="auto">
                    {{ terminos_y_condiciones }}
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

import { legal } from '../../api/general'

const loading_msg = ref('')
const present_loading = ref(false)
const terminos_y_condiciones = ref('')
onMounted(async ()=>{
    let res = undefined
    res = await legal()
    if (res?.stat){
        terminos_y_condiciones.value = res.data[0]
        console.log(res)
    } 
})
</script>