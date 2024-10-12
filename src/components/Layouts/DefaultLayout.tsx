'use client'

import Sidebar from '@/components/Sidebar';
import React, {useState, useLayoutEffect} from 'react'
import Header from '@/components/Header';

export default function DefaultLayout(
    {
        children,
}: {
        children: React.ReactNode;
}) {
    
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className='flex'>
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className='relative flex flex-1 flex-col lg:ml-72.5'>
                {/* Header */}
                < Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}   />
                <main className='mx-auto max-w-screen-2xl p-4 dark:bg-[#121212] md:p-6 2xl:p-10'>
                    {children}
                </main>
            </div>
        </div>
    )
}