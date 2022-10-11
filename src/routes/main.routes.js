import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/auth/login",
  },
  {
    path: "/auth/",
    name: "auth",
    component: () => import("../auth/Auth.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("../auth/Login.vue"),
      },
      {
        path: "register",
        name: "register",
        component: () => import("../auth/Register.vue"),
      },
    ],
  },
  {
    path: "/dashboard/",
    name: "dashboard",
    component: () => import("../pages/Dashboard.vue"),
    children: [
      {
        path: "cliente",
        name: "cliente",
        component: () => import("../pages/Cliente.vue"),
      },
      {
        path: "trabajador",
        name: "trabajador",
        component: () => import("../pages/Trabajador.vue"),
      },
      {
        path: "crearsolicitud",
        name: "crearsolicitud",
        component: () => import("../components/Cliente/CrearSolicitud.vue"),
      },
      {
        path: "solicitud",
        name: "solicitud",
        component: () => import("../components/Cliente/Solicitud.vue"),
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
