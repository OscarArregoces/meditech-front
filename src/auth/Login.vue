

<script lang="js">
export default {
  data() {
    return {
      usuario: '',
      contraseña: ''
    }
  },
  methods: {
    login() {
      console.log('Login OK')
      this.$router.push('/dashboard/cliente')
    }
  }
}


</script>

<template>
  <p>{{ usuario}} & {{contraseña}}</p>
  <div class="form-login">
    <h1>Login</h1>
    <form @submit.prevent="login()">
      <div class="my-4">
        <input type="email" placeholder="Usuario" v-model="usuario" class="form-control" id="exampleInputEmail1"
          aria-describedby="emailHelp">
      </div>
      <div class="my-4">
        <input type="password" placeholder="Contraseña" v-model="contraseña" class="form-control"
          id="exampleInputPassword1">
      </div>
      <button type="submit" class="btn btn-primary">Ingresar</button>
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
</style>
