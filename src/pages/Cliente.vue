<script lang>
import  Solicitudes  from '../components/Cliente/Solicitudes.vue'

export default {
  components: {
    Solicitudes
  },
  methods:{
    crear(){
      this.$router.push('/dashboard/crearsolicitud')
    }
  }
}
</script>

<template>
  <div class="container my-5">
    <button @click="crear()" class="btn btn-success my-5">Crear servicio</button>
    <div class="row ">
      <div class="col-12">
        <Solicitudes />
      </div>
    </div>
  </div>
</template>

<style scoped>

button{
  width: 200px;
}
.container{
  border: 1px solid rgba(167, 164, 164, 0.445);
  border-radius: 15px;
  padding: 30px;
}
</style>
