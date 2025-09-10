'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useParams } from 'next/navigation';
// import { Loader } from 'lucide-react';

import { useGetCallById } from '@/hooks/useGetCallById';
// import Alert from '@/components/Alert';
import MeetingSetup from '@/components/MeetingSetup';
import MeetingRoom from '@/components/MeetingRoom';
import Toast from '@/components/Toast';

const MeetingPage = () => {
    const { id } = useParams();
    const { isLoaded, user } = useUser();
    const { call, isCallLoading } = useGetCallById(id);
    const [isSetupComplete, setIsSetupComplete] = useState(false);

    // if (!isLoaded || isCallLoading) return <Loader />;

    // if (!call) return (
    //     <p className="text-3xl font-bold text-center text-white">
    //         Call Not Found
    //     </p>
    // );

    // get more info about custom call type:  https://getstream.io/video/docs/react/guides/configuring-call-types/
    // const notAllowed = call.type === 'invited' && (!user || !call.state.members.find((m) => m.user.id === user.id));

    // if (notAllowed) return <Alert title="You are not allowed to join this meeting" />;

    return (
        <>
            {/* <Toast /> */}
            <main className="w-full h-screen">
                {isLoaded && call ? (
                    <StreamCall call={call}>
                        <StreamTheme>
                            {!isSetupComplete ? (
                                <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
                            ) : (
                                <div className='md:relative md:center-element'>
                                    <MeetingRoom />
                                </div>
                            )}
                        </StreamTheme>
                    </StreamCall>
                ) : (
                    <p className="text-center text-white">Loading meeting...</p>
                )}
            </main>
        </>
    );

};

export default MeetingPage;

