<template>
    <ion-grid>
        <ion-row>
            <ion-col>
                <ListadoMascotas />
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script setup>
import { ref } from  'vue';
import { IonCol, IonGrid, IonRow } from '@ionic/vue';

import ListadoMascotas from '../mascota/ListadoMascotas.vue'
</script>