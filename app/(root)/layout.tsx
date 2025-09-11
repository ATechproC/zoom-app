
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import Toast from '@/components/Toast';
import StreamVideoProvider from '@/providers/StreamClientProvider';
import React from 'react'

function RootLayout({children} : {children : React.ReactNode}) {
    return (
        <main>
            <Toast />
            <SideBar/>
            <NavBar />
            <StreamVideoProvider>{children}</StreamVideoProvider>
        </main>
    )
}

export default RootLayout;