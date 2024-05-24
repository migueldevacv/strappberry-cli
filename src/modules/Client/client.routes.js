const routes = [
  {
    path: "products",
    lazy: () =>
      import("./Views/ClientProducts").then((module) => ({
        Component: module.default,
      })),
  },
];
export default routes;
