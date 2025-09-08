import Image from 'next/image'
import React from 'react'

function CustomHomeBos({ icon, title, desc, bgColor }: { icon: string, title: string, desc: string, bgColor : string }) {
    return <section className={`relative h-[150px] md:w-[200px] w-full rounded-[10px] bg-[${bgColor}]`}
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

export default CustomHomeBos