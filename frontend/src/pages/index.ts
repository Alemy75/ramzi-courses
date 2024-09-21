import { ROUTES } from "@/shared/router";

export const routes = [
  {
    path: ROUTES.BASE.path,
    name: ROUTES.BASE.name,
    component: () => import("./home")
  },
  {
    path: ROUTES.SIGN_IN.path,
    name: ROUTES.SIGN_IN.name,
    component: () => import("./sign-in")
  }
];
