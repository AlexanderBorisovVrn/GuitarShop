import {AppRoutes} from "./components/Router/AppRoutes";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "./components/Contexts/AuthContext/AuthConstext";
import "./App.scss";
import AuthForm from "./components/AuthForm/AuthForm";

export default function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <AppRoutes/>
        {/* <Outlet/> */}
        <AuthForm/>
      </AuthProvider>
    </>
  );
}
