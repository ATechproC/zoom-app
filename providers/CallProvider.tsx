"use client";

import { CallContextType } from "@/types";
import { Call } from "@stream-io/video-react-sdk";
import { createContext, useContext, useState } from "react";


const CallContext = createContext<CallContextType | undefined>(undefined);

export const CallProvider = ({ children }: { children: React.ReactNode }) => {

    const [callDetail, setCallDetail] = useState<Call>();

    return <CallContext.Provider value={{ callDetail, setCallDetail }}>
        {children}
    </CallContext.Provider>
}

export const useCall = () => {
    return useContext(CallContext);
}