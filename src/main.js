import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/main.routes'

import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';

import PrimeVue from'primevue/config';

import 'primevue/resources/themes/saga-blue/theme.css'       
import 'primevue/resources/primevue.min.css'              
import 'primeicons/primeicons.css'       


// const app = createApp(App);
// app.use(router);
// app.use(PrimeVue);

// app.mount('#app');

// createApp(App).use(router,PrimeVue).component('ToastService',ToastService).mount('#app')
createApp(App).use(router).mount('#app')

