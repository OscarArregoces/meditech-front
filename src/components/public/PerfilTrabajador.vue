<script jan>

import SidebarTrabajador from '../public/Sidebar.vue';

export default {
    data() {
        return {
            usuario: {}
        }
    },
    components: {
        SidebarTrabajador
    },
    beforeMount() {
        this.usuario = JSON.parse(localStorage.getItem('usuario'))
    }
}


</script>

<template>
    <Sidebar />
    <div class="container my-5">
        <div class="row ">
            <div class="col-12">
                <!-- <h1 class="my-5">Perfil</h1> -->
                <div class="row">
                    <div class="col-4 p-4">
                        <img src="../../../public/perfil.jpg" class="img-fluid rounded-start">
                    </div>
                    <div class="col-8">
                        <div class="row">
                            <div class="col-6">
                                <div class="my-4">
                                    <label class="form-label">Nombres:</label>
                                    <input type="text" class="form-control" :value="usuario.persona.nombre" disabled>
                                </div>
                                <div class="my-4">
                                    <label class="form-label">Apellidos:</label>
                                    <input type="text" class="form-control" :value="usuario.persona.apellido" disabled>
                                </div>
                                <div class="my-4">
                                    <label class="form-label">Empresa:</label>
                                    <input type="text" class="form-control" :value="usuario.empresa" disabled>
                                </div>
                                <div class="my-4">
                                    <label class="form-label">Email:</label>
                                    <input type="email" class="form-control" :value="usuario.persona.email" disabled>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="my-4">
                                    <label class="form-label">Telefono</label>
                                    <input type="text" class="form-control" :value="usuario.persona.telefono" disabled>
                                </div>
                                <div class="my-4">
                                    <label class="form-label">Tipo de identificaci??n</label>
                                    <input type="text" class="form-control"
                                        :value="usuario.persona.tipo_identificacion_id" disabled>
                                </div>
                                <div class="my-4">
                                    <label class="form-label">No. de identificaci??n</label>
                                    <input type="text" class="form-control" :value="usuario.persona.numero_documento"
                                        disabled>
                                </div>
                                <div class="my-4">
                                    <label class="form-label">Sexo:</label>
                                    <input type="text" class="form-control" :value="usuario.persona.tipo_sexo" disabled>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>