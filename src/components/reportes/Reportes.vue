<script lang>
</script>


<template>
    <div class="container my-4 consulta">
        <button type="button" class="btn btn-primary"><router-link class="nav-link " to="/dashboard/trabajador/reportes/consulta1">Clasificación de servicios</router-link></button>
        <button type="button" class="btn btn-primary"><router-link class="nav-link " to="/dashboard/trabajador/reportes/consulta2">Clasificación de clientes</router-link></button>
        <button type="button" class="btn btn-primary"><router-link class="nav-link " to="/dashboard/trabajador/reportes/consulta3">Servicios en una fecha</router-link></button>
        <button type="button" class="btn btn-primary"><router-link class="nav-link " to="/dashboard/trabajador/reportes/consulta4">Servicios entre fechas</router-link></button>
        <button type="button" class="btn btn-primary">Reporte general</button>
        
    </div>

    <RouterView></RouterView>

</template>

<style scoped>
.consulta {
    display: flex;
    justify-content: space-between;

}
</style>