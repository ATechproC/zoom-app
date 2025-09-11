"use client";

import { createContext, SetStateAction, useContext, useState } from "react";

interface ValuesProps {
    dateTime : Date;
    description : string;
    link : string;
}

interface FormProps {
    values : ValuesProps;
    setValues : React.Dispatch<SetStateAction<ValuesProps>>;
}

const FormContext = createContext({} as FormProps);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {

    const [values, setValues] = useState({
        dateTime: new Date(),
        description: "",
        link: "",
    });

    return <FormContext.Provider value={{values, setValues}}>
        {children}
    </FormContext.Provider>
}

export const useFormValues = () => {
    return useContext(FormContext);
}