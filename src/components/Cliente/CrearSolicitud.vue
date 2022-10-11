<script lang>
export default {
    name: 'CrearSolicitud'
}
</script>

<template>


    <div class="container my-5">
        <div class="row ">
            <div class="col-12">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Descripcion</label>
                        <input type="textarea" placeholder="Escribe aqui..." class="form-control"
                            id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Fecha</label>
                        <input type="date" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Tipo de producto</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Selecciona una opcion</option>
                            <option value="1">Computadores</option>
                            <option value="2">Monitores</option>
                            <option value="3">Televisores</option>
                            <option value="4">Vieo Beans</option>
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
