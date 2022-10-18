<script lang>
import Sidebar from '../public/Sidebar.vue'
import axios from 'axios'

export default {
  name: 'Solicitudes',
  data() {
    return {
      data: []
    }
  },
  components: {
    Sidebar
  },
  methods: {
    solicitud(id) {
      this.$router.push(`/dashboard/cliente/solicitud/${id}`)
    },
    crear() {
      this.$router.push('/dashboard/cliente/crearsolicitud')
    }
  },
  async beforeMount() {
    this.data = await axios.get('http://127.0.0.1:8000/servicioDetail/')
  }
}
</script>

<template>
  <div class="container my-5">
    <!-- <button @click="crear()" class="btn btn-success my-5">Crear servicio</button> -->
    <div class="row ">
      <div class="col-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Titulo</th>
              <!-- <th scope="col">Descripcion</th> -->
              <th scope="col">Fecha de envio</th>
              <th scope="col">Tipo de producto</th>
              <th scope="col">Ir</th>
            </tr>
          </thead>
          <tbody>
            <tr @click="solicitud(registro.id)" v-for="registro in data.data" :key="registro.id">
              <td>{{registro.id}}</td>
              <td>{{registro.titulo}}</td>
              <!-- <td>{{registro.descripcion}}</td> -->
              <td>{{registro.fecha_ingreso}}</td>
              <td>{{registro.tipo_productoId.nombre_1}}</td>
              <td><i class="bi bi-arrow-right-circle-fill"></i></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>

<style scoped>
table {
  text-align: center;
}

i {
  margin-left: 5px;
  margin-right: 5px;
}

i:hover {
  cursor: pointer;
}
</style>
