<script lang>
import axios from 'axios'

export default {
  name: 'Solicitudes',
  data() {
    return {
      data: [],
      usuario: {}
    }
  },
  methods: {
    solicitud(id) {
      this.$router.push(`/dashboard/trabajador/respuestaT/${id}`)
    },
    aceptarSolicitud(id) {
      this.$router.push(`/dashboard/trabajador/solicitudT/${id}`)
    }
  },
  async beforeMount() {
    this.data = await axios.get('http://127.0.0.1:8000/servicioDetail/')
    this.usuario = JSON.parse(localStorage.getItem('usuario'))
  }
}
</script>


<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-6">
        <h1 class="my-3">Solicitudes</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Titulo</th>
              <th scope="col">Fecha de ingreso</th>
              <th scope="col">Tipo de producto</th>
              <th scope="col">Ir</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="registro in data.data" :key="registro.id">
              <td v-if="registro.empleadoId === null">{{registro.id}}</td>
              <td v-if="registro.empleadoId === null">{{registro.titulo}}</td>
              <td v-if="registro.empleadoId === null">{{registro.fecha_ingreso}}</td>
              <td v-if="registro.empleadoId === null">{{registro.tipo_productoId.nombre_1}}</td>
              <td v-if="registro.empleadoId === null" @click="aceptarSolicitud(registro.id)"><i class="bi bi-arrow-right-circle-fill"></i></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-6">
        <h1 class="my-3">Mis solicitudes</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Titulo</th>
              <th scope="col">Fecha de ingreso</th>
              <th scope="col">Tipo de producto</th>
              <th scope="col">Ir</th>
            </tr>
          </thead>
          <tbody>
            <tr  v-for="registro in data.data" :key="registro.id">
              <td v-if="registro.empleadoId == usuario.id">{{registro.id}}</td>
              <td v-if="registro.empleadoId == usuario.id">{{registro.titulo}}</td>
              <td v-if="registro.empleadoId == usuario.id">{{registro.fecha_ingreso}}</td>
              <td v-if="registro.empleadoId == usuario.id">{{registro.tipo_productoId.nombre_1}}</td>
              <td v-if="registro.empleadoId == usuario.id" @click="solicitud(registro.id)"><i class="bi bi-arrow-right-circle-fill"></i></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>

<style scoped>
table {
  cursor: pointer;
}

th,
td {
  text-align: center;
}
</style>
