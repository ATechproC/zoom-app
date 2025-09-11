"use client";

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface toastStatesProps {
    message : string;
    isToastOpen : boolean;
}

interface toastSetStatesProps {
    setMessage : Dispatch<SetStateAction<string>>;
    setIsToastOpen : Dispatch<SetStateAction<boolean>>;
}

interface ToastProviderProps {
    toastStates : toastStatesProps;
    toastSetStates : toastSetStatesProps;
}

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