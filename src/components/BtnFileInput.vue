<template>
    <div class="row">
        <div class="col p-0">
            <label for="file_input1" class="p-button p-component" 
                    :class="{ 'p-disabled': disabled }">
                <ion-icon slot="icon-only" :icon="addCircleOutline"></ion-icon>&nbsp; Agregar Foto
            </label>
        </div>
        <input type="file" name="file_input1" id="file_input1" @change="change_evnt" 
                style="display: none;" :disabled="disabled" />
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { IonIcon } from '@ionic/vue' 
    import { addCircleOutline } from 'ionicons/icons'

    const emit  = defineEmits(['click'])
    const props = defineProps([ 'class', 'label', 'control_params', 'icon', 'for', 'iconPos', 'disabled' ])

    function change_evnt( evnt ){
        if (props.disabled) return false
        props.control_params?._change( evnt )
    }
</script>