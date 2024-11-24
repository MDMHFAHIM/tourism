import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/home",
        alias: "/home",
        name: "home",
        component: () => import("./components/Home")
    },

    {
        path: "/package",
        alias: "/package",
        name: "package",
        component: () => import("./components/Package")
    },
    {
        path: "/offer",
        alias: "/offer",
        name: "offer",
        component: () => import("./components/Offer")
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;