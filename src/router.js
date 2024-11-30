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
        path: "/package_booking/:id/:price",
        alias: "/package_booking",
        name: "package_booking",
        component: () => import("./components/Package_Booking")
    },
    {
        path: "/transport",
        alias: "/transport",
        name: "transport",
        component: () => import("./components/Transport")
    },

    {
        path: "/transport_booking/:id/:price",
        alias: "/transport_booking",
        name: "transport_booking",
        component: () => import("./components/Transport_Booking")
    },

    {
        path: "/blog",
        alias: "/blog",
        name: "blog",
        component: () => import("./components/Blog")
    },

    {
        path: "/mail",
        alias: "/mail",
        name: "mail",
        component: () => import("./components/Mail")
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