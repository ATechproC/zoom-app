"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { avatarImages } from "@/constants";
import { useToast } from "@/providers/ToastProvider";

interface MeetingCardProps {
    title: string;
    date: string;
    icon: string;
    isPreviousMeeting?: boolean;
    buttonIcon1?: string;
    buttonText?: string;
    handleClick: () => void;
    link: string;
}

const MeetingCard = ({
    icon,
    title,
    date,
    isPreviousMeeting,
    buttonIcon1,
    handleClick,
    link,
    buttonText,
}: MeetingCardProps) => {
    //     const toastStates = {
    //     message,
    //     isToastOpen,
    // }

    // const toastSetStates = {
    //     setMessage,
    //     setIsToastOpen,
    // }

    const {
        toastSetStates: { setMessage, setIsToastOpen }
    } = useToast();

    return (
        <section className="flex min-h-[210px] w-full flex-col flex-wrap justify-between rounded-[14px] bg-dark-1 px-5 py-8 xl:max-w-[568px]">
            <article className="flex flex-col gap-5">
                <Image src={icon} alt="upcoming" width={28} height={28} />
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <p className="text-base font-normal">{date}</p>
                    </div>
                </div>
            </article>
            <article className={cn("flex justify-center relative", {})}>
                <div className= {`relative flex w-full p-1 max-sm:hidden ${isPreviousMeeting ? "-top-4": "" }`}>
                    {avatarImages.map((img, index) => {
                        if (index !== 0) {
                            return <Image
                                key={index}
                                src={img}
                                alt="attendees"
                                width={40}
                                height={40}
                                className={cn("rounded-full", { absolute: index > 0 })}
                                style={{ top: 0, left: index * 28 }}
                            />
                        }
                    })}
                    <div className="flex-center absolute left-[136px] size-10 rounded-full border-[5px] border-dark-3 bg-dark-4">
                        +5
                    </div>
                </div>
                {!isPreviousMeeting && (
                    <div className="gap-2 md:relative flex-items md:-top-10">
                        <button onClick={handleClick} className="px-6 rounded bg-[#0E78F9] text-md p-[4px] flex-center whitespace-nowrap bg-blue-1">
                            {buttonIcon1 && (
                                <Image src={buttonIcon1} alt="feature" width={20} height={20} />
                            )}
                            &nbsp; {buttonText}
                        </button>
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(link);
                                setMessage("Link Copied");
                                setIsToastOpen(true);
                            }}
                            className="px-6 rounded-md text-md flex-items whitespace-nowrap bg-dark-3 p-1.5"
                        >
                            <Image
                                src="/icons/copy.svg"
                                alt="feature"
                                width={20}
                                height={20}
                            />
                            &nbsp; Copy Link
                        </button>
                    </div>
                )}
            </article>
        </section>
    );
};

export default MeetingCard;
