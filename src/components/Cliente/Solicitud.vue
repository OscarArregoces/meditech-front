<script lang>
import CrearRespuesta from '../public/CrearRespuesta.vue';

export default {
  components:{
    CrearRespuesta
  }
}

</script>

<template>
  <div class="container my-5">
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
            aria-expanded="true" aria-controls="collapseOne">
            Titulo solicitud
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <ul>
              <li><strong>Descripcion :</strong> </li>
              <li><strong>Tipo de producto :</strong> </li>
              <li><strong>Cantidad de productos :</strong> </li>
              <li><strong>Fecha:</strong> </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Respuesta : #1
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <ul>
              <li><strong>Descripcion :</strong> </li>
              <li><strong>Fecha :</strong> </li>
              <li><strong>Estado :</strong> </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Respuesta : #2
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <ul>
              <li><strong>Descripcion :</strong> </li>
              <li><strong>Fecha :</strong> </li>
              <li><strong>Estado :</strong> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="crearSolicitud my-5">
      <CrearRespuesta />
    </div>
  </div>

</template>

<style scoped>
.container {
  border: 1px solid rgba(167, 164, 164, 0.445);
  border-radius: 15px;
  padding: 30px;
}

.crearSolicitud{
  background-color: rgb(182, 217, 219);
  border: 1px solid rgba(167, 164, 164, 0.445);
  border-radius: 15px;
  padding: 30px;
}
</style>
