"use client";

import { assets } from '@/constants'
import { useToast } from '@/providers/ToastProvider'
import Image from 'next/image'
import React, { useEffect } from 'react'

const Toast = () => {

    const {toastStates : {message, isOpen}, toastSetStates : {setIsOpen}} = useToast();

    useEffect(() => {
        setTimeout(() => {
            setIsOpen(false);
        }, 2000)
    }, [])

    // if(message === "") return;

    return (
        <div className={` ${isOpen ? "block" : "hidden"} fixed flex-center z-30 top-4 left-[50%] w-full -translate-x-[50%] h-10 bg-dark-2 rounded-md max-w-[300px]`}>
            <div
            onClick={() => {
                setIsOpen(false);
            }}
            className='absolute cursor-pointer right-2 top-1'>
                <Image src={assets.icon} alt='' width={20} height={20} />
            </div>
            <p> {message} </p>
        </div>
    )
}

export default Toast