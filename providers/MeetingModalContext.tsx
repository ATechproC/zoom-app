"use client";

import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from "react";

interface StatesProps {
    isOpen: boolean;
    isMeetingCreated: boolean;
    modalTitle: string;
    btnContent: string;
    child: ReactNode;
    buttonType: string;
}

interface SetStatesProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    setModalTitle: Dispatch<SetStateAction<string>>;
    setBtnContent: Dispatch<SetStateAction<string>>;
    setChild: Dispatch<SetStateAction<ReactNode>>;
    setButtonType: Dispatch<SetStateAction<string>>;
    setIsMeetingCreated: Dispatch<SetStateAction<boolean>>;
}

interface MeetingModalProps {
    states: StatesProps;
    setStates: SetStatesProps;
}

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
