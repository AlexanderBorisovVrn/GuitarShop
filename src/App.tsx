import { AppRoutes } from "./components/Router/AppRoutes";
import Header from "./components/Header/Header";
import { AuthProvider } from "./components/Contexts/AuthContext/AuthConstext";
import "./App.scss";
import { ShopProvider } from "./components/Contexts/ShopContext/ShopContext";

export default function App() {

  return (
    <>
      <ShopProvider>
        <AuthProvider>
          <Header />
          <AppRoutes />
        </AuthProvider>
      </ShopProvider>
    </>
  );
}
