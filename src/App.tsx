import AppRoutes from "./components/Router/AppRoutes";
import Header from "./components/Header/Header";
import "./App.scss";

export default function App() {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
}
