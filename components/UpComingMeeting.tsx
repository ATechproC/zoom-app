import { assets } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const UpComingMeeting = () => {
    return (
        <section className="pb-5 mt-4">
            <div className="mb-3 text-center flex-between">
                <h1 className="font-bold font-xl">Today’s Upcoming Meetings</h1>
                <Link href="/upcoming" className="text-sm font-bold">
                    {" "}
                    see all
                </Link>
            </div>
            <div className="flex-col flex-wrap justify-around w-full gap-3 md:gap-2 md:flex-row flex-items">
                <div className="p-3 bg-[#1C1F2E] rounded-[5px] md:max-w-[360px] w-full">
                    <div className="flex flex-col gap-1 p-1 ">
                        <div className="p-[6px] bg-glass w-fit rounded-md">
                            <Image src={assets.add} width={15} height={15} alt="icon" />
                        </div>
                        <h2 className="text-sm font-bold md:tex-xl">
                            Team Sync: Sprint Planning & Updates
                        </h2>
                        <p className="text-sm text-gray-500">March 15, 2024 - 10:00 AM</p>
                    </div>
                    <div>
                        <div className="flex-col gap-2 flex-items md:flex-row">
                            <div className="mt-3 flex-items ">
                                <div className="w-[45px] h-[45px] rounded-full overflow-hidden">
                                    <Image
                                        className="object-contain w-full h-full"
                                        src={assets.avatar1}
                                        alt=""
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <div className=" relative -left-5 w-[45px] h-[45px] rounded-full overflow-hidden">
                                    <Image
                                        className="object-contain w-full h-full"
                                        src={assets.avatar2}
                                        alt=""
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <div className=" relative -left-10 w-[45px] h-[45px] rounded-full overflow-hidden">
                                    <Image
                                        className="object-contain w-full h-full"
                                        src={assets.avatar3}
                                        alt=""
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <div className=" relative -left-14 w-[45px] h-[45px] rounded-full overflow-hidden">
                                    <Image
                                        className="object-contain w-full h-full"
                                        src={assets.avatar4}
                                        alt=""
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <div className=" relative -left-[76px]  w-[45px] h-[45px] rounded-full overflow-hidden">
                                    <p className="object-contain w-full h-full bg-[#1E2757] flex-center">
                                        +9
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-3 bg-[#1C1F2E] rounded-[5px] md:max-w-[360px] w-full">
                    <div className="flex flex-col gap-1 p-1 ">
                        <div className="p-[6px] bg-glass w-fit rounded-md">
                            <Image src={assets.add} width={15} height={15} alt="icon" />
                        </div>
                        <h2 className="text-sm font-bold md:tex-xl">
                            Team Sync: Sprint Planning & Updates
                        </h2>
                        <p className="text-sm text-gray-500">March 15, 2024 - 10:00 AM</p>
                    </div>
                    <div>
                        <div className="flex-col gap-2 flex-items md:flex-row">
                            <div className="mt-3 flex-items">
                                <div className="w-[45px] h-[45px] rounded-full overflow-hidden">
                                    <Image
                                        className="object-contain w-full h-full"
                                        src={assets.avatar1}
                                        alt=""
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <div className=" relative -left-5 w-[45px] h-[45px] rounded-full overflow-hidden">
                                    <Image
                                        className="object-contain w-full h-full"
                                        src={assets.avatar2}
                                        alt=""
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <div className=" relative -left-10 w-[45px] h-[45px] rounded-full overflow-hidden">
                                    <Image
                                        className="object-contain w-full h-full"
                                        src={assets.avatar3}
                                        alt=""
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <div className=" relative -left-14 w-[45px] h-[45px] rounded-full overflow-hidden">
                                    <Image
                                        className="object-contain w-full h-full"
                                        src={assets.avatar4}
                                        alt=""
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <div className=" relative -left-[76px]  w-[45px] h-[45px] rounded-full overflow-hidden">
                                    <p className="object-contain w-full h-full bg-[#1E2757] flex-center">
                                        +9
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpComingMeeting;
