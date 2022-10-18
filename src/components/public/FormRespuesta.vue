<script lang>
import axios from 'axios'



export default {
    data() {
        return {
            observacion: '',
            fecha_salida: '',
            tipo_estado_solicitud: ''
        }
    },
    methods: {
        async setObservacion() {
            try {
                let date = new Date();
                let output = String(date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + date.getDate()).padStart(2, '0');
                const response = await axios.post('http://127.0.0.1:8000/respuesta/',
                    {
                        observacion: this.observacion,
                        fecha_salida: output,
                        servicioId: this.$route.params.id,
                        tipo_estado: this.tipo_estado_solicitud
                    })
                console.log(response)
                this.$router.push('/dashboard/trabajador/solicitudesT')
            } catch (error) {
                console.log(error)
            }
        }
    }

}
</script>

<template>
    <div class="container p-4">
        <form @submit.prevent="setObservacion()">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Observacion:</label>
                <input type="textarea" placeholder="Escribe aqui..." v-model="observacion" class="form-control" id="exampleInputEmail1"
                    aria-describedby="emailHelp">
            </div>
            <div class="my-4">
                <select class="form-select" v-model="tipo_estado_solicitud" aria-label="Default select example"
                    required>
                    <option selected disabled value="">Estado de solicitud</option>
                    <option value="18">Pendiente</option>
                    <option value="19">Aceptado</option>
                    <option value="20">Rechazado</option>
                    <option value="21">Iniciado</option>
                    <option value="22">Finalizado</option>
                </select>
            </div>
            <button type="submit" class="btn btn-success my-4">Responder</button>
        </form>
    </div>
</template>

<style scoped>
.container {
    border: 1px solid rgba(128, 128, 128, 0.445);
    border-radius: 15px;
}
</style>