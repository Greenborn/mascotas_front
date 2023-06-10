<template>
    <ion-menu content-id="main-content">
        <ion-header>
        <ion-toolbar>
            <ion-title>Animalia</ion-title>
        </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            
            
            <ion-list id="inbox-list">
                <ion-menu-toggle auto-hide="false" v-for="(p, i) in appPages" :key="i">
                    <ion-item @click="selectedIndex = i" router-direction="root" :router-link="p.url" lines="none" detail="false" class="hydrated" :class="{ selected: selectedIndex === i }">
                        <ion-icon slot="start" :icon="p.icon"></ion-icon>
                        <ion-label>{{ p.title }}</ion-label>
                    </ion-item>
                </ion-menu-toggle>
            </ion-list>

        </ion-content>
    </ion-menu>
</template>

<script setup>
import { ref } from  'vue';
import { IonIcon, IonMenuToggle, IonItem, IonLabel, IonList } from '@ionic/vue';
import { IonButtons, IonContent, IonHeader, IonMenu, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { personOutline, bugOutline, informationOutline, alertCircle, flag, mailOutline, documentOutline, logOutOutline, helpCircleOutline } from 'ionicons/icons';
const selectedIndex = ref()

const appPages = [
  { title: 'Cuenta',  url: '/Cuenta', icon: personOutline },
  { title: 'Mis Mascotas',  url: '/MisMascotas', icon: bugOutline },
  { title: 'Recomendaciones',  url: '/Recomendaciones', icon: informationOutline  },
  { title: 'Perdí Mi Mascota',  url: '/PerdiMiMascota', icon: alertCircle  },
  { title: 'Reportar Aparición',  url: '/ReportarAparicion', icon: flag  },
  { title: 'Pedidos y Notificaciones',  url: '/PedidosyNotificaciones', icon: mailOutline  },
  { title: 'Ayuda y preguntas Frecuentes',  url: '/faq', icon: helpCircleOutline  },
  { title: 'Terminos y Condiciones',  url: '/TerminosYCondiciones', icon: documentOutline  },
  { title: 'Salir',  url: '/Salir', icon: logOutOutline  },
]

</script>