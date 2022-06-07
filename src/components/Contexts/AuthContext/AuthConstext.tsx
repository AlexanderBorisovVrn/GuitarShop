import React from "react";
import axios from "axios";
import { IFormValues, IUser } from "../../AuthForm/types";
import { useLocation, useNavigate } from "react-router-dom";
type LocationStateType = {
  from: string;
};

interface AuthContextType {
  user: any;
  validationUser: (values: IFormValues) => Promise<IUser>;
  signOutRedirect: () => void;
  signInRedirect: () => void;
}

export let AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<any>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationStateType;

  const signInRedirect = () => {
    navigate("/auth", { state: { from: location } });
  };

  const signOutRedirect = () => {
    if (state.from) {
      navigate(state.from);
    }
    navigate("/");
  };

  const validationUser = async (values: IFormValues): Promise<IUser> => {
    let response: IUser[] = await new Promise((res, rej) => {
      setTimeout(async () => {
        const data: IUser[] = (await axios.get("/auth-api.json")).data;
        res(data);
      }, 2000);
    });

    return response.find((user: IUser) => {
      return (
        user.username === values.username && user.password === values.password
      );
    })!;
  };

  let value = { user, validationUser, signOutRedirect,signInRedirect };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
