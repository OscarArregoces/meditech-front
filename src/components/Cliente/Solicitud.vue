<script lang>
import CrearRespuesta from '../public/FormRespuesta.vue';
import Sidebar from '../public/Sidebar.vue';
import axios from 'axios';

export default {

  data() {
    return {
      servicio: [],
      respuestas: []
    }
  },
  components: {
    CrearRespuesta,
    Sidebar
  },
  async beforeMount() {
    const response = await axios.get('http://127.0.0.1:8000/servicioDetail/')

    this.servicio = response.data.filter(servicio => servicio.id == this.$route.params.id)
    console.log(this.servicio)

    const responseRespuesta = await axios.get('http://127.0.0.1:8000/respuesta/')

    this.respuestas = responseRespuesta.data.filter(respuesta => respuesta.servicioId == this.$route.params.id)

  },
}

</script>

<template>
  <div class="container my-5">
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
            aria-expanded="true" aria-controls="collapseOne">
            Servicio
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
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
                <input type="text" class="form-control" :value="servicio[0].usuarioId.personaId.nombre" disabled>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- RESPUESTA -->
      <div class="accordion-item" v-for="respuesta,index in respuestas" :key="respuesta.id">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Respuesta : #{{index + 1}}
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <div class="col-12" v-if="respuestas[index]">
              <div class="my-4">
                <label class="form-label">Observacion:</label>
                <input type="text" class="form-control" :value="respuestas[index].observacion" disabled>
              </div>
              <div class="my-4">
                <label class="form-label">Fecha de emision:</label>
                <input type="text" class="form-control" :value="respuestas[index].fecha_salida" disabled />
              </div>
              <div class="my-4">
                <label class="form-label">Estado del servicio:</label>
                <input type="email" class="form-control" :value="respuestas[index].tipo_estado.nombre_1" disabled>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- FIN RESPUESTA -->
    </div>
  </div>

</template>

<style scoped>
.container {
  border: 1px solid rgba(167, 164, 164, 0.445);
  border-radius: 15px;
  padding: 30px;
}

.crearSolicitud {
  background-color: rgb(182, 217, 219);
  border: 1px solid rgba(167, 164, 164, 0.445);
  border-radius: 15px;
  padding: 30px;
}
</style>
