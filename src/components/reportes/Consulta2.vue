<script lang>
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import axios from 'axios';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
export default {
    data() {
        return {
            data: []
        }
    },
    methods: {
        async generarPdf() {
            const { data } = await axios.get('http://127.0.0.1:8000/pdf2/', {
                responseType: 'blob'
            })

            const url = URL.createObjectURL(new Blob([data]));
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', 'reporte.pdf')
            document.body.appendChild(link)
            link.click();
            document.body.removeChild(link);

        }
    },
    async beforeMount() {
        const { data } = await axios.get('http://127.0.0.1:8000/consulta2/');
        this.data = data;
        console.log(data)

    },
}

</script>


<template>
    <div class="container">
       <div class="row">
        <div class="col-6">
             <h2 class="my-5">Clasififación de clientes</h2>  
        </div>
        <div class="col-6">
             <button @click="generarPdf()" class="btn btn-success my-5">Imprimir</button>
        </div>
       </div>
       <br>
        <h4>Cantidad de clientes totales : {{ data.clientes_totales }}</h4>
        <hr />
        <br>
        <div v-for="servicio in data.data">
            <p>
            <h3> {{ servicio.titulo }}</h3> Cantidad :{{ servicio.cantidad }}</p>
            <hr />
            <table class="table my-5">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellidos</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="registro in servicio.data">
                        <th>{{ registro.id }}</th>
                        <th>{{ registro.nombre }}</th>
                        <th>{{ registro.apellido }}</th>
                        <th>{{ registro.email }}</th>
                        <th>{{ registro.telefono }}</th>
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

.col-6 button{
   width: 80%;   
}

table{
    text-align: center;
}
</style>