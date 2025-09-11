"use client";

import { assets } from "@/constants";
import CustomHomeBox from "./CustomHomeBox";
import { useFormValues } from "@/providers/FormProvider";

const JoinMeeting = () => {
    const { values, setValues } = useFormValues();

    return (
        <CustomHomeBox
            modalTitle="Type the link here"
            btnContent="Join Meeting"
            isOpenModal={true}
            icon={assets.join}
            title="Join Meeting"
            desc="via invitation link"
            bgColor="#0E78F9"
        >
            <input
                value={values.link}
                onChange={(e) => setValues({ ...values, link: e.target.value })}
                className="w-full p-2 mb-1 border-none rounded-md outline-none bg-dark-3"
                type="text"
                placeholder="type the link here"
            />
        </CustomHomeBox>
    );
};

export default JoinMeeting;
