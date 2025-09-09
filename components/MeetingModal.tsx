"use client";

import { assets } from "@/constants";
import Image from "next/image";
import { useMeetingModal } from "@/contexts/MeetingModalContext";

const MeetingModal = () => {

    const {states : {isOpen, modalTitle, btnContent}, setStates : {setIsOpen}} = useMeetingModal();

    return (
        <>
            <div
            onClick={() => setIsOpen(false)}
            className={`fixed ${isOpen ? "open" : "close"} top-0 left-0 z-10 w-[100%] h-[100%] backdrop-blur-md`}></div>
            <div className={`fixed ${isOpen ? "open" : "close"} bg-dark-2 rounded-md text-center p-3 w-[300px] z-20 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]`}>
                <div 
                onClick={() => setIsOpen(false)}
                className="absolute cursor-pointer top-2 right-2">
                    <Image src={assets.icon} alt="" width={20} height={20} />
                </div>
                <h1 className="mb-2">{modalTitle}</h1>
                <button className="bg-[#0E78F9] w-full mb-2  px-3 py-1 rounded-md"> {btnContent} </button>
            </div>
        </>
    )
}

export default MeetingModal