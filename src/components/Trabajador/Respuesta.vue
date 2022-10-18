<script jan>
import FormRespuesta from '../public/FormRespuesta.vue';
import Solicitud from '../cliente/Solicitud.vue';



export default {
    components:{
        FormRespuesta,
        Solicitud
    }
}
</script>

<template>
    <div class="container my-5">
        <Solicitud />
        <FormRespuesta />


    </div>
</template>

<style scoped>
</style>
