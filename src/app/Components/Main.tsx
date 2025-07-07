"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import MenuPanel from '../Module/MenuPanel';
import Welcome from '../Module/Welcome';
import Hamburger from '../Atom/Button/HamburgerButton';
export default function Main() {
    const [menuMode, setMenuMode] = useState<boolean>(true);

    return (
        <div className="
            flex 
            flex-col md:flex-row
            flex-grow
        ">
            {/* 画像部分 - モバイルでは上部に表示、デスクトップでは左側 */}
            <div className="
                w-full md:w-1/2 
                h-64 md:h-auto
                relative
            ">
                <Image
                    src="/ship.jpg"
                    alt="Ship deck view"
                    fill
                    className="object-cover"
                    quality={80}
                    priority
                />
            </div>

            {/* コンテンツ部分 - モバイルでは下部に表示、デスクトップでは右側 */}
            <div className="
                w-full md:w-1/2 
                bg-slate-700
                pt-6 sm:pt-8 md:pt-[5vh]
                pb-4 sm:pb-6 md:pb-10
                px-4 sm:px-6 md:px-10 
                flex flex-col 
                justify-start
                items-start 
                text-white
                relative
                min-h-screen md:min-h-0
            ">
                <div className="
                    absolute
                    top-6 sm:top-8 md:top-[5vh]
                    right-3 sm:right-5
                ">
                    <Hamburger menuMode={menuMode} setMenuMode={setMenuMode} />
                </div>
                <div className="
                    w-full
                    mt-0 pt-0
                    text-slate-200
                ">
                    {menuMode && <Welcome/>}
                    {!menuMode && <MenuPanel />}
                </div>
            </div>
        </div>
    );
}