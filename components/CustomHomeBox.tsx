"use client";

import Image from "next/image";
import { useMeetingModal } from "@/providers/MeetingModalContext";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface CustomHomeBoxProps {
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

function CustomHomeBox({
    icon,
    title,
    buttonType,
    desc,
    bgColor,
    children,
    modalTitle,
    btnContent,
    isOpenModal,
}: CustomHomeBoxProps) {
    const {
        setStates: {
            setIsOpen,
            setModalTitle,
            setBtnContent,
            setChild,
            setButtonType,
        },
    } = useMeetingModal();

    const router = useRouter();

    return (
        <section
            onClick={() => {
                if (isOpenModal) {
                    setIsOpen(true);
                    setModalTitle(modalTitle!);
                    setBtnContent(btnContent!);
                    setChild(children);
                    setButtonType(buttonType!);
                }

                if (title === "View Recordings") {
                    router.push("/recording");
                }

                if (title === "Join Meeting") {
                    setIsOpen(true);
                    setModalTitle(modalTitle!);
                    setBtnContent(btnContent!);
                    setChild(children);
                }

                if(title === "Upcoming") {
                    router.push("/upcoming");
                }

                if(title === "previous") {
                    router.push("/previous");
                }
            }}
            style={{ backgroundColor: bgColor }}
            className="relative h-[150px] md:w-[23%] w-[100%] rounded-[10px] cursor-pointer"
        >
            <div className="absolute cursor-pointer p-[6px] rounded-md top-3 left-3 bg-glass">
                <Image src={icon} alt="" width={20} height={20} />
            </div>
            <div className="absolute bottom-3 left-3">
                <h1 className="text-xl"> {title} </h1>
                <p className="text-sm"> {desc} </p>
            </div>
        </section>
    );
}

export default CustomHomeBox;
