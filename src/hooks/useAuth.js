import {useContext} from "react";
import { AuthContext } from "../components/Contexts/AuthContext/AuthConstext";
export default function useAuth(){
  return useContext(AuthContext) //return  {user,signin,signout}
} 