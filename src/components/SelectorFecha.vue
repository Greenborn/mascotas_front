<template>
    <ion-list>
        <ion-item>
            <ion-select label="Año" placeholder="Año" 
                v-model="modelo.anio" :disabled="disabled" @ionChange="cambio_fecha">
                <ion-select-option v-for="anio in anios" :key="anio" :value="anio.v">{{anio.t}}</ion-select-option>
            </ion-select>
        </ion-item>
        <ion-item>
            <ion-select label="Mes" placeholder="Mes" 
                v-model="modelo.mes" :disabled="disabled"  @ionChange="cambio_fecha">
                <ion-select-option v-for="mes in MESES" :key="mes" :value="mes.v">{{mes.t}}</ion-select-option>
            </ion-select>
        </ion-item>
        <ion-item>
            <ion-select label="Día" placeholder="Día" 
                v-model="modelo.dia" :disabled="disabled" @ionChange="cambio_fecha">
                <ion-select-option v-for="dia in dias_mes" :key="dia" :value="dia.v">{{dia.t}}</ion-select-option>
            </ion-select>
        </ion-item>
    </ion-list>  
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/vue' 

    import { MESES } from '../const'
    import { diasEnUnMes } from '../utils/fechas'

    const props = defineProps(['modelValue', 'disabled'])
    const emit  = defineEmits(['update:modelValue'])

    const modelo = ref({ anio: undefined, mes: undefined, dia: undefined })

    const anios = ref([])
    const dias_mes = ref([])

    function cambio_fecha(){
        if (modelo.value?.anio == '' || modelo.value?.mes == '')
            return false

        const dias = diasEnUnMes(modelo.value.mes, modelo.value.anio)
        for (let i = 0; i <= dias; i++){
            dias_mes.value.push({ v:i, t:i })
        }

        if (modelo.value.dia > dias)
            modelo.value.dia = dias

        
        emit('update:modelValue', new Date( modelo.value.anio, modelo.value.mes, modelo.value.dia ) )
    }

    onMounted(async ()=>{
        if (props.modelValue) {
            const fecha = new Date( props.modelValue )
            modelo.value = { 'anio': fecha.getFullYear(), 'mes': fecha.getMonth(), 'dia':fecha.getDate() }
        }
            
        cambio_fecha()
        const anio = new Date().getFullYear()
        const a = anio - 50
        for (let i = anio; i > a; i--){
            anios.value.push({ v:i, t:i })
        }
    })
</script>