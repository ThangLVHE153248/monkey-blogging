import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const [userInfo, setUserInfo] = useState({});
  const value = [userInfo, setUserInfo];
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

const useAuth = () => {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be use within AuthProvider");
  return context;
};

export { AuthProvider, useAuth };
