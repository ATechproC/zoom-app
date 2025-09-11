import { Call } from "@stream-io/video-react-sdk";
import { ReactNode, SetStateAction } from "react"

export interface PermissionCardProps {
    title: string;
    iconUrl?: string;
}

export interface CustomHomeBoxProps {
    children?: ReactNode;
    icon: string;
    title: string;
    desc: string;
    bgColor: string;
    modalTitle?: string;
    btnContent?: string;
    isOpenModal: boolean;
    buttonType?: string;
}

export interface MeetingCardProps {
    title: string;
    date: string;
    icon: string;
    isPreviousMeeting?: boolean;
    buttonIcon1?: string;
    buttonText?: string;
    handleClick: () => void;
    link: string;
}

export interface CallContextType {
    callDetail: Call | undefined;
    setCallDetail: React.Dispatch<React.SetStateAction<Call | undefined>>;
}

export interface ValuesProps {
    dateTime : Date;
    description : string;
    link : string;
}

export interface FormProps {
    values : ValuesProps;
    setValues : React.Dispatch<SetStateAction<ValuesProps>>;
}

export interface StatesProps {
    isOpen: boolean;
    isMeetingCreated: boolean;
    modalTitle: string;
    btnContent: string;
    child: ReactNode;
    buttonType: string;
}

export interface SetStatesProps {
    setIsOpen: React.Dispatch<SetStateAction<boolean>>;
    setModalTitle: React.Dispatch<SetStateAction<string>>;
    setBtnContent: React.Dispatch<SetStateAction<string>>;
    setChild: React.Dispatch<SetStateAction<ReactNode>>;
    setButtonType: React.Dispatch<SetStateAction<string>>;
    setIsMeetingCreated: React.Dispatch<SetStateAction<boolean>>;
}

export interface MeetingModalProps {
    states: StatesProps;
    setStates: SetStatesProps;
}

export interface toastStatesProps {
    message : string;
    isToastOpen : boolean;
}

export interface toastSetStatesProps {
    setMessage : React.Dispatch<SetStateAction<string>>;
    setIsToastOpen : React.Dispatch<SetStateAction<boolean>>;
}

export interface ToastProviderProps {
    toastStates : toastStatesProps;
    toastSetStates : toastSetStatesProps;
}
