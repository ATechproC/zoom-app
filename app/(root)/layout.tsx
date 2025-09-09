
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import StreamVideoProvider from '@/providers/StreamClientProvider';
import React from 'react'

function RootLayout({children} : {children : React.ReactNode}) {
    return (
        <main>
            <SideBar/>
            <NavBar />
            <StreamVideoProvider>{children}</StreamVideoProvider>
        </main>
    )
}

export default RootLayout;