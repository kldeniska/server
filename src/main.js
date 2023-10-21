import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory} from 'vue-router';

import HomePage from './components/Home.vue';
import ChatPage from './components/Chat.vue';
import TestApi from './components/TestApi.vue';

const routes = [
    {path:'/', name: 'Home', component: HomePage},
    {path:'/Chat', name: 'Chat', component: ChatPage},
    {path:'/Test', name: 'TestApi', component: TestApi},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");

