<script lang>
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import axios from 'axios';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
export default {
    data() {
        return {
            data: [],
            fecha1: '',
            fecha2: '',
            bandera: false
        }
    },
    methods: {
        async generarPdf() {
            const { data } = await axios.get('http://127.0.0.1:8000/pdf4/', {responseType: 'blob', params: {'fecha1': this.fecha1,'fecha2': this.fecha2  }});

            const url = URL.createObjectURL(new Blob([data]));
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', 'reporte.pdf')
            document.body.appendChild(link)
            link.click();
            document.body.removeChild(link);

        },
        async onSubmit() {
            const { data } = await axios.post('http://127.0.0.1:8000/consulta4/', {
                "fecha1": this.fecha1,
                "fecha2": this.fecha2,
            });
            this.data = data;
            this.bandera = true;
            console.log(data)

        },
    }

}

</script>


<template>
    <div class="container">
        <form @submit.prevent="onSubmit()">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Fecha #1</label>
                <input type="date" class="form-control" placeholder="Escribe aqui..." v-model="fecha1" required />
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Fecha #2</label>
                <input type="date" class="form-control" placeholder="Escribe aqui..." v-model="fecha2" required />
            </div>
            <button type="submit" class="btn btn-success">Buscar</button>
        </form>
    </div>
    <div v-if="bandera" class="container">
        <div class="row">
            <div class="col-6">
                <h2 class="my-5">Servicios en una fecha</h2>
            </div>
            <div class="col-6">
                <button @click="generarPdf()" class="btn btn-success my-5">Imprimir</button>
            </div>
        </div>
        <br>
        <h5>Cantidad de servicios entre {{ this.fecha1 }} y {{ this.fecha2 }} : {{ data.cantidad }}</h5>
        <hr />
        <br>
        <div v-for="servicio in data.data">
            <table class="table my-5">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Fecha ingreso</th>
                        <th scope="col">Cliente</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{{ servicio.id }}</th>
                        <th>{{ servicio.titulo }}</th>
                        <th>{{ servicio.fecha_ingreso }}</th>
                        <th>{{ servicio.usuarioId.personaId.nombre }}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
.container h2 {
    text-align: center;
}

.box {
    display: flex;
    flex-wrap: wrap;
}

.col-6 button {
    width: 80%;
}

table {
    text-align: center;
}
</style>