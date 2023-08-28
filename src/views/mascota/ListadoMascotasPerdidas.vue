<template>
    <ion-grid>
        <ion-row>
            <ion-col>

                <ion-row>
                    <ion-col size-xs="12" size-sm="12" size-md="10" size-lg="6" size-xl="4" v-for="(p, index) in listado" :key="p">

                        <ion-card>
                            <ion-card-header>
                                <ion-row class="ion-justify-content-center ion-align-items-center">
                                    <ion-col>
                                        <div class="w-100 cont-img-mascota" :style="{ 'max-height': def_max_height }">
                                            <img  :src="getUrlImagen(p.imagen)" 
                                                class="img-mascota" alt="Imagen Mascota"  />
                                        </div>
                                    </ion-col>
                                </ion-row>
                                
                            </ion-card-header>

                            <ion-card-content>
                                <ion-grid>
                                    <ion-row>
                                        <ion-col><h2><b>{{ p.nombre }}</b></h2></ion-col>
                                    </ion-row>

                                    <ion-row>
                                        <ion-col>
                                            <p>{{ p.reporte.comentario }}</p>
                                        </ion-col>
                                    </ion-row>

                                    <ion-row>
                                        <ion-col><ion-button expand="full" @click="reportar_avistamiento(index)">Reportar avistamiento</ion-button></ion-col>
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
import { onMounted, ref } from 'vue'
import { perdidas_get_all } from '../../api/mascotas'
import { perfil_mascota_seleccionado } from '../../store/app'

const perfil_obtenido = ref()
const router = useRouter()

const listado = ref()

async function reportar_avistamiento(i){
    perfil_mascota_seleccionado.value = listado.value[i]
    router.replace('/ReportarAparicion')
}

function getUrlImagen( img ){ return process.env.VUE_APP_BACKEND_URL+img }

const def_max_height = ref('0px')
function getMaxHeigth(){
    const cont_img = document.getElementsByClassName('cont-img-mascota')[0]
    if (cont_img) return cont_img.scrollWidth + 'px'
}

onMounted(async ()=>{
    let res = undefined
    res = await perdidas_get_all()
    if (res?.stat){
        listado.value = res.data
        for (let c=0; c < listado.value.length; c++)
            for (let i=0; i < res.registro_perdida.length; i ++)
                if (res.registro_perdida[i].id_mascota == listado.value[c].id)
                    listado.value[c]['reporte'] = res.registro_perdida[i]
            
        console.log()
        setTimeout(() => { //Se espera un momento a que se actualize la vista esto sera bugero si la vista tarda mas de 200 ms en actualizarse
            def_max_height.value = getMaxHeigth()
        }, 200);
        console.log(res)
    } 
})
</script>