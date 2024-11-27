import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/home",
        alias: "/home",
        name: "home",
        component: () => import("./components/Home")
    },

    {
        path: "/login",
        alias: "/login",
        name: "login",
        component: () => import("./components/LoginForm")
    },

    {
        path: "/destination",
        alias: "/destination",
        name: "destination",
        component: () => import("./components/Destination")
    },

    {
        path: "/package",
        alias: "/package",
        name: "package",
        component: () => import("./components/Package")
    },

    {
        path: "/transport",
        alias: "/transport",
        name: "transport",
        component: () => import("./components/Transport")
    },

    {
        path: "/blog",
        alias: "/blog",
        name: "blog",
        component: () => import("./components/Blog")
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