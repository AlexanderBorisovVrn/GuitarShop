import React from "react";
import axios from "axios";
import { IFormValues, IUser } from "../../AuthForm/types";

interface AuthContextType {
  user: any;
  validationUser: (values: IFormValues) => Promise<IUser>;
}



export let AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<any>(null);

   const validationUser = async (values: IFormValues):Promise<IUser> => {
    let response:IUser[] = await new Promise((res,rej)=>{
      setTimeout(async ()=>{
        const data:IUser[] = (await axios.get('/auth-api.json')).data;
        res(data)
      },2000)
    })
    
    return response.find((user:IUser)=>{
      return  user.username === values.username &&
        user.password === values.password
      })!
  };

  let value = { user,  validationUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
