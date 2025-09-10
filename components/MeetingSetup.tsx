"use client";
import { useEffect, useState } from "react";
import {
    DeviceSettings,
    VideoPreview,
    useCall,
    useCallStateHooks,
} from "@stream-io/video-react-sdk";

// import Alert from './Alert';
// import { Button } from './ui/button';

const MeetingSetup = ({
    setIsSetupComplete,
}: {
    setIsSetupComplete: (value: boolean) => void;
}) => {
    // https://getstream.io/video/docs/react/guides/call-and-participant-state/#call-state
    const { useCallEndedAt, useCallStartsAt } = useCallStateHooks();
    const callStartsAt = useCallStartsAt();
    const callEndedAt = useCallEndedAt();
    const callTimeNotArrived =
        callStartsAt && new Date(callStartsAt) > new Date();
    const callHasEnded = !!callEndedAt;

    const call = useCall();

    if (!call) {
        throw new Error(
            "useStreamCall must be used within a StreamCall component."
        );
    }

    // https://getstream.io/video/docs/react/ui-cookbook/replacing-call-controls/
    const [isMicCamToggled, setIsMicCamToggled] = useState(false);

    useEffect(() => {
        if (isMicCamToggled) {
            call.camera.disable();
            call.microphone.disable();
        } else {
            call.camera.enable();
            call.microphone.enable();
        }
    }, [isMicCamToggled, call.camera, call.microphone]);

    // if (callTimeNotArrived)
    // return (
    //     <Alert
    //         title={`Your Meeting has not started yet. It is scheduled for ${callStartsAt.toLocaleString()}`
    //         }
    //     />
    // );

    // if (callHasEnded)
    //     return (
    //         <Alert
    //             title="The call has been ended by the host"
    //             iconUrl="/icons/call-ended.svg"
    //         />
    //     );

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen gap-3 text-white md:center-element">
            {/* <h1 className="text-2xl font-bold text-center"> Setup </h1> */}
            <VideoPreview className="max-sm:max-w-[300px]"/>
            <div className="flex items-center justify-center h-16 gap-3">
                <label className="flex items-center justify-center gap-2 font-medium">
                    <input
                        type="checkbox"
                        checked={isMicCamToggled}
                        onChange={(e) => setIsMicCamToggled(e.target.checked)}
                    />
                    Join with mic and camera off
                </label>
                <DeviceSettings />
            </div>
            < button
                className="rounded-md bg-green-500 px-4 py-2.5"
                onClick={() => {
                    call.join();

                    setIsSetupComplete(true);
                }}
            >
                Join meeting
            </button>
        </div>
    );
};

export default MeetingSetup;
