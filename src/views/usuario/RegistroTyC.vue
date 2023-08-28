<template>
    
    <TerminosCondiciones @acepta_terminos="acepta_terminos"></TerminosCondiciones>
       
</template>

<script setup>
import { ref } from 'vue'
import { IonCol, IonPage, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader  } from '@ionic/vue';
import { IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router'
import { mostrar_cargando, ocultar_cargando, user_data } from '../../store/app'
import { registro } from '../../api/usuario'

import TerminosCondiciones from '../dashboard/TerminosCondiciones'
const router = useRouter()

const result_registro = ref()

async function acepta_terminos(){
    mostrar_cargando('Registrando nuevo usuario...')
    result_registro.value = await registro( user_data.value )
    if (result_registro.value.stat){
        ocultar_cargando()
        router.replace('registro_2')
    } else {
        alert(result_registro.value.text)
        ocultar_cargando()
    }
    
}
</script>