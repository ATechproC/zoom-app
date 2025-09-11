"use client";

import { assets } from "@/constants";
import CustomHomeBox from "./CustomHomeBox";
import ReactDatePicker from "react-datepicker";
import { useFormValues } from "@/providers/FormProvider";

const CreateMeeting = () => {

    const { values, setValues } = useFormValues();

    return (
        <CustomHomeBox
            modalTitle="Create Meeting"
            btnContent="Schedule Meeting"
            isOpenModal={true}
            buttonType="Create Meeting"
            icon={assets.schedule}
            title="Schedule Meeting"
            desc="Plan your meeting"
            bgColor="#830EF9"
        >
            <div className="text-start">
                <label htmlFor="desc" className="block">
                    Add Description :
                </label>
                <textarea
                    value={values.description}
                    onChange={(e) => {
                        setValues((prev) => ({
                            ...prev,
                            description: e.target.value,
                        }));
                    }}
                    id="desc"
                    className="w-full border-none outline-none p-2 text-sm max-h-[50px] rounded-sm bg-dark-3"
                />
            </div>
            <div className="flex text-start w-full flex-col gap-2.5 mb-2.5">
                <label className="text-base font-normal leading-[22.4px] text-sky-2">
                    Select Date and Time :
                </label>
                <ReactDatePicker
                    selected={values.dateTime}
                    onChange={(date) => setValues({ ...values, dateTime: date! })}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className="w-full p-2 rounded bg-dark-3 focus:outline-none"
                    calendarClassName="flex items-center"
                />
            </div>
        </CustomHomeBox>
    );
};

export default CreateMeeting;
