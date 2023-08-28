<template>
    <ion-page id="main-content" class="def-fondo">
        <ion-grid>
            <ion-row class="ion-justify-content-center ion-align-items-center vh-100" >
                <ion-col size-xs="12" size-sm="12" size-md="10" size-lg="6" >
                    <ion-card>
                        <ion-card-header>
                            <ion-row class="ion-justify-content-center ion-align-items-center">
                                <ion-col size="auto">
                                    <h2>Terminos y Condiciones</h2>
                                </ion-col>
                            </ion-row>
                        </ion-card-header>

                        <ion-card-content>
                            <div class="w-100" v-html="terminos_y_condiciones.texto"></div>
                        </ion-card-content>
                    </ion-card>
                    
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { IonCol, IonPage, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader  } from '@ionic/vue';

import { legal } from '../../api/general'

const terminos_y_condiciones = ref('')
onMounted(async ()=>{
    let res = undefined
    res = await legal()
    if (res?.stat){
        for (let c=0; c < res.data.length; c++)
            if (res.data[c].id == 'terminos_y_condiciones') {
                terminos_y_condiciones.value = res.data[c]
                break
            }

    } 
})
</script>