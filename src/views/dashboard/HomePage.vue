<template>
<ion-page id="main-content" class="def-fondo">
    <ion-grid>
        <ion-row>
            <ion-col>
                <ListadoMascotas />
            </ion-col>
        </ion-row>
    </ion-grid>
</ion-page>
</template>

<script setup>
import { ref } from  'vue';
import { IonCol, IonGrid, IonPage, IonRow } from '@ionic/vue';

import ListadoMascotas from '../mascota/ListadoMascotas.vue'
</script>