import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router configuration

// Import the Leaflet CSS
import 'leaflet/dist/leaflet.css';  // This is where you import Leaflet's CSS

createApp(App)
  .use(router) // Use the router in your Vue app
  .mount('#app');
