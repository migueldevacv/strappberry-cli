import AdminView from "./AdminView";
import ProductsView from "./Catalogs/Products/Products";


const routes = [
  {
    path: "catalogs",
    element: AdminView(),
    children: [
      {
        path: "products",
        element: ProductsView(),
      },
    ],
  },
];
export default routes;
