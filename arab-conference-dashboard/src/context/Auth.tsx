"use client"
import { useLoalStorage } from "@/hooks/useLocalStorage";
import { redirect } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
    isAuth: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

const INITIAL_STATE: AuthContextType = {
    isAuth: false,
    setIsAuthenticated: () => {}
};

export const AuthContext = createContext<AuthContextType>(INITIAL_STATE);

export default function AuthProvider({ children}: { children: React.ReactNode}) {
    const [isAuth, setIsAuthenticated] = useState<boolean>(false);
    const { getItem } = useLoalStorage("token");

    useEffect(() => {
        checkAuthUser();
        
    }, []);

    const checkAuthUser = () => {
       const token = getItem();
        if (!token) {
            setIsAuthenticated(false);
            return false;
        }
        setIsAuthenticated(true);
        return true;
    };

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
}
