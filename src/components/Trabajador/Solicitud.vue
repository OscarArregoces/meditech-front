<script jan>
import axios from 'axios';



export default {
  data() {
    return {
      servicio: []
    }
  },
  async beforeMount() {
    const response = await axios.get('http://127.0.0.1:8000/servicioDetail/')

    this.servicio = response.data.filter(servicio => servicio.id == this.$route.params.id)
    console.log(this.servicio)

  },
  methods: {
    async aceptar() {

      const empleado = JSON.parse(localStorage.getItem('usuario'))
      console.log(empleado)
      const response = await axios.put(`http://127.0.0.1:8000/updateServicio/${this.$route.params.id}/`, {
        titulo: this.servicio[0].titulo,
        descripcion: this.servicio[0].descripcion,
        fecha_ingreso: this.servicio[0].fecha_ingreso,
        usuarioId: this.servicio[0].usuarioId.id,
        tipo_productoId: this.servicio[0].tipo_productoId.id,
        empleadoId: empleado.id

      })
      this.$router.push('/dashboard/trabajador/solicitudesT')
      console.log(response)
    },
    rechazar() { }
    ,
  }
}
</script>

<template>
  <div class="container my-5">
    <div class="row ">
      <div class="col-12" v-if="servicio[0]">
        <div class="my-4">
          <label class="form-label">Titulo:</label>
          <input type="text" class="form-control" :value="servicio[0].titulo" disabled>
        </div>
        <div class="my-4">
          <label class="form-label">Descripcion:</label>
          <textarea type="text" class="form-control" :value="servicio[0].descripcion" rows="5" cols="25"
            disabled></textarea>
        </div>
        <div class="my-4">
          <label class="form-label">Fecha de ingreso:</label>
          <input type="text" class="form-control" :value="servicio[0].fecha_ingreso" disabled>
        </div>
        <div class="my-4">
          <label class="form-label">Tipo de producto:</label>
          <input type="email" class="form-control" :value="servicio[0].tipo_productoId.nombre_1" disabled>
        </div>
        <div class="my-4">
          <label class="form-label">Cliente</label>
          <input type="text" class="form-control" :value="servicio[0].usuarioId.usuario" disabled>
        </div>
      </div>
    </div>
    <div class="botones my-4">
      <button @click="aceptar()" class="btn btn-success">Aceptar</button>
      <button @click="rechazar()" class="btn btn-danger">Rachazar</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid rgba(128, 128, 128, 0.445);
  border-radius: 15px;
}


.btn {
  width: 30%;
  margin-left: 20px;
  margin-right: 20px;
}

.botones {
  text-align: center;
  margin: auto;
}
</style>
