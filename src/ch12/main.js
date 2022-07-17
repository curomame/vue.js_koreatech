import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import Home from './Home-file.vue';
import LoginPage from './Login-file.vue';
import DetailPage from './Detail-file.vue';


const routes = [
  {path : '/', name : 'home', component : Home},
  {path : '/login', name : 'login', component : LoginPage},
  {path : '/Detail/:title', name : 'detail', component : DetailPage},
]

const router = createRouter({
  history : createWebHistory(),
  routes
})

var app = createApp({});
app.use(router);
app.mount('#app');