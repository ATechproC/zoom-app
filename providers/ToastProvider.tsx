"use client";

import { ToastProviderProps } from "@/types";
import { createContext,  useContext, useState } from "react";


const ToastContext = createContext({} as ToastProviderProps);

function ToastProvider({children} : {children : React.ReactNode}) {

    const [message, setMessage] = useState("");

    const [isToastOpen, setIsToastOpen] = useState<boolean>(false);

    const toastStates = {
        message,
        isToastOpen,
    }

    const toastSetStates = {
        setMessage, 
        setIsToastOpen,
    }

    return <ToastContext.Provider value={{toastStates, toastSetStates}}>
        {children}
    </ToastContext.Provider>
}

export default ToastProvider;


export const useToast = () => {
    return useContext(ToastContext);
}