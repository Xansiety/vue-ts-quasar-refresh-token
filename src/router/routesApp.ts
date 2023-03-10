import { RouteRecordRaw } from 'vue-router';
import authRouter from '../auth/router'
import privateRouter from '../private-module/router'; 

export const routesApp: RouteRecordRaw[] = [
  {
    path: "/auth",
    ...authRouter,
  },
  {
    path: "/",
    // beforeEnter: [ requiereAuthGuard  ],
    ...privateRouter,
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("../pages/NotFoundPage.vue"),
  },
];