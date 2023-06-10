<template>
  <MenuPrincipal />

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
          <router-view></router-view>
        </ion-content>
    </ion-page>
  
</template>

<script setup>
import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenuButton } from '@ionic/vue';
import MenuPrincipal from './views/dashboard/MenuPrincipal.vue'

</script>
