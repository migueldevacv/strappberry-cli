import { lazy } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";

const routes = [
  {
    path: "login",
    element: Login(),
    // element: lazy(() => import("./Login/Login")),
  },
  {
    path: "register",
    element: Register(),
    // lazy: () => import("./Register/Register"),
  },
];
export default routes;
