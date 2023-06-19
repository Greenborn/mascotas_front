<template>
    <ion-page id="main-content" class="def-fondo">
        <ion-loading message="Cerrando Sesión"> </ion-loading>
    </ion-page>
</template>

<script setup>
import { onMounted } from 'vue'
import { IonPage, IonLoading } from '@ionic/vue';
import { logout } from '../../api/usuario'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(async ()=>{
    let res = undefined
    res = await logout()
    if (res?.stat){
        router.replace('login')
    } 
})
</script>