<template>
    <ion-grid>
        <ion-row>
            <ion-col size-xs="12" size-sm="12" size-md="10" size-lg="8">

                <ion-row>
                    <ion-col size-xs="12" size-sm="12" size-md="10" size-lg="6" size-xl="4" v-for="p in listado" :key="p">

                        <ion-card>
                            <ion-card-header>
                                <ion-img :src="p.imagen" alt="Imagen Mascota"></ion-img>
                            </ion-card-header>

                            <ion-card-content>
                                <ion-grid>
                                    <ion-row>
                                        <ion-col><h2><b>{{ p.nombre }}</b></h2></ion-col>
                                    </ion-row>


                                    <ion-row>
                                        <ion-col><ion-button expand="full">Perfil</ion-button></ion-col>
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
import { IonCol, IonGrid, IonRow } from '@ionic/vue';

const listado = [
    { nombre: 'Pepa', imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.n2KtIeDnS3hs7SI1gzfsfgHaJ4%26pid%3DApi&f=1&ipt=f3906d13af26932f11ef11c78f349a0d5c0ad45b227b6bad3e7b80568f8f635d&ipo=images' },
    { nombre: 'Pequeño Trump', imagen: 'https://i0.hippopx.com/photos/155/472/56/rottweiler-dog-dog-lying-preview.jpg' },
]
</script>