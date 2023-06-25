<template>
Vista imagenes
    <img v-for="imagen in listado_imagenes" :key="imagen" :src="imagen" class="img-mascota" alt="Imagen Mascota" />
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['listado_imagenes'])

</script>