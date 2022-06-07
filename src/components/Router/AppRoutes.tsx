import { useRoutes } from "react-router-dom";
import AuthForm, { RequireAuth } from "../AuthForm/AuthForm";
import store from '../../store/RootStore'
import CartPage from "../Pages/CartPage/CartPage";
import ProductItemPage from "../Pages/ProductItemPage/ProductItemPage";
import ProductPage from "../Pages/ProductPage/ProductPage";

export interface IRoute {
  path: string;
  element: React.ComponentType;
}

export const AppRoutes: React.FC = (): JSX.Element => {
  const {isAuth} = store.authStore
  const mainRoutes = [
    { path: "/", element: <ProductPage /> },
    { path: "/:category", element: <ProductPage /> },
    { path: "/:category/:id", element: <ProductItemPage /> },
    { path: "/auth", element: <AuthForm/> },
    { path: "/cart", element: <RequireAuth><CartPage/></RequireAuth> },
    { path: "*", element: <ProductPage /> },
  ];

  const privateRoute = [{ path: "/cart", element: <CartPage /> }];
  const rout = isAuth ? [...mainRoutes, ...privateRoute] : mainRoutes;
  const routing = useRoutes(rout);
  return <>{routing}</>;
};
