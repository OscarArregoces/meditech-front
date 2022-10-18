<script lang>
import Sidebar from '../components/public/Sidebar.vue'

export default {
  components: {
    Sidebar
  },
  methods: {
  }
}
</script>

<template>
  <Sidebar />
  <RouterView></RouterView>
</template>

<style scoped>
button {
  width: 200px;
}

.container {
  border: 1px solid rgba(167, 164, 164, 0.445);
  border-radius: 15px;
  padding: 30px;
}
</style>
