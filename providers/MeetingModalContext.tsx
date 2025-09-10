"use client";

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface StatesProps {
    isOpen : boolean;
    modalTitle : string;
    btnContent : string;
}

interface SetStatesProps {
    setIsOpen :  Dispatch<SetStateAction<boolean>>;
    setModalTitle : Dispatch<SetStateAction<string>>;
    setBtnContent :  Dispatch<SetStateAction<string>>;
}

interface MeetingModalProps {
    states : StatesProps;
    setStates : SetStatesProps;
}

const MeetingModalContext = createContext({} as MeetingModalProps);

export const MeetingModalProvider = ({ children }: { children: React.ReactNode }) => {

    const [isOpen, setIsOpen] = useState(true);

    const [modalTitle, setModalTitle] = useState<string>("");

    const [btnContent, setBtnContent] = useState<string>("");

    const states : StatesProps = {
        isOpen,
        modalTitle, btnContent
    }

    const setStates : SetStatesProps = {
        setIsOpen, setModalTitle, setBtnContent
    }

    return <MeetingModalContext.Provider value={{ states, setStates}} >
        {children}
    </MeetingModalContext.Provider>
}

export const useMeetingModal = () => {
    return useContext(MeetingModalContext);
}