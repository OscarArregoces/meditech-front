<script lang>
export default {
  name: 'Solicitudes',
  methods:{
    solicitud(){
      this.$router.push('/dashboard/solicitud')
    }
  }
}
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Indice</th>
        <th scope="col">Titulo</th>
        <th scope="col">Fecha</th>
        <th scope="col">Estado</th>
        <th scope="col">Opcion</th>
      </tr>
    </thead>
    <tbody>
      <tr @click="solicitud()">
        <th scope="row">1</th>
        <td>Reparacion de computadoras</td>
        <td>10/10/2022</td>
        <td>Activo</td>
        <td><i class="bi bi-arrow-right-circle-fill"></i><i class="bi bi-gear-fill"></i></td>
      </tr>
    </tbody>
  </table>
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
