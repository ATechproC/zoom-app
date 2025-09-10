"use client";

import { assets, sideBarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SideBar() {

    const pathName = usePathname();

    return (
        <div className="fixed z-20 max-sm:hidden bg-[#1C1F2E] w-[200px] p-3">
            <Link href="/">
                <div className="flex items-center gap-2 p-2">
                    <Image src={assets.logo} alt="" width={40} height={40} />
                    <p className="text-2xl font-bold text-white">Yoom</p>
                </div>
            </Link>
            <div
                className="flex flex-col items-center h-screen gap-3 text-white">
                {sideBarLinks.map(({ rout, label, icon }, index) => {
                    const isActive = pathName === rout ;

                    return (
                        <Link
                            href={rout}
                            key={index}
                            className={` ${isActive ? "bg-[#0E78F9]" : null
                                } flex h-[35px] items-center justify-between w-[90%] rounded-md`}
                        >
                            <div className="relative left-2">
                                <Image src={icon} alt={label} width={15} height={15} />
                            </div>
                            <p className="flex-1 text-center"> {label} </p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default SideBar;
