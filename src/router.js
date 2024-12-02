import { createRouter, createWebHashHistory } from 'vue-router';
import SignUpForm from './components/SignUpForm.vue';  // Path for SignUp form
import Login from './components/Login.vue';  // Path for Login form
import TransportationChoice from './components/TransportationChoice.vue';  // Path for Transportation Choice form

const routes = [
  { path: '/', component: Login },  // Set root route to Login page
  { path: '/signup', component: SignUpForm },  // Set '/signup' route to SignUp form
  { path: '/login', component: Login },  // Path to Login form explicitly
  { path: '/transportation', component: TransportationChoice },  // Path to TransportationChoice page
];

const router = createRouter({
  history: createWebHashHistory(),  // Switch to hash history mode
  routes,
});

export default router;
