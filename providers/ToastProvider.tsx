"use client";

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface toastStatesProps {
    message : string;
    isOpen : boolean;
}

interface toastSetStatesProps {
    setMessage : Dispatch<SetStateAction<string>>;
    setIsOpen : Dispatch<SetStateAction<boolean>>;
}

interface ToastProviderProps {
    toastStates : toastStatesProps;
    toastSetStates : toastSetStatesProps;
}

const ToastContext = createContext({} as ToastProviderProps);

function ToastProvider({children} : {children : React.ReactNode}) {

    const [message, setMessage] = useState("");

    const [isOpen, setIsOpen] = useState<boolean>(true);

    const toastStates = {
        message,
        isOpen,
    }

    const toastSetStates = {
        setMessage, 
        setIsOpen,
    }

    return <ToastContext.Provider value={{toastStates, toastSetStates}}>
        {children}
    </ToastContext.Provider>
}

export default ToastProvider;


export const useToast = () => {
    return useContext(ToastContext);
}