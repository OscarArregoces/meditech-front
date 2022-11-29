
<script jan>

export default {
    methods:{
        logout(){
            localStorage.removeItem('usuario');
            this.$router.push('/auth/login')
        }
    }
}

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Meditech</a>
            <div class="collapse navbar-collapse" id="navbarColor02">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/dashboard/trabajador/perfilT">Perfil</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/dashboard/trabajador/solicitudesT">Solicitudes</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/dashboard/trabajador/reportes">Reportes</router-link>
                    </li>
                </ul>

                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link @click="logout" class="nav-link" to="/auth/login">Cerrar sesion</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style scoped>

</style>