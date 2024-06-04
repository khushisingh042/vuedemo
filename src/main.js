import { createApp } from 'vue';
import App from './App.vue';
import router from './routes'; // Assuming you have a router setup

createApp(App)
  .use(router) // Use the router plugin
  .mount('#app');
