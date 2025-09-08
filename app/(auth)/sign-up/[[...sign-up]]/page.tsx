import { SignUp } from "@clerk/nextjs";
import React from "react";

function SingUpPage() {
    return <main className="w-full h-screen flex-center">
        <SignUp />
    </main>;
}

export default SingUpPage;
