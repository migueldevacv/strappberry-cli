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
      {
        path: "categories",
        lazy: () =>
          import("./Catalogs/Categories/Categories").then((module) => ({
            Component: module.default,
          })),
      },
      {
        path: "menus",
        lazy: () =>
          import("./Catalogs/Menus/Menus").then((module) => ({
            Component: module.default,
          })),
      },
      {
        path: "users",
        lazy: () =>
          import("./Catalogs/Users/Users").then((module) => ({
            Component: module.default,
          })),
      },
    ],
  },
];
export default routes;
