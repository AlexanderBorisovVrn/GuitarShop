import { Routes, Route} from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";

export default function AppRoutes(){
  
// const isLogged = false;

return  (
<Routes>
  <Route path="/" element={<HomePage/>} />
  <Route path="electric-guitars/" element={<p>electric guitars</p>}  />
  <Route path="acoustic-guitars/" element={<p>acouctic guitars</p>} />
  <Route path="electric-basses/" element={<p>basses guitars</p>} />
  <Route path="acoustasonic-guitars/" element={<p>acoustasonic-guitars</p>} />
  <Route path="cart/" element={<p>cart</p>} />
  <Route path="*" element={<HomePage/>}/>
</Routes>
)

}