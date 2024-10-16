import AboutUsPage from "@/components/pages/AboutUsPage.vue";
import ContactPage from "@/components/pages/ContactPage.vue";
import HomePage from "@/components/pages/HomePage.vue";
import LoginPage from "@/components/pages/LoginPage.vue";
import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/contact',
        name: 'Contato',
        component: ContactPage
    },
    {
        path: '/',
        name: 'Homepage',
        component: HomePage
    },
    {
        path: '/about',
        name: 'Sobre nós',
        component: AboutUsPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;