<template>
    <ion-grid>
        <ion-row class="ion-justify-content-center ion-align-items-center">
            <ion-col size-xs="12" size-sm="12" size-md="10" size-lg="8">

                <ion-row>
                    <ion-col size-xs="12" size-md="6">
                        <ion-card>
                            <ion-card-header>
                                <ion-row class="ion-justify-content-center ion-align-items-center">
                                    <ion-col  size="auto">
                                        <img :src="p.imagen" class="img-mascota" alt="Imagen Mascota" />
                                    </ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col><ion-button expand="full">Agregar / Quitar Foto</ion-button></ion-col>
                                </ion-row>
                            </ion-card-header>

                            <ion-card-content>
                                <ion-grid>
                                    <ion-row>
                                        <ion-col><h2><b>{{ p.nombre }}</b></h2></ion-col>
                                    </ion-row>

                                </ion-grid>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>

                    <ion-col size-xs="12" size-md="6">
                        <ion-card>
                            <ion-card-header>
                                <ion-row>
                                    <ion-col>
                                        <h2>Información General</h2>
                                    </ion-col>
                                </ion-row>
                            </ion-card-header>

                            <ion-card-content>
                                <ion-grid>
                                    
                                    <ion-row>
                                        <ion-col><ion-input label="Nombre" placeholder="Nombre"></ion-input></ion-col>
                                    </ion-row>

                                    <ion-row>
                                        <ion-col><ion-textarea label="Descripción" placeholder="Descripción"></ion-textarea></ion-col>
                                    </ion-row>

                                    <ion-row>
                                        <ion-col><ion-input label="E-Mail" placeholder="E-Mail"></ion-input></ion-col>
                                    </ion-row>

                                    <ion-row>
                                        <ion-col><ion-datetime label="Fecha de Nacimiento" placeholder="Fecha de Nacimiento"></ion-datetime></ion-col>
                                    </ion-row>

                                    <ion-row>
                                        <ion-col><ion-input label="Contraseña" type="password" value="password"></ion-input></ion-col>
                                    </ion-row>

                                    <ion-row>
                                        <ion-col><ion-input label="Repetir Contraseña" type="password" value="password"></ion-input></ion-col>
                                    </ion-row>

                                    <ion-row>
                                        <ion-col><ion-button expand="full" @click="editar">Guardar</ion-button></ion-col>
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
import { IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonButton, IonInput, IonTextarea, IonDatetime, IonButtons } from '@ionic/vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const p = { nombre: 'Maria Elena Fuseneco', imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.eldiario24.com%2Fd24ar%2Ffotos%2Fuploads%2Feditorial%2F2014%2F08%2F04%2Fimagenes%2F5206_maria_elena_fuseneco.jpg&f=1&nofb=1&ipt=c01ead2fd350516af97f50ba5c1512fb1a7b83ad76f86e3349478586cdff2464&ipo=images' }

function editar(){
    alert('Funcionalidad no Implementada')
}
</script>