'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useParams } from 'next/navigation';
import { useGetCallById } from '@/hooks/useGetCallById';
import MeetingSetup from '@/components/MeetingSetup';
import MeetingRoom from '@/components/MeetingRoom';
import Loader from '@/components/Loader';
import Alert from '@/components/Alert';

const MeetingPage = () => {
const { id } = useParams();
const { isLoaded, user } = useUser();
const [isSetupComplete, setIsSetupComplete] = useState(false);

// ✅ Always call the hook
const { call, isCallLoading } = useGetCallById(id); // id can be undefined

if (!id) {
    return (
        <p className="text-3xl font-bold text-center text-white">
            Invalid Meeting ID
        </p>
    );
}

if (!isLoaded || isCallLoading) return <Loader />;

if (!call) {
    return (
        <p className="text-3xl font-bold text-center text-white">
            Call Not Found
        </p>
    );
}

const notAllowed =
    call.type === 'invited' &&
    (!user || !call.state.members.find((m) => m.user.id === user.id));

if (notAllowed) return <Alert title="You are not allowed to join this meeting" />;

return (
    <main className="w-full h-screen">
        <StreamCall call={call}>
            <StreamTheme>
                {!isSetupComplete ? (
                    <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
                ) : (
                    <div className="md:relative md:center-element">
                        <MeetingRoom />
                    </div>
                )}
            </StreamTheme>
        </StreamCall>
    </main>
);
};

export default MeetingPage;
