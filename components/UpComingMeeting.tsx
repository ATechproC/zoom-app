import { assets } from "@/constants";
import Image from "next/image";


const UpComingMeeting = () => {
    return <section className="mt-4 ">
        <h1 className="mb-3 font-bold font-xl">Today’s Upcoming Meetings</h1>
        <div className="flex-col gap-2 md:flex-row flex-items">
            <div className="p-3 bg-[#1C1F2E] rounded-[5px]">
                <div className="flex flex-col gap-1 p-1 ">
                    <div className="p-[6px] bg-glass w-fit rounded-md">
                        <Image
                            src={assets.add}
                            width={20}
                            height={20}
                            alt="icon"
                        />
                    </div>
                    <h2 className="font-bold tex-xl">Team Sync: Sprint Planning & Updates</h2>
                    <p className="text-sm text-gray-500">March 15, 2024 - 10:00 AM</p>
                </div>
                <div>
                    <div className="gap-1 bg-red-600 flex-items">
                        <div className="mt-3 flex-items">
                            <div className="w-[45px] h-[45px] rounded-full overflow-hidden">
                                <Image className="object-contain w-full h-full" src={assets.avatar} alt="" width={40} height={40} />
                            </div>
                            <div className=" relative -left-5 w-[45px] h-[45px] rounded-full overflow-hidden">
                                <Image className="object-contain w-full h-full" src={assets.avatar} alt="" width={40} height={40} />
                            </div>
                            <div className=" relative -left-10 w-[45px] h-[45px] rounded-full overflow-hidden">
                                <Image className="object-contain w-full h-full" src={assets.avatar} alt="" width={40} height={40} />
                            </div>
                            <div className=" relative -left-14  w-[45px] h-[45px] rounded-full overflow-hidden">
                                <p className="object-contain w-full h-full bg-[#1E2757] flex-center" >+9</p>
                            </div>
                        </div>
                        <div className="gap-3 flex-items">
                            <button className="bg-[#0E78F9]  py-1 rounded-sm px-4">Start</button>
                            <button className="bg-[#252A41] rounded-sm px-4 flex-items gap-1 py-[7px]">
                                <Image src={assets.copy} alt="copy" width={20} height={20} />
                                <p className="text-sm">Copy Invitation</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-3 bg-[#1C1F2E] rounded-[5px]">
                <div className="flex flex-col gap-1 p-1 ">
                    <div className="p-[6px] bg-glass w-fit rounded-md">
                        <Image
                            src={assets.add}
                            width={20}
                            height={20}
                            alt="icon"
                        />
                    </div>
                    <h2 className="font-bold tex-xl">Team Sync: Sprint Planning & Updates</h2>
                    <p className="text-sm text-gray-500">March 15, 2024 - 10:00 AM</p>
                </div>
                <div>
                    <div className="flex-between">
                        <div className="mt-3 flex-items">
                            <div className="w-[45px] h-[45px] rounded-full overflow-hidden">
                                <Image className="object-contain w-full h-full" src={assets.avatar} alt="" width={40} height={40} />
                            </div>
                            <div className=" relative -left-5 w-[45px] h-[45px] rounded-full overflow-hidden">
                                <Image className="object-contain w-full h-full" src={assets.avatar} alt="" width={40} height={40} />
                            </div>
                            <div className=" relative -left-10 w-[45px] h-[45px] rounded-full overflow-hidden">
                                <Image className="object-contain w-full h-full" src={assets.avatar} alt="" width={40} height={40} />
                            </div>
                            <div className=" relative -left-14  w-[45px] h-[45px] rounded-full overflow-hidden">
                                <p className="object-contain w-full h-full bg-[#1E2757] flex-center" >+9</p>
                            </div>
                        </div>
                        <div className="gap-3 flex-items">
                            <button className="bg-[#0E78F9]  py-1 rounded-sm px-4">Start</button>
                            <button className="bg-[#252A41] rounded-sm px-4 flex-items gap-1 py-[7px]">
                                <Image src={assets.copy} alt="copy" width={20} height={20} />
                                <p className="text-sm">Copy Invitation</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>;
};

export default UpComingMeeting;
