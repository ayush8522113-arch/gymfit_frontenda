import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const AuthContext =
  createContext();

export const AuthProvider =
  ({ children }) => {

    const [userInfo, setUserInfo] =
      useState(() => {

        const savedUser =
          localStorage.getItem(
            "userInfo"
          );

        return savedUser
          ? JSON.parse(savedUser)
          : null;

      });

    useEffect(() => {

      localStorage.setItem(
        "userInfo",
        JSON.stringify(userInfo)
      );

    }, [userInfo]);

    const logout = () => {

      localStorage.removeItem(
        "userInfo"
      );

      setUserInfo(null);

    };

    return (

      <AuthContext.Provider
        value={{
          userInfo,
          setUserInfo,
          logout,
        }}
      >

        {children}

      </AuthContext.Provider>
    );

};

export const useAuth = () =>
  useContext(AuthContext);