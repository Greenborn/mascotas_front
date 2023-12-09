<template>
    <ion-page id="main-content" class="def-fondo">
        <ion-grid>
            <ion-row class="ion-justify-content-center  vh-100" >
                <ion-col size-xs="12" size-sm="12" size-md="10" size-lg="8">
                    <ion-accordion-group>
                        <ion-accordion :value="faq.id" v-for="faq in listado_preguntas" :key="faq">
                            <ion-item slot="header" color="light">
                                <ion-label>{{ faq.pregunta }}</ion-label>
                            </ion-item>
                            <div class="ion-padding" slot="content">{{ faq.respuesta }}</div>
                            </ion-accordion>
                    </ion-accordion-group>
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { IonItem, IonList } from '@ionic/vue' 
import { IonCol, IonPage, IonGrid, IonRow, IonImg, IonCard, IonCardContent, IonCardHeader  } from '@ionic/vue';
import { IonAccordion, IonAccordionGroup, IonLabel } from '@ionic/vue';

import { preguntas_frecuentes } from '../../api/general'
import { useAuth } from '../../helpers/authComposable'

const authCompo = useAuth()
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