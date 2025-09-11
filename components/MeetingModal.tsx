// "use client";

// import React, { useState } from "react";
// import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
// import { useUser } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";

// const initialValues = {
//     dateTime: new Date(),
//     description: "",
//     link: "",
// };

// import { assets } from "@/constants";
// import Image from "next/image";
// import { useMeetingModal } from "@/providers/MeetingModalContext";
// import { useToast } from "@/providers/ToastProvider";

// const MeetingModal = () => {
//     const [values, setValues] = useState(initialValues);

//     const [id, setId] = useState<string>();

//     const [callDetail, setCallDetail] = useState<Call | null>(null);
//     const client = useStreamVideoClient();
//     const router = useRouter();
//     const { user } = useUser();

//     const {
//         toastSetStates: { setMessage, setIsToastOpen },
//     } = useToast();

//     const {
//         states: {
//             isOpen,
//             modalTitle,
//             btnContent,
//             child,
//             buttonType,
//             isMeetingCreated,
//         },
//         setStates: { setIsOpen, setIsMeetingCreated },
//     } = useMeetingModal();

//     const createMeeting = async () => {
//         if (!client || !user) return;
//         try {
//             if (!values.dateTime) {
//                 setIsToastOpen(true);
//                 setMessage("Please select a date and time");
//                 return;
//             }

//             const newId = crypto.randomUUID();

//             setId(newId);

//             const call = client.call("default", newId);
//             if (!call) throw new Error("Failed to create meeting");
//             const startsAt =
//                 values.dateTime.toISOString() || new Date(Date.now()).toISOString();
//             const description = values.description || "Instant Meeting";
//             await call.getOrCreate({
//                 data: {
//                     starts_at: startsAt,
//                     custom: {
//                         description,
//                     },
//                 },
//             });
//             setCallDetail(call);
//             if (!values.description) {
//                 router.push(`/meeting/${call.id}`);
//             }

//             setIsToastOpen(true);
//             setMessage("Meeting Created");
//             setIsMeetingCreated(false);
//             setIsOpen(false);
//         } catch (error) {
//             console.error(error);
//             setMessage("Meeting Created");
//             setIsToastOpen(true);
//         }
//     };

//     if (modalTitle === "") return;

//     const meetingLink = callDetail
//         ? `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetail.id}`
//         : "";

//     if (!callDetail) {
//         return (
//             <>
//                 <div
//                     onClick={() => {
//                         setIsOpen(false);
//                         setIsMeetingCreated(false);
//                     }}
//                     className={`fixed ${isOpen || isMeetingCreated ? "open" : "close"
//                         } top-0 left-0 z-10 w-[100%] h-[100%] backdrop-blur-md`}
//                 ></div>
//                 <div
//                     className={`fixed ${isOpen ? "open" : "close"
//                         } bg-dark-2 rounded-md text-center p-3 w-[300px] z-20 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]`}
//                 >
//                     <div
//                         onClick={() => setIsOpen(false)}
//                         className="absolute cursor-pointer top-2 right-2"
//                     >
//                         <Image src={assets.icon} alt="" width={20} height={20} />
//                     </div>
//                     <h1 className="mb-2">{modalTitle}</h1>
//                     {child}
//                     <button
//                         onClick={() => {
//                             if (buttonType === "Create Meeting") {
//                                 setIsMeetingCreated(true);
//                                 setIsOpen(false);
//                             } else {
//                                 createMeeting();
//                             }
//                         }}
//                         className="bg-[#0E78F9] w-full mb-2  px-3 py-1 rounded-md"
//                     >
//                         {btnContent}
//                     </button>
//                     {/* <button
//                         onClick={() => {
//                             if (id) {
//                                 navigator.clipboard.writeText(
//                                     `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${id}`
//                                 );
//                                 setIsMeetingCreated(false);
//                                 setIsToastOpen(true);
//                                 setMessage("Link Copied");
//                             } else {
//                                 setIsToastOpen(true);
//                                 setMessage("Error: Meeting ID not found");
//                             }
//                         }}
//                     >
//                         {btnContent}
//                     </button> */}

//                 </div>

//                 <div
//                     className={`fixed ${isMeetingCreated ? "open" : "close"
//                         } bg-dark-2 rounded-md text-center p-3 w-[300px] z-20 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]`}
//                 >
//                     <div
//                         onClick={() => setIsMeetingCreated(false)}
//                         className="absolute cursor-pointer top-2 right-2"
//                     >
//                         <Image src={assets.icon} alt="" width={20} height={20} />
//                     </div>
//                     <div className="grid w-full p-2 place-items-center">
//                         <Image src={assets.checked} alt="" width={40} height={40} />
//                     </div>
//                     <h1 className="mb-2">Meeting Created</h1>
//                     <button
//                         onClick={() => {
//                             navigator.clipboard.writeText(meetingLink);
//                             setIsMeetingCreated(false);
//                             setIsToastOpen(true);
//                             setMessage("Link Copied");
//                         }}
//                         className="bg-[#0E78F9] text-sm flex-center gap-2 w-full mb-2  px-3 py-1 rounded-md"
//                     >
//                         <Image src={assets.copy} alt="" width={15} height={15} /> Copy
//                         Meeting Link
//                     </button>
//                 </div>
//             </>
//         );
//     }
// };

// export default MeetingModal;

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
    const { values } = useFormValues();

    const [callDetail, setCallDetail] = useState<Call | null>(null);
    const client = useStreamVideoClient();
    const router = useRouter();
    const { user } = useUser();

    const {
        toastSetStates: { setMessage, setIsToastOpen },
    } = useToast();

    const {
        states: {
            isOpen,
            modalTitle,
            btnContent,
            child,
            buttonType,
            isMeetingCreated,
        },
        setStates: { setIsOpen, setIsMeetingCreated },
    } = useMeetingModal();

    const createMeeting = async () => {
        if (!client || !user) return;
        try {
            if (!values.dateTime) {
                setIsToastOpen(true);
                setMessage("Please select a date and time");
                return;
            }

            const newId = crypto.randomUUID();
            const call = client.call("default", newId);

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

            setIsToastOpen(true);
            setMessage("Meeting Created");
            setIsMeetingCreated(false);
            setIsOpen(false);
        } catch (error) {
            console.error(error);
            setMessage("Failed to create meeting");
            setIsToastOpen(true);
        }
    };

    // const copyMeetingLink = () => {
    //     if (callDetail?.id) {
    //         navigator.clipboard.writeText(
    //             `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetail.id}`
    //         );
    //         setIsMeetingCreated(false);
    //         setIsToastOpen(true);
    //         setMessage("Link Copied");
    //     } else {
    //         setIsToastOpen(true);
    //         setMessage("Error: Meeting ID not found");
    //     }
    // };

    if (modalTitle === "") return null;

    const meetingLink = callDetail
        ? `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetail.id}`
        : "";

    return (
        <>
            <div
                onClick={() => {
                    setIsOpen(false);
                    setIsMeetingCreated(false);
                }}
                className={`fixed ${isOpen || isMeetingCreated ? "open" : "close"
                    } top-0 left-0 z-10 w-[100%] h-[100%] backdrop-blur-md`}
            ></div>

            {/* First Modal */}
            <div
                className={`fixed ${isOpen ? "open" : "close"
                    } bg-dark-2 rounded-md text-center p-3 w-[300px] z-20 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]`}
            >
                <div
                    onClick={() => setIsOpen(false)}
                    className="absolute cursor-pointer top-2 right-2"
                >
                    <Image src={assets.icon} alt="Close" width={20} height={20} />
                </div>
                <h1 className="mb-2">{modalTitle}</h1>
                {child}
                <button
                    onClick={() => {
                        if (buttonType === "Create Meeting") {
                            navigator.clipboard.writeText(meetingLink);
                            setIsMeetingCreated(true);
                            setIsOpen(false);
                        }
                        if (buttonType === "Join Meeting") {
                        } else {
                            createMeeting();
                        }
                    }}
                    className="bg-[#0E78F9] w-full mb-2 px-3 py-1 rounded-md"
                >
                    {btnContent}
                </button>
            </div>

            {/* Success Modal */}
            {/* <div
                className={`fixed ${isMeetingCreated ? "open" : "close"
                    } bg-dark-2 rounded-md text-center p-3 w-[300px] z-20 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]`}
            >
                <div
                    onClick={() => setIsMeetingCreated(false)}
                    className="absolute cursor-pointer top-2 right-2"
                >
                    <Image src={assets.icon} alt="Close" width={20} height={20} />
                </div>
                <div className="grid w-full p-2 place-items-center">
                    <Image src={assets.checked} alt="Success" width={40} height={40} />
                </div>
                <h1 className="mb-2">Meeting Created</h1>
                <button
                    onClick={copyMeetingLink}
                    className="bg-[#0E78F9] text-sm flex-center gap-2 w-full mb-2 px-3 py-1 rounded-md"
                >
                    <Image src={assets.copy} alt="Copy" width={15} height={15} />
                    Copy Meeting Link
                </button>
            </div> */}
        </>
    );
};

export default MeetingModal;

// "use client";

// import React, { useState } from "react";
// import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
// import { useUser } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { assets } from "@/constants";
// import { useMeetingModal } from "@/providers/MeetingModalContext";
// import { useToast } from "@/providers/ToastProvider";

// const initialValues = {
//   dateTime: new Date(),
//   description: "",
//   link: "",
// };

// const MeetingModal = () => {
//   const [values, setValues] = useState(initialValues);
//   const [callDetail, setCallDetail] = useState<Call | null>(null);
//   const [isCreating, setIsCreating] = useState(false);
//   const client = useStreamVideoClient();
//   const router = useRouter();
//   const { user } = useUser();

//   const {
//     toastSetStates: { setMessage, setIsToastOpen },
//   } = useToast();

//   const {
//     states: {
//       isOpen,
//       modalTitle,
//       btnContent,
//       child,
//       buttonType,
//       isMeetingCreated,
//     },
//     setStates: { setIsOpen, setIsMeetingCreated },
//   } = useMeetingModal();

//   const createMeeting = async () => {
//     if (!client || !user) return;

//     setIsCreating(true);
//     try {
//       if (!values.dateTime) {
//         setIsToastOpen(true);
//         setMessage("Please select a date and time");
//         return;
//       }

//       const newId = crypto.randomUUID();
//       const call = client.call("default", newId);

//       if (!call) throw new Error("Failed to create meeting");

//       const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
//       const description = values.description || "Instant Meeting";

//       await call.getOrCreate({
//         data: {
//           starts_at: startsAt,
//           custom: {
//             description,
//           },
//         },
//       });

//       setCallDetail(call);

//       if (!values.description) {
//         router.push(`/meeting/${call.id}`);
//       }

//       setIsToastOpen(true);
//       setMessage("Meeting Created");
//       setIsMeetingCreated(true);
//       setIsOpen(false);
//     } catch (error) {
//       console.error(error);
//       setMessage("Failed to create meeting");
//       setIsToastOpen(true);
//     } finally {
//       setIsCreating(false);
//     }
//   };

//   const copyMeetingLink = () => {
//     if (callDetail?.id) {
//       navigator.clipboard.writeText(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetail.id}`
//       );
//       setIsMeetingCreated(false);
//       setIsToastOpen(true);
//       setMessage("Link Copied");
//     } else {
//       setIsToastOpen(true);
//       setMessage("Error: Meeting ID not found");
//     }
//   };

//   if (modalTitle === "") return null;

//   return (
//     <>
//       {/* Backdrop */}
//       <div
//         onClick={() => {
//           setIsOpen(false);
//           setIsMeetingCreated(false);
//         }}
//         className={`fixed ${isOpen || isMeetingCreated ? "open" : "close"} top-0 left-0 z-10 w-full h-full backdrop-blur-md`}
//       ></div>

//       {/* Create Meeting Modal */}
//       <div
//         className={`fixed ${isOpen ? "open" : "close"} bg-dark-2 rounded-md text-center p-6 w-[90%] max-w-md z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl`}
//       >
//         <div
//           onClick={() => setIsOpen(false)}
//           className="absolute cursor-pointer top-4 right-4"
//         >
//           <Image src={assets.icon} alt="Close" width={20} height={20} />
//         </div>

//         <h1 className="mb-4 text-xl font-bold text-white">{modalTitle}</h1>

//         {child}

//         <button
//           onClick={() => {
//             if (buttonType === "Create Meeting") {
//               createMeeting();
//             }
//           }}
//           disabled={isCreating}
//           className="w-full px-4 py-2 mb-4 text-white transition-colors rounded-md bg-blue-1 hover:-blue-600 disabled:opacity-50"
//         >
//           {isCreating ? "Creating..." : btnContent}
//         </button>
//       </div>

//       {/* Success Modal */}
//       <div
//         className={`fixed ${isMeetingCreated ? "open" : "close"} bg-dark-2 rounded-md text-center p-6 w-[90%] max-w-md z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl`}
//       >
//         <div
//           onClick={() => setIsMeetingCreated(false)}
//           className="absolute cursor-pointer top-4 right-4"
//         >
//           <Image src={assets.icon} alt="Close" width={20} height={20} />
//         </div>

//         <div className="grid w-full p-4 place-items-center">
//           <Image src={assets.checked} alt="Success" width={50} height={50} />
//         </div>

//         <h1 className="mb-4 text-xl font-bold text-white">Meeting Created</h1>

//         <p className="mb-4 text-gray-300">Your meeting has been successfully created</p>

//         <button
//           onClick={copyMeetingLink}
//           className="flex items-center justify-center w-full gap-2 px-4 py-2 mb-4 text-sm text-white transition-colors rounded-md bg-blue-1 hover:bg-blue-600"
//         >
//           <Image src={assets.copy} alt="Copy" width={15} height={15} />
//           Copy Meeting Link
//         </button>

//         <button
//           onClick={() => {
//             setIsMeetingCreated(false);
//             setIsOpen(false);
//           }}
//           className="text-sm text-gray-400 transition-colors hover:text-white"
//         >
//           Close
//         </button>
//       </div>
//     </>
//   );
// };

// export default MeetingModal;
