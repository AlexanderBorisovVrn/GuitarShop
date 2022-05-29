import { Routes, Route} from "react-router-dom";
import ProductPage from "../Pages/ProductPage/ProductPage";

export default function AppRoutes(){
  
// const isLogged = false;

return  (
<Routes>
  <Route path="/" element={<ProductPage/>} />
  <Route path="/:category/:id" element={<ProductPage/>} />
  <Route path="/:category/" element={<ProductPage/>}  />
  <Route path="cart/" element={<p>cart</p>} />
  <Route path="*" element={<ProductPage/>}/>
</Routes>
)

}