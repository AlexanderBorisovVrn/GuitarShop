import { Routes, Route} from "react-router-dom";

export default function AppRoutes(){
  
// const isLogged = false;

return  (
<Routes>
  <Route path="/" element={<p>home page</p>} />
  <Route path="electric-guitars/" element={<p>electric guitars</p>} />
  <Route path="acoustic-guitars/" element={<p>acouctic guitars</p>} />
  <Route path="electric-basses/" element={<p>basses guitars</p>} />
  <Route path="*" element={<p>home page</p>}/>
</Routes>
)

  
}