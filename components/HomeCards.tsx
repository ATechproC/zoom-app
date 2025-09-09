
import CustomHomeBos from './CustomHomeBox'
import { assets } from '@/constants'
import MeetingModal from './MeetingModal'

const HomeCards = () => {
    
    return (
        <>
            <div className='flex flex-col items-center gap-4 mt-4 md:flex-row'>
                <CustomHomeBos
                    modalTitle="Start an instant Meeting"
                    btnContent="Start Meeting"
                    isOpenModal={true}
                    icon={assets.add} title="New Meeting" desc="Setup a new recording" bgColor="#FF742E" />
                <CustomHomeBos
                    isOpenModal={false}
                    icon={assets.join} title="Join Meeting" desc="via invitation link" bgColor="#0E78F9" />
                <CustomHomeBos
                    isOpenModal={false}
                    icon={assets.schedule} title="Schedule Meeting" desc="Plan your meeting" bgColor="#830EF9" />
                <CustomHomeBos
                    isOpenModal={false}
                    icon={assets.video} title="View Recordings" desc="Meeting recordings" bgColor="#F9A90E" />
            </div>
            <MeetingModal />
        </>
    )
}

export default HomeCards