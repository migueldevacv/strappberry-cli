import { lazy } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";

const routes = [
  {
    path: "login",
    lazy: () =>
      import("./Login/Login").then((module) => ({
        Component: module.default,
      })),
  },
  {
    path: "register",
    lazy: () =>
      import("./Register/Register").then((module) => ({
        Component: module.default,
      })),
  },
];
export default routes;
