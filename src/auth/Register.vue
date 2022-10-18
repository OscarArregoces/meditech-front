<script lang="js">

import axios from 'axios';

export default {
  data() {
    return {
      nombre: '',
      apellido: '',
      nacionalidad: '',
      fecha_nacimiento: '',
      email: '',
      telefono: '',
      tipo_identificacion: '',
      numero_documento: '',
      tipo_sexo: '',
      usuario: '',
      contraseña: '',
      empresa: '',
      tipo_rolesId:'',
      tipo_estadoId: '1',
 
    }
  },
  methods: {
    async registrar() {

      //PERSONA
      const responsePersona = await axios.post('http://127.0.0.1:8000/persona/',
        {
          nombre: this.nombre,
          apellido: this.apellido,
          nacionalidad: this.nacionalidad,
          fecha_nacimiento: this.fecha_nacimiento,
          email: this.email,
          telefono: this.telefono,
          tipo_identificacion: this.tipo_identificacion,
          numero_documento: this.numero_documento,
          tipo_sexo: this.tipo_sexo
        }
      )
      console.log(responsePersona)
      this.personaId = responsePersona.data.id


      //USUARIO
      const responseUsuario = await axios.post('http://127.0.0.1:8000/usuario/',
        {
          usuario: this.usuario,
          contraseña: this.contraseña,
          empresa: this.empresa,
          personaId: responsePersona.data.id,
          tipo_estadoId: this.tipo_estadoId,
          tipo_rolesId: this.tipo_rolesId
        }
      )
      console.log(responseUsuario)
      this.$router.push('/auth/login')
    }
  }
}

</script>

<template>

  <div class="container my-5">
    <h1 class="my-5 ">Register</h1>
    <form @submit.prevent="registrar()">
      <div class="row">
        <div class="col-6">
          <div class="my-4">
            <input type="text" placeholder="Nombre" v-model="nombre" class="form-control" required>
          </div>
          <div class="my-4">
            <input type="text" placeholder="Apellido" v-model="apellido" class="form-control" required>
          </div>
          <div class="my-4">
            <input type="text" placeholder="Nacionalidad" v-model="nacionalidad" class="form-control" required>
          </div>
          <div class="my-4">
            <label for="exampleInputEmail1" class="form-label">Fecha de nacimiento</label>
            <input type="date" v-model="fecha_nacimiento" class="form-control" required>
          </div>
          <div class="my-4">
            <label for="exampleInputEmail1" class="form-label">Telefono</label>
            <input type="text" v-model="telefono" class="form-control" placeholder="555-555-5555" required>
          </div>
          <div class="my-4">
            <input type="email" placeholder="example@gmail.com" v-model="email" class="form-control" required>
          </div>
        </div>
        <div class="col-6">
          <div class="my-4">
            <select class="form-select" v-model="tipo_sexo" aria-label="Default select example" required>
              <option selected disabled value="" >Tipo de sexo</option>
              <option value="10">Femenino</option>
              <option value="11">Masculino</option>
            </select>
          </div>
          <div class="my-4">
            <select class="form-select" v-model="tipo_identificacion" aria-label="Default select example" required>
              <option selected disabled value="">Tipo de documento</option>
              <option value="5">Cedula de ciudadania</option>
              <option value="6">Tarjeta de identidad</option>
              <option value="7">NIT</option>
              <option value="8">Pasaporte civil</option>
            </select>
          </div>
          <div class="my-4">
            <input type="text" placeholder="No. documento" v-model="numero_documento" class="form-control" required>
          </div>
          <div class="my-4">
            <input type="text" placeholder="Usuario" v-model="usuario" class="form-control" required>
          </div>
          <div class="my-4">
            <input type="text" placeholder="Contraseña" v-model="contraseña" class="form-control" required>
          </div>
          <div class="my-4">
            <input type="text" placeholder="Empresa" v-model="empresa" class="form-control" required>
          </div>
          <div class="my-4">
            <select class="form-select" v-model="tipo_rolesId" aria-label="Default select example" required>
              <option selected disabled value="">Rol del usuario</option>
              <option value="24">Cliente</option>
              <option value="25">Trabajador</option>
            </select>
          </div>
        </div>
        <div class="my-2 botones">
          <button type="submit" class="btn btn-primary">Registrarme</button>
        </div>
        <div class="my-2 botones">
          <RouterLink tag="button" to="/auth/login" class="btn btn-outline-primary">Iniciar sesion</RouterLink>
        </div>
      </div>
    </form>
  </div>

</template>

<style scoped>
label {
  display: flex;
}

.row {
  border: 1px solid rgb(134, 131, 131);
  border-radius: 15px;
  padding: 10px;
}

.btn {
  width: 80%;
  margin-left: 20px;
  margin-right: 20px;
}

.botones {
  text-align: center;
  margin: auto;
}
</style>
