
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import React from 'react'

function RootLayout({children} : {children : React.ReactNode}) {
    return (
        <main>
            <SideBar/>
            <NavBar />
            {children}
        </main>
    )
}

export default RootLayout;