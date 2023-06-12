<template>
    <ion-grid>
        <ion-row class="ion-justify-content-center ion-align-items-center">
            <ion-col size-xs="12" size-sm="12" size-md="10" size-lg="8">

                <ion-row>
                    <ion-col size-xs="12" size-sm="12" size-md="10" size-lg="6" size-xl="4" v-for="p in listado" :key="p">

                        <ion-card>
                            <ion-card-header>
                                <ion-row class="ion-justify-content-center ion-align-items-center">
                                    <ion-col  size="auto">
                                        <img :src="p.imagen" class="img-mascota" alt="Imagen Mascota" />
                                    </ion-col>
                                </ion-row>
                                
                            </ion-card-header>

                            <ion-card-content>
                                <ion-grid>
                                    <ion-row>
                                        <ion-col><h2><b>{{ p.nombre }}</b></h2></ion-col>
                                    </ion-row>

                                    <ion-row>
                                        <ion-col><ion-button expand="full" @click="ir_a_perfil">Perfil</ion-button></ion-col>
                                    </ion-row>
                                </ion-grid>
                            </ion-card-content>
                        </ion-card>

                    </ion-col>
                </ion-row>
                

            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script setup>
import { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const listado = [
    { nombre: 'Pepa', imagen: 'assets/test/g3.jpeg' },
    { nombre: 'Max', imagen: 'assets/test/p3.jpeg' },
    { nombre: 'Capitan Beto', imagen: 'assets/test/p2.jpeg' },
]

function ir_a_perfil(){
    router.replace('/perfilMascota')
}
</script>