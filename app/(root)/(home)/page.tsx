import HomeCards from '@/components/HomeCards';
import UpComingMeeting from '@/components/UpComingMeeting';
import React from 'react'

function Home() {

    const newDate = new Date();

    const time = newDate.toLocaleTimeString().split(":");

    const currentTime = `${time[0]}:${time[1]}`;

    const currentDay = newDate.toDateString();

    return (
        <section className='md:center-element m-auto h-screen max-sm:w-[87%] md:max-w-[90%] mt-5'>
            <div className='relative w-full h-full bg-cover bg-heroBg max-h-[200px] m-auto rounded-[8px]'>
                <div className='relative px-3 py-1 text-sm rounded-md w-fit bg-red top-3 left-5 bg-glass'
                >Upcoming meeting at : 12:04 PM</div>
                <div className='absolute bottom-3 left-5'>
                    <h1> <span className='text-4xl font-semibold'> {currentTime}  </span>PM </h1>
                    <p>{currentDay}</p>
                </div>
            </div>
            <HomeCards />
            <UpComingMeeting />
        </section>
    )
}

export default Home