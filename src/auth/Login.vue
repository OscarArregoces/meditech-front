

<script lang="js">

import axios from 'axios'

export default {
  data() {
    return {
      usuario: '',
      contraseña: ''
    }
  },
  methods: {
    async login() {

      try {

        const response = await axios.post('http://127.0.0.1:8000/checkusuario/',
          {
            usuario: this.usuario,
            contraseña: this.contraseña
          })

        if(response.data.ok){
          localStorage.setItem('usuario', JSON.stringify(response.data.data))
          console.log(response.data)
          if(response.data.data.tipo_rolesId == 24){
            this.$router.push('/dashboard/cliente/solicitudes')
          }else if( response.data.data.tipo_rolesId == 25 ){
            this.$router.push('/dashboard/trabajador/solicitudesT')
          }
          
        }else{
          this.$router.push('/auth/login')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}


</script>

<template>
  <div class="form-login">
    <h1>Login</h1>
    <form @submit.prevent="login()">
      <div class="my-4">
        <input type="text" placeholder="Usuario" v-model="usuario" class="form-control" id="exampleInputEmail1"
          aria-describedby="emailHelp">
      </div>
      <div class="my-4">
        <input type="password" placeholder="Contraseña" v-model="contraseña" class="form-control"
          id="exampleInputPassword1">
      </div>
      <button type="submit" class="btn btn-primary">Ingresar</button>
      <div class="my-2">
        <RouterLink tag="a" to="/auth/register">Registrate aqui</RouterLink>
      </div>
    </form>
  </div>
</template>

<style scoped>
.form-login {
  background-color: white;
  padding: 30px;
  text-align: center;
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.form-login button {
  width: 80%;
}

a {
  color: rgb(31, 29, 29);
  text-decoration: none;
}

a:hover {
  color: rgb(33, 93, 224);
}
</style>
