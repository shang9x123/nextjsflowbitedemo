'use client'
import { Button } from 'flowbite-react'
import React, { useState } from 'react'

export default function Mynavbar() {
    const [data, setData] = useState(false);
    function onclickhere(event: any) {
        setData(!data);
        console.log(data);
    }
    return (
        <div >
            <nav className="navbar flex flex-row justify-between items-center py-4" role="navigation" aria-label="navbar">
                <div className='logo shrink-0'>
                    <span className='logo w-20 text-3xl font-mono'>Hieens</span>
                </div>
                <div className='hidden md:block menu ml-auto'>
                    <ul className='flex gap-3'>
                        <li className='menu_item'>Home</li>
                        <li className='menu_item'>Doc</li>
                        <li className='menu_item'>Read</li>
                    </ul>
                </div>
                <Button onClick={onclickhere}>Xin chào</Button>
            </nav>
        </div>
    )
}
