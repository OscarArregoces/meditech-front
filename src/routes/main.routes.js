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
        children: [
          {
            path: "crearsolicitud",
            name: "crearsolicitud",
            component: () => import("../components/Cliente/CrearSolicitud.vue"),
          },
          {
            path: "solicitud/:id",
            name: "solicitud",
            component: () => import("../components/Cliente/Solicitud.vue"),
          },
          {
            path: "solicitudes",
            name: "solicitudes",
            component: () => import("../components/Cliente/Solicitudes.vue"),
          },
          {
            path: "perfil",
            name: "perfil",
            component: () => import("../components/public/Perfil.vue"),
          },
        ],
      },
      {
        path: "trabajador",
        name: "trabajador",
        component: () => import("../pages/Trabajador.vue"),
        children: [
          {
            path: "solicitudT/:id",
            name: "solicitudT",
            component: () => import("../components/Trabajador/Solicitud.vue"),
          },
          {
            path: "solicitudesT",
            name: "solicitudesT",
            component: () => import("../components/Trabajador/Solicitudes.vue"),
          },
          {
            path: "perfilT",
            name: "perfilT",
            component: () => import("../components/public/PerfilTrabajador.vue"),
          },
          {
            path: "respuestaT/:id",
            name: "respuestaT",
            component: () => import("../components/Trabajador/Respuesta.vue"),
          }
        ]
      }
    ]
  }
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
