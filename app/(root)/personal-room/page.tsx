"use client";

import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";

import { useGetCallById } from "@/hooks/useGetCallById";
import { useToast } from "@/providers/ToastProvider";

const Table = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => {
    return (
        <div className="flex-col gap-2 text-center flex-center xl:flex-row">
            <h1 className="text-base font-medium text-sky-1 lg:text-xl xl:min-w-32">
                {title}:
            </h1>
            <h1 className="truncate text-sm max-sm:max-w-[320px] lg:text-xl">
                {description}
            </h1>
        </div>
    );
};

const PersonalRoom = () => {
    const router = useRouter();
    const { user } = useUser();
    const client = useStreamVideoClient();
    const {
        toastSetStates: { setMessage, setIsToastOpen }
    } = useToast();

    const meetingId = user?.id;

    const { call } = useGetCallById(meetingId!);

    const startRoom = async () => {
        if (!client || !user) return;

        const newCall = client.call("default", meetingId!);

        if (!call) {
            await newCall.getOrCreate({
                data: {
                    starts_at: new Date().toISOString(),
                },
            });
        }

        router.push(`/meeting/${meetingId}?personal=true`);
    };

    const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;

    return (
        <section className="md:center-element max-sm:w-[90%] text-center flex flex-col gap-10 text-white size-full md:w-[90%] max-sm:pl-10 md:center-element">
            <h1 className="text-xl font-bold lg:text-3xl">Personal Meeting Room</h1>
            <div className="flex w-full flex-col gap-8 xl:max-w-[900px]">
                <Table title="Topic" description={`${user?.username}'s Meeting Room`} />
                <Table title="Meeting ID" description={meetingId!} />
                <Table title="Invite Link" description={meetingLink} />
            </div>
            <div className="gap-5 flex-center">
                <button className="bg-[#0E78F9] p-1.5 rounded-md" onClick={startRoom}>
                    Start Meeting
                </button>
                <button
                    className="bg-dark-3 p-1.5 rounded-md"
                    onClick={() => {
                        navigator.clipboard.writeText(meetingLink);
                        setIsToastOpen(true);
                        setMessage('Link Copied');
                    }}
                >
                    Copy Invitation
                </button>
            </div>
        </section>
    );
};

export default PersonalRoom;