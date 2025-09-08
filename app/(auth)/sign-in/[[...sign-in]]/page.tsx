import { SignIn } from '@clerk/nextjs'
import React from 'react'

function SingInPage() {
    return <main className="w-full h-screen flex-center">
        <SignIn />
    </main>
}

export default SingInPage