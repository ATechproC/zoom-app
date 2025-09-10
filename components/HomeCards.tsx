
import CustomHomeBox from './CustomHomeBox'
import { assets } from '@/constants'
import MeetingModal from './MeetingModal';
import CreateMeeting from './CreateMeeting';
    const HomeCards = () => {


    return (
        <>
            <div className='flex flex-col items-center gap-4 mt-4 md:flex-row'>
                <CustomHomeBox
                    modalTitle="Start an instant Meeting"
                    btnContent="Start Meeting"
                    isOpenModal={true}
                    icon={assets.add} title="New Meeting" desc="Setup a new recording" bgColor="#FF742E" />
                <CreateMeeting />
                <CustomHomeBox
                    isOpenModal={false}
                    icon={assets.join} title="Join Meeting" desc="via invitation link" bgColor="#0E78F9"/>
                <CustomHomeBox
                    isOpenModal={false}
                    icon={assets.video} title="View Recordings" desc="Meeting recordings" bgColor="#F9A90E" />
            </div>
            <MeetingModal />
        </>
    )
}

export default HomeCards