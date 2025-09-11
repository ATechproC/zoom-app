import CustomHomeBox from "./CustomHomeBox";
import { assets } from "@/constants";
import MeetingModal from "./MeetingModal";
const HomeCards = () => {
    return (
        <>
            <div className="flex flex-col flex-wrap gap-4 mt-4 flex-center md:flex-row">
                <CustomHomeBox
                    modalTitle="Start an instant Meeting"
                    btnContent="Start Meeting"
                    isOpenModal={true}
                    icon={assets.add}
                    title="New Meeting"
                    desc="Setup a new recording"
                    bgColor="#FF742E"
                />
                <CustomHomeBox
                    isOpenModal={false}
                    icon={assets.previous}
                    title="previous"
                    desc="Previous Meeting"
                    bgColor="#830EF9"
                />
                <CustomHomeBox
                    isOpenModal={false}
                    icon={assets.upcoming}
                    title="Upcoming"
                    desc="Upcoming Meeting"
                    bgColor="#0E78F9"
                />
                <CustomHomeBox
                    isOpenModal={false}
                    icon={assets.video}
                    title="View Recordings"
                    desc="Meeting recordings"
                    bgColor="#F9A90E"
                />
            </div>
            <MeetingModal />
        </>
    );
};

export default HomeCards;
