"use client";

import React, { useState } from "react";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";


import { assets } from "@/constants";
import Image from "next/image";
import { useMeetingModal } from "@/providers/MeetingModalContext";
import { useToast } from "@/providers/ToastProvider";
import { useFormValues } from "@/providers/FormProvider";

const MeetingModal = () => {

    const {values} = useFormValues();
    
    const [callDetail, setCallDetail] = useState<Call>();
    const client = useStreamVideoClient();
    const router = useRouter();
    const { user } = useUser();
    const { toastSetStates : {setMessage} } = useToast();

    const createMeeting = async () => {
        if (!client || !user) return;
        try {
            if (!values.dateTime) {
                setMessage("Please select a date and time");
                return;
            }

            const id = crypto.randomUUID();

            const call = client.call("default", id);
            if (!call) throw new Error("Failed to create meeting");
            const startsAt =
                values.dateTime.toISOString() || new Date(Date.now()).toISOString();
            const description = values.description || "Instant Meeting";
            await call.getOrCreate({
                data: {
                    starts_at: startsAt,
                    custom: {
                        description,
                    },
                },
            });
            setCallDetail(call);
            if (!values.description) {
                router.push(`/meeting/${call.id}`);
            }

            setMessage("Meeting Created");
        } catch (error) {
            console.error(error);
            setMessage("Meeting Created");
        }
    };

    const {
        states: { isOpen, modalTitle, btnContent, child },
        setStates: { setIsOpen },
    } = useMeetingModal();

    if (modalTitle === "") return;

    return (
        <>
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed ${isOpen ? "open" : "close"
                    } top-0 left-0 z-10 w-[100%] h-[100%] backdrop-blur-md`}
            ></div>
            <div
                className={`fixed ${isOpen ? "open" : "close"
                    } bg-dark-2 rounded-md text-center p-3 w-[300px] z-20 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]`}
            >
                <div
                    onClick={() => setIsOpen(false)}
                    className="absolute cursor-pointer top-2 right-2"
                >
                    <Image src={assets.icon} alt="" width={20} height={20} />
                </div>
                <h1 className="mb-2">{modalTitle}</h1>
                {child}
                <button
                    onClick={createMeeting}
                    className="bg-[#0E78F9] w-full mb-2  px-3 py-1 rounded-md"
                >
                    {btnContent}
                </button>
            </div>
        </>
    );
};

export default MeetingModal;
