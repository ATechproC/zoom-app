"use client";

import { MeetingModalProps, SetStatesProps, StatesProps } from "@/types";
import {
    createContext,
    ReactNode,
    useContext,
    useState,
} from "react";


const MeetingModalContext = createContext({} as MeetingModalProps);

export const MeetingModalProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [isOpen, setIsOpen] = useState(true);

    const [isMeetingCreated, setIsMeetingCreated] = useState(false);

    const [modalTitle, setModalTitle] = useState<string>("");

    const [btnContent, setBtnContent] = useState<string>("");

    const [buttonType, setButtonType] = useState<string>("");

    const [child, setChild] = useState<ReactNode>();

    const states: StatesProps = {
        isMeetingCreated,
        isOpen,
        modalTitle,
        btnContent,
        child,
        buttonType,
    };

    const setStates: SetStatesProps = {
        setIsOpen,
        setModalTitle,
        setBtnContent,
        setChild,
        setButtonType,
        setIsMeetingCreated,
    };

    return (
        <MeetingModalContext.Provider value={{ states, setStates }}>
            {children}
        </MeetingModalContext.Provider>
    );
};

export const useMeetingModal = () => {
    return useContext(MeetingModalContext);
};
