import { createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Login',
        component: loginPage,
    },
    {
        path: '/Home',
        name:  'Home',
        component: homePage,
    },

    {
        path: '/Contato',
        name: 'Contato',
        component: contactPage
    },
    {
        path:'/Sobre',
        name: 'Sobre',
        component: aboutPage
    },
]