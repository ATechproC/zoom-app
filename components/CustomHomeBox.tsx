"use client";

import Image from 'next/image'
import { useMeetingModal } from '@/providers/MeetingModalContext'

interface CustomHomeBoxProps {
    icon: string;
    title: string;
    desc: string;
    bgColor: string;
    modalTitle?: string;
    btnContent?: string;
    isOpenModal: boolean;
}

function CustomHomeBox({ icon, title, desc, bgColor, modalTitle, btnContent, isOpenModal }: CustomHomeBoxProps) {

    const { setStates: { setIsOpen, setModalTitle, setBtnContent } } = useMeetingModal();

    return <section

        onClick={() => {
            if (isOpenModal) {
                setIsOpen(true);
                setModalTitle(modalTitle!);
                setBtnContent(btnContent!);
            }
        }}

        style={{ backgroundColor: bgColor }} className="relative h-[150px] md:w-[200px] w-[100%] rounded-[10px] cursor-pointer"
    >
        <div className='absolute cursor-pointer p-[6px] rounded-md top-3 left-3 bg-glass'>
            <Image src={icon} alt="" width={20} height={20} />
        </div>
        <div className='absolute bottom-3 left-3'>
            <h1 className='text-xl'> {title} </h1>
            <p className='text-sm'> {desc} </p>
        </div>
    </section>
}

export default CustomHomeBox