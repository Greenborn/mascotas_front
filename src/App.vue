<template>
  <MenuPrincipal />

  <ion-page id="main-content">
        <ion-header>
          <ion-toolbar v-if="!ruta_actual?.cfg?.fullscreen">
              <ion-buttons slot="start">
              <ion-menu-button></ion-menu-button>
              </ion-buttons>
              <ion-title>{{ ruta_actual?.cfg?.titulo }}</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding def-fondo">
          <router-view></router-view>
        </ion-content>
        <ion-alert
          :is-open="APP_alert_modal" :header="APP_text_alert"
          :buttons="APP_alertButtons"></ion-alert>
        <ion-loading v-if="present_loading" :message="loading_msg"> </ion-loading>
    </ion-page>
  
</template>

<script setup>
import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenuButton } from '@ionic/vue';
import MenuPrincipal from './views/dashboard/MenuPrincipal.vue'
import { ruta_actual, APP_alert_modal, APP_text_alert, APP_alertButtons, loading_msg, present_loading } from './store/app'
import { IonAlert, IonLoading } from '@ionic/vue' 
</script>
