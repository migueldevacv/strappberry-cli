const routes = [
  {
    path: "catalogs",
    children: [
      {
        path: "products",
        lazy: () =>
          import("./Catalogs/Products/Products").then((module) => ({
            Component: module.default,
          })),
      },
    ],
  },
];
export default routes;
