<script lang>

import Sidebar from '../public/Sidebar.vue'
import axios from 'axios';

export default {
    data() {
        return {
            titulo: '',
            descripcion: '',
            tipo_productoId: '',
            usuarioId: '',
        }
    },
    components: {
        Sidebar
    },
    methods: {
        async crearSolicitud() {
            try {

                let date = new Date();
                let output = String(date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + date.getDate()).padStart(2, '0');

                const dataUsuario = JSON.parse(localStorage.getItem('usuario'))
                console.log(dataUsuario)

                const response = await axios.post('http://127.0.0.1:8000/servicio/',
                    {
                        titulo: this.titulo,
                        descripcion: this.descripcion,
                        fecha_ingreso: output,
                        tipo_productoId: this.tipo_productoId,
                        usuarioId: dataUsuario.id
                    })

                console.log(response)

            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<template>
    <div class="container my-5">
        <div class="row ">
            <div class="col-12">
                <form @submit.prevent="crearSolicitud()">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Titulo</label>
                        <input class="form-control" placeholder="Escribe aqui..." v-model="titulo" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Descripcion</label>
                        <textarea class="form-control" name="textarea" rows="10" cols="25" placeholder="Escribe aqui..."
                            v-model="descripcion" required></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Tipo de producto</label>
                        <select class="form-select" aria-label="Default select example" v-model="tipo_productoId" required>
                            <option selected disabled value="">Selecciona una opcion</option>
                            <option value="13">Computadores</option>
                            <option value="14">Monitores</option>
                            <option value="15">Televisores</option>
                            <option value="16">Vieo Beam</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-success">Enviar solicitud</button>
                </form>
            </div>
        </div>
    </div>

</template>

<style scoped>
.container {
    border: 1px solid rgba(167, 164, 164, 0.445);
    border-radius: 15px;
    padding: 30px;
}
</style>
