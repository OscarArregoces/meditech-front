<script lang>

export default {

}
</script>

<template>
    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Descripcion:</label>
            <input type="textarea" placeholder="Escribe aqui..." class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Tipo de producto:</label>
            <select class="form-select" aria-label="Default select example">
                <option selected>Selecciona un producto</option>
                <option value="1">Computadores</option>
                <option value="2">Monitores</option>
                <option value="3">Televisores</option>
                <option value="4">Video Beans</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Cantidad de productos</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Escribe aqui...">
        </div>
        <button type="submit" class="btn btn-success">Responder</button>
    </form>
</template>

<style scoped>

</style>