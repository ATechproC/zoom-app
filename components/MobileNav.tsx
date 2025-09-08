"use client";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetOverlay,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { assets, sideBarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MobileNav() {
    const pathName = usePathname();

    return (
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <SheetTitle>
                        <Image
                            className="cursor-pointer md:hidden"
                            src={assets.hamburger}
                            alt="hamburger"
                            width={30}
                            height={32}
                        />
                    </SheetTitle>
                </SheetTrigger>
                <SheetContent
                    side="left"
                    className="bg-dark-1 max-w-[240px] md:hidden"
                >
                    <div className="absolute gap-3 pt-1 -mt-4 cursor-pointer flex-items left-1 top-4">
                        <Image src={assets.logo} alt="logo" width={40} height={40} />
                    <p className="text-2xl font-bold text-white">Yoom</p>
                    </div>
                    <SheetClose asChild>
                        <SheetOverlay className="fixed inset-0 bg-black/10 -z-10" />
                    </SheetClose>
                    <section className="flex flex-col items-center h-screen gap-3 pt-6 text-white">
                        {sideBarLinks.map(({ rout, label, icon }, index) => {
                            const isActive = pathName === rout;
                            return (
                                <SheetClose key={index} asChild>
                                    <Link
                                        href={rout}
                                        className={` ${isActive ? "bg-[#0E78F9]" : null
                                            } flex h-[35px] items-center justify-between w-[90%] rounded-md`}
                                    >
                                        <div className="relative left-2">
                                            <Image src={icon} alt={label} width={15} height={15} />
                                        </div>
                                        <p className="flex-1 text-center"> {label} </p>
                                    </Link>
                                </SheetClose>
                            );
                        })}
                    </section>
                </SheetContent>
            </Sheet>
        </>
    );
}

export default MobileNav;
