import { useRoutes } from "react-router-dom";
import CartPage from "../Pages/CartPage/CartPage";
import ProductItemPage from "../Pages/ProductItemPage/ProductItemPage";
import ProductPage from "../Pages/ProductPage/ProductPage";

export interface IRoute {
  path: string;
  element: React.ComponentType;
}

export const AppRoutes: React.FC = (): JSX.Element => {
  const isLogin = true;
  const mainRoutes = [
    { path: "/", element: <ProductPage /> },
    { path: "/:category", element: <ProductPage /> },
    { path: "/:category/:id", element: <ProductItemPage /> },
    { path: "*", element: <ProductPage /> },
  ];

  const privateRoute = [{ path: "/cart", element: <CartPage /> }];
  const rout = isLogin ? [...mainRoutes, ...privateRoute] : mainRoutes;
  const routing = useRoutes(rout);
  return <>{routing}</>;
};
