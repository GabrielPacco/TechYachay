import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import i18n from './i18n';  // Importa el archivo de configuración de i18n
import HomePage from './views/HomePage.vue';
import RegisterPage from './views/RegisterPage.vue';
import LoginPage from './views/LoginPage.vue';
import TeacherPage from './views/TeacherPage.vue';
import CoursesPage from './views/CoursesPage.vue';
import './assets/styles.css'; // Importar los estilos

const routes = [
  { path: '/', component: HomePage },
  { path: '/register', component: RegisterPage },
  { path: '/login', component: LoginPage },
  { path: '/teacher', component: TeacherPage },
  { path: '/courses', component: CoursesPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(i18n);  // Asegúrate de que i18n se está utilizando aquí
app.mount('#app');
