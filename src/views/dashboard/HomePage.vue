<template>
    <ion-menu content-id="main-content">
        <ion-header>
        <ion-toolbar>
            <ion-title>Animalia</ion-title>
        </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">Este el contenido del menu</ion-content>
    </ion-menu>

    <ion-page id="main-content">
        <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
            </ion-buttons>
            <ion-title>Home</ion-title>
        </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
            <ion-grid>
                <ion-row>
                    <ion-col>
                        
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { IonCol, IonGrid, IonRow, } from '@ionic/vue';
import { defineComponent } from 'vue';
</script>