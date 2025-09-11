"use client";

import { FormProps } from "@/types";
import { createContext, useContext, useState } from "react";

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